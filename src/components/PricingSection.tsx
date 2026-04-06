import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$99.99",
    description: "Perfect for entry-level professionals and recent graduates",
    features: [
      "Professional resume rewrite",
      "ATS-optimized formatting",
      "1 revision round",
      "Delivered in 5 business days",
      "PDF & DOCX formats",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$199.99",
    description: "Ideal for mid-career professionals seeking advancement",
    features: [
      "Everything in Basic",
      "Cover letter included",
      "LinkedIn profile optimization",
      "2 revision rounds",
      "Delivered in 3 business days",
      "Keyword optimization report",
      "60-day support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$499.99",
    description: "For executives and senior leaders who demand the best",
    features: [
      "Everything in Standard",
      "Executive biography",
      "Personal branding strategy",
      "Unlimited revisions",
      "Delivered in 48 hours",
      "Interview coaching (1 session)",
      "90-day priority support",
      "Thank you / follow-up letter",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Invest in Your Career
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Choose the package that fits your career goals. Every plan includes a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-secondary text-secondary-foreground shadow-elevated scale-105 border-2 border-gold"
                  : "bg-card text-card-foreground shadow-card hover:shadow-elevated"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary text-xs font-body font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" /> MOST POPULAR
                </div>
              )}

              <h3 className="font-heading text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm font-body mb-6 ${plan.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                <span className={`text-sm font-body ml-1 ${plan.popular ? "text-secondary-foreground/50" : "text-muted-foreground"}`}>
                  / one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-body">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-gold" : "text-gold"}`} />
                    <span className={plan.popular ? "text-secondary-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 rounded-full font-body font-semibold text-base ${
                  plan.popular
                    ? "bg-gradient-gold text-secondary hover:opacity-90"
                    : "bg-secondary text-white hover:bg-secondary/90"
                }`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
