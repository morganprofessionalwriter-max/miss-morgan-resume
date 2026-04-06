import { ArrowRight, Award, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resume.jpg";

const stats = [
  { icon: FileText, value: "2,500+", label: "Resumes Written" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Award, value: "12+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional resume writing" className="w-full h-full object-cover opacity-15" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-up">
            Professional Resume Writing Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Resumes That <span className="text-gradient-gold">Open Doors</span> to Your Dream Career
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            Expertly crafted resumes that showcase your unique value. From entry-level to C-suite, 
            I transform your career story into a powerful document that gets results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <Button
              size="lg"
              className="bg-gradient-gold text-secondary font-semibold px-8 py-6 text-base rounded-full hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground px-8 py-6 text-base rounded-full hover:bg-primary-foreground/10"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              See My Work
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12 animate-fade-up delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50 font-body">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
