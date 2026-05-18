import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Essentials",
    tagline: "Stand out with a recruiter-ready resume.",
    price: "$249",
    cadence: "one-time",
    features: [
      "ATS-optimized resume rewrite",
      "Industry-tailored language",
      "2 rounds of revisions",
      "48-hour delivery",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Career Accelerator",
    tagline: "The complete personal-brand package.",
    price: "$549",
    cadence: "one-time",
    features: [
      "Everything in Essentials",
      "Custom cover letter",
      "LinkedIn profile optimization",
      "30-min strategy call",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Reverse Recruiting",
    tagline: "We run your job search for you.",
    price: "$999",
    cadence: "/mo",
    features: [
      "We apply to roles for you",
      "Recruiter & hiring-manager outreach",
      "Weekly pipeline tracking",
      "Interview prep included",
    ],
    cta: "Book a Call",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            — Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, <span className="text-gradient-gold">transparent pricing.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Premium career services delivered by experienced strategists. No templates, no interns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 relative flex flex-col ${
                tier.featured ? "ring-2 ring-primary/60 shadow-soft" : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-body text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{tier.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">{tier.tagline}</p>

              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground font-body text-sm ml-1">{tier.cadence}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-5 rounded-full font-body font-semibold text-sm transition-all ${
                  tier.featured
                    ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
