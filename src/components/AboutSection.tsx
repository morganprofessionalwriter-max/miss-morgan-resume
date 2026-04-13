import { Award, Target, Zap, Shield } from "lucide-react";

const highlights = [
  { icon: Target, label: "ATS Optimization Expert" },
  { icon: Award, label: "Certified Resume Writer" },
  { icon: Zap, label: "48-Hour Turnaround" },
  { icon: Shield, label: "Satisfaction Guaranteed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Why Miss Morgan
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            More Than a Resume — <span className="text-gradient-cyan">A Strategy</span>
          </h2>

          <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed mb-12">
            <p>
              We don't just write resumes — we engineer career documents that open doors. 
              With 15+ years of experience and deep knowledge of hiring algorithms, we position 
              you as the obvious choice for your target role.
            </p>
            <p>
              Every resume is handcrafted by our team, not AI-generated. We combine industry 
              expertise with proven ATS strategies to ensure your application stands out 
              in both automated systems and human review.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300"
              >
                <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-sm font-body font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
