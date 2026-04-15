import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WriteReviewSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    author_name: "",
    author_role: "",
    quote: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({ title: "Please select a rating", variant: "destructive" });
      return;
    }
    if (!formData.quote.trim() || !formData.author_name.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("reviews").insert({
      author_name: formData.author_name.trim(),
      author_role: formData.author_role.trim() || null,
      quote: formData.quote.trim(),
      rating,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Failed to submit review", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Review submitted!", description: "Your review will appear after approval." });
      setFormData({ author_name: "", author_role: "", quote: "" });
      setRating(0);
    }
  };

  return (
    <section id="write-review" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Share Your Experience
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Leave a <span className="text-gradient-cyan">Review</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Your feedback helps us improve and inspires others on their career journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-10 space-y-6">
          {/* Star Rating */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3 font-body">How would you rate our service?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoverRating || rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name *</label>
              <Input
                value={formData.author_name}
                onChange={(e) => setFormData((p) => ({ ...p, author_name: e.target.value }))}
                placeholder="Jane Doe"
                required
                maxLength={100}
                className="bg-background/50 border-border/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Role / Title</label>
              <Input
                value={formData.author_role}
                onChange={(e) => setFormData((p) => ({ ...p, author_role: e.target.value }))}
                placeholder="Marketing Director at Acme Corp"
                maxLength={150}
                className="bg-background/50 border-border/50"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Your Review *</label>
            <Textarea
              value={formData.quote}
              onChange={(e) => setFormData((p) => ({ ...p, quote: e.target.value }))}
              placeholder="Tell us about your experience working with Miss Morgan..."
              required
              maxLength={1000}
              rows={5}
              className="bg-background/50 border-border/50"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {loading ? "Submitting..." : "Submit Review"}
            <Send className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Reviews are moderated and will appear after approval.
          </p>
        </form>
      </div>
    </section>
  );
};

export default WriteReviewSection;
