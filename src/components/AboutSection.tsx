import { Award, BookOpen, Briefcase, Heart } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "12+ Years Experience" },
  { icon: BookOpen, label: "Certified Resume Writer (CPRW)" },
  { icon: Award, label: "2,500+ Resumes Delivered" },
  { icon: Heart, label: "98% Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Hi, I'm <span className="text-gradient-gold">Miss Morgan</span>
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed mb-8">
            <p>
              I'm a Certified Professional Resume Writer with over 12 years of experience
              helping professionals at every level — from recent graduates to C-suite executives —
              land the roles they deserve.
            </p>
            <p>
              My approach is simple: I listen to your story, identify what makes you unique, and
              craft a compelling narrative that resonates with hiring managers and passes ATS
              systems with ease. Every resume I write is a partnership, not a template.
            </p>
            <p>
              When I'm not transforming careers, you'll find me mentoring aspiring writers,
              speaking at career workshops, or enjoying a great cup of coffee.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 bg-card rounded-xl px-4 py-4 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-body font-medium text-foreground text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
