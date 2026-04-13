import { Briefcase, RefreshCw, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Executive Branding",
    subtitle: "For C-Suite & Directors",
    price: "$499.99",
    description: "Comprehensive executive branding with personal narrative, board-ready resume, and LinkedIn optimization for senior leaders.",
    features: ["Executive biography", "Personal branding strategy", "Unlimited revisions", "Interview coaching session"],
  },
  {
    icon: RefreshCw,
    title: "Career Pivot",
    subtitle: "For Industry Changers",
    price: "$199.99",
    description: "Strategic repositioning of your experience to unlock new industries. We translate your skills into the language of your target field.",
    features: ["Transferable skills analysis", "Cover letter included", "LinkedIn optimization", "2 revision rounds"],
  },
  {
    icon: GraduationCap,
    title: "The Professional Start",
    subtitle: "For Rising Talent",
    price: "$99.99",
    description: "ATS-optimized resume crafted to help graduates and early-career professionals stand out and land their first big role.",
    features: ["ATS-optimized formatting", "Keyword optimization", "1 revision round", "PDF & DOCX formats"],
  },
];

const PricingSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tailored to Your <span className="text-gradient-cyan">Ambition</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Every career is unique. Choose the tier that matches where you're headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 relative"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-primary font-body text-sm font-medium mb-4">{service.subtitle}</p>

              <div className="mb-4">
                <span className="text-3xl font-heading font-bold text-foreground">{service.price}</span>
                <span className="text-muted-foreground font-body text-sm ml-1">/ one-time</span>
              </div>

              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full py-5 rounded-full font-body font-semibold text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
