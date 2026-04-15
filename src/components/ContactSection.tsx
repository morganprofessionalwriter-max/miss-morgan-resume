import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto link to notify the admin
    const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
    );
    
    // Open mailto to send notification
    window.open(`mailto:morgan.professionalwriter@gmail.com?subject=${subject}&body=${body}`, "_blank");

    toast({ title: "Consultation booked!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your <span className="text-gradient-cyan">Consultation</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Ready to transform your career? Let's start with a free consultation to discuss your goals and the best strategy for your resume.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "morgan.professionalwriter@gmail.com", href: "mailto:morgan.professionalwriter@gmail.com" },
                { icon: Phone, text: "+1 (672) 702-3922", href: "tel:+16727023922" },
                { icon: Facebook, text: "Connect on Facebook", href: "https://www.facebook.com/profile.php?id=100089375480637" },
                { icon: MapPin, text: "Available worldwide — remote consultations", href: "" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-foreground/70 hover:text-primary font-body text-sm transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-foreground/70 font-body text-sm">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="rounded-lg py-5 font-body bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="rounded-lg py-5 font-body bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg py-5 font-body bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
            />
            <Textarea
              placeholder="Tell us about your career goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="rounded-lg font-body resize-none bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
            />
            <Button disabled={sending} className="w-full bg-primary text-primary-foreground rounded-full py-6 font-body font-semibold text-base hover:opacity-90 glow-cyan">
              {sending ? "Sending..." : "Book Free Consultation"} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
