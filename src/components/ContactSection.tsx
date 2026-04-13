import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Whether you're looking for a dedicated director or want to discuss educational leadership opportunities, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "morgan.professionalwriter@gmail.com" },
                { icon: Phone, text: "+1 (672) 702-3922" },
                { icon: MapPin, text: "Available nationwide — open to relocation" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground/70 font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border/50 space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="rounded-lg py-5 font-body"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="rounded-lg py-5 font-body"
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg py-5 font-body"
            />
            <Textarea
              placeholder="Tell me about the opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="rounded-lg font-body resize-none"
            />
            <Button className="w-full bg-gradient-gold text-secondary rounded-full py-6 font-body font-semibold text-base hover:opacity-90">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
