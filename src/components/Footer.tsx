import { useState } from "react";
import { MessageCircle, Mail, Send, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our best career tips weekly." });
    setEmail("");
  };

  return (
    <footer className="bg-muted/30 border-t border-border/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-heading text-2xl font-bold text-foreground tracking-tight">
              Miss <span className="text-gradient-cyan">Morgan</span>
            </a>
            <p className="text-muted-foreground font-body text-sm mt-4 leading-relaxed max-w-sm">
              Professional resume writing agency helping leaders, innovators, and rising talent
              land their dream roles. 5,000+ careers transformed.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/16727023922"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card glass-card-hover rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground/70 hover:text-primary transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Connect on WhatsApp
              </a>
              <a
                href="mailto:morgan.professionalwriter@gmail.com"
                className="inline-flex items-center gap-2 glass-card glass-card-hover rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground/70 hover:text-primary transition-all"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089375480637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card glass-card-hover rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground/70 hover:text-primary transition-all"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Services", "Portfolio", "Process", "Results", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary text-sm font-body transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-4">Career Tips</h4>
            <p className="text-muted-foreground font-body text-sm mb-4">
              Get weekly insider tips on resume writing, interviews, and career strategy.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full text-sm font-body bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
              />
              <Button type="submit" size="icon" className="rounded-full bg-primary text-primary-foreground hover:opacity-90 flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20">
        <div className="container py-6">
          <p className="text-center text-muted-foreground/50 text-xs font-body">
            © {new Date().getFullYear()} Miss Morgan Resume Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
