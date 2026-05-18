import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/60 font-body text-xs font-medium tracking-wider uppercase">
                98% Interview Success Rate
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] mb-6 animate-fade-up delay-100">
              Your Career,{" "}
              <span className="text-gradient-cyan">Reimagined.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-xl animate-fade-up delay-200">
              We craft high-impact resumes for leaders and innovators that bypass 
              ATS filters and land interviews. <span className="text-foreground font-medium">98% success rate.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-6 text-base rounded-full hover:opacity-90 transition-all glow-cyan"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles className="mr-2 h-5 w-5" /> Get Your Free Review
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 text-foreground px-8 py-6 text-base rounded-full hover:bg-foreground/5 font-heading font-semibold"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 mt-12 animate-fade-up delay-400">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-heading font-bold text-primary">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-foreground font-heading font-bold text-sm">5,000+ Careers Transformed</p>
                <p className="text-muted-foreground font-body text-xs">Join thousands of successful professionals</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Portrait */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute -inset-6 bg-primary/20 rounded-[2rem] blur-3xl" />
              <div className="relative glass-card rounded-[2rem] p-3 overflow-hidden animate-pulse-glow">
                <img
                  src={heroPortrait}
                  alt="Professional resume writing expert"
                  width={896}
                  height={1088}
                  className="rounded-[1.5rem] w-[26rem] h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary/30 blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-14 h-14 rounded-full bg-primary/20 blur-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
