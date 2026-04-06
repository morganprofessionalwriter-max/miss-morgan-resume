import { Award, BookOpen, Briefcase, Heart } from "lucide-react";
import headshot from "@/assets/morgan-headshot.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Headshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/5 blur-sm" />
              <img
                src={headshot}
                alt="Miss Morgan — Professional Resume Writer"
                className="relative rounded-2xl w-full object-cover shadow-elevated"
                width={384}
                height={480}
              />
            </div>
          </div>

          {/* Bio */}
          <div>
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

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-body font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
