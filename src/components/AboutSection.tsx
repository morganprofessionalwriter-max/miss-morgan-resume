import { Award, BookOpen, Briefcase, Heart } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "12+ Years in Education Leadership" },
  { icon: Award, label: "State-Certified Director" },
  { icon: BookOpen, label: "Curriculum Development Expert" },
  { icon: Heart, label: "Passionate Child Advocate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hi, I'm Miss Morgan
          </h2>

          <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed mb-12">
            <p>
              I'm a dedicated Early Childhood Education Director with over 12 years of hands-on experience 
              shaping programs that make a lasting impact on children's lives and families' well-being.
            </p>
            <p>
              My career has been driven by a single mission: to create safe, inspiring, and innovative 
              learning environments where every child can reach their full potential.
            </p>
            <p>
              From curriculum design to staff leadership, compliance management to community partnerships, 
              I bring a strategic, compassionate approach to everything I do.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-5 shadow-card border border-border/50 hover:border-accent/30 transition-colors"
              >
                <item.icon className="h-6 w-6 text-accent mx-auto mb-3" />
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
