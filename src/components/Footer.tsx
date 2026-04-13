import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry sent!", description: "Thank you for reaching out. I'll respond within 24 hours." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-gradient-hero border-t border-primary-foreground/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left: Brand + LinkedIn */}
          <div>
            <a href="#" className="font-heading text-2xl font-bold text-primary-foreground tracking-tight">
              Miss <span className="text-gradient-gold">Morgan</span>
            </a>
            <p className="text-primary-foreground/50 font-body text-sm mt-4 leading-relaxed max-w-sm">
              Dedicated Early Childhood Education Director empowering the next generation 
              through expert leadership, innovation, and a commitment to excellence.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-accent hover:border-accent/30 rounded-full px-5 py-2.5 text-sm font-body font-medium transition-all"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a
                href="mailto:morgan.professionalwriter@gmail.com"
                className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 hover:text-accent hover:border-accent/30 rounded-full px-5 py-2.5 text-sm font-body font-medium transition-all"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              {["About", "Portfolio", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-primary-foreground/40 hover:text-accent text-sm font-body transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
              Inquire for Leadership Opportunities
            </h3>
            <p className="text-primary-foreground/50 font-body text-sm mb-6">
              Interested in discussing a director or leadership position? Send me a note.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-lg py-5 font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-lg py-5 font-body bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <Textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={3}
                className="rounded-lg font-body resize-none bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30"
              />
              <Button className="w-full bg-gradient-gold text-secondary rounded-full py-5 font-body font-semibold text-sm hover:opacity-90">
                Send Inquiry <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/5">
        <div className="container py-6">
          <p className="text-center text-primary-foreground/30 text-xs font-body">
            © {new Date().getFullYear()} Miss Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
