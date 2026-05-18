import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FreeReviewCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold opacity-[0.04] pointer-events-none" />
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 relative">
            — Free for a limited time
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 relative">
            Get a Free Resume Review <span className="text-gradient-gold">+ LinkedIn Profile Audit.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto relative">
            A no-obligation expert review of your current materials — delivered within 48 hours.
          </p>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 font-body font-semibold relative"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get My Free Review <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-muted-foreground font-body text-xs mt-4 relative">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeReviewCTA;