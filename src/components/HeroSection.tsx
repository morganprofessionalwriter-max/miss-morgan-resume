import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(43 76% 52% / 0.15) 0%, transparent 50%), 
                          radial-gradient(circle at 75% 75%, hsl(197 100% 45% / 0.1) 0%, transparent 50%)`
      }} />

      <div className="container relative z-10 py-24 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/60 font-body text-xs font-medium tracking-wider uppercase">
              Available for New Engagements
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
            Morgan{" "}
            <span className="text-gradient-gold">| Future-Focused</span>
            <br />
            Early Childhood Director
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 font-body leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Empowering the next generation through expert educational leadership, 
            curriculum innovation, and a commitment to child success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button
              size="lg"
              className="bg-gradient-gold text-secondary font-heading font-semibold px-8 py-6 text-base rounded-full hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Download className="mr-2 h-5 w-5" /> Download Executive CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/20 text-primary-foreground px-8 py-6 text-base rounded-full hover:bg-primary-foreground/5 font-heading font-semibold"
              onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Leadership Philosophy <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
