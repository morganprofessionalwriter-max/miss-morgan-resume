import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Trash2, LogOut, Star, Clock, CheckCircle, XCircle } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Review = Database["public"]["Tables"]["reviews"]["Row"];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) {
        checkAdmin(session.user.id);
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        checkAdmin(session.user.id);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    setIsAdmin(!!data);
    setLoading(false);
    if (data) fetchReviews();
  };

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setReviews(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthLoading(false);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    }
  };

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("reviews").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: `Review ${status}` });
      fetchReviews();
    }
  };

  const deleteReview = async (id: string) => {
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Review deleted" });
      fetchReviews();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  };

  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="glass-card rounded-2xl p-8 w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to manage reviews</p>
          </div>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 border-border/50"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background/50 border-border/50"
            />
          </div>
          <Button type="submit" disabled={authLoading} className="w-full">
            {authLoading ? "Signing in..." : "Sign In"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            <a href="/" className="text-primary hover:underline">← Back to site</a>
          </p>
        </form>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="glass-card rounded-2xl p-8 text-center max-w-md">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You don't have admin privileges.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={handleLogout}>Sign Out</Button>
            <Button asChild><a href="/">Back to Site</a></Button>
          </div>
        </div>
      </div>
    );
  }

  const statusIcon = (status: string) => {
    if (status === "pending") return <Clock className="h-4 w-4 text-yellow-500" />;
    if (status === "approved") return <CheckCircle className="h-4 w-4 text-green-500" />;
    return <XCircle className="h-4 w-4 text-red-500" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <h1 className="font-heading text-xl font-bold text-foreground">Review Dashboard</h1>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-primary hover:underline">← Site</a>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", count: reviews.length, color: "text-foreground" },
            { label: "Pending", count: reviews.filter((r) => r.status === "pending").length, color: "text-yellow-500" },
            { label: "Approved", count: reviews.filter((r) => r.status === "approved").length, color: "text-green-500" },
            { label: "Rejected", count: reviews.filter((r) => r.status === "rejected").length, color: "text-red-500" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <p className={`text-2xl font-bold font-heading ${s.color}`}>{s.count}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(["pending", "approved", "rejected", "all"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f} {f !== "all" && `(${reviews.filter((r) => r.status === f).length})`}
            </Button>
          ))}
        </div>

        {/* Reviews list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="glass-card rounded-xl p-8 text-center">
              <p className="text-muted-foreground">No {filter !== "all" ? filter : ""} reviews found.</p>
            </div>
          )}
          {filtered.map((review) => (
            <div key={review.id} className="glass-card rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {statusIcon(review.status)}
                    <span className="font-heading font-bold text-foreground">{review.author_name}</span>
                    {review.author_role && (
                      <span className="text-xs text-muted-foreground">— {review.author_role}</span>
                    )}
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm italic">"{review.quote}"</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {review.status !== "approved" && (
                    <Button size="sm" variant="outline" onClick={() => updateStatus(review.id, "approved")}
                      className="text-green-500 border-green-500/30 hover:bg-green-500/10">
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                  {review.status !== "rejected" && (
                    <Button size="sm" variant="outline" onClick={() => updateStatus(review.id, "rejected")}
                      className="text-red-500 border-red-500/30 hover:bg-red-500/10">
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={() => deleteReview(review.id)}
                    className="text-muted-foreground border-border/50 hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
