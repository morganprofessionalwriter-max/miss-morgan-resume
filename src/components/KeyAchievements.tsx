import { Heart, BookOpen, ShieldCheck, Users, Award, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    metric: "100%",
    title: "Parent Satisfaction",
    description: "Consistently maintained perfect parent satisfaction scores across all programs.",
  },
  {
    icon: BookOpen,
    metric: "Expert",
    title: "Curriculum Implementation",
    description: "Designed and deployed age-appropriate curricula aligned with state learning standards.",
  },
  {
    icon: ShieldCheck,
    metric: "100%",
    title: "State Compliance",
    description: "Achieved and maintained full compliance with all state licensing requirements.",
  },
  {
    icon: Users,
    metric: "50+",
    title: "Staff Mentored",
    description: "Trained and developed a diverse team of educators and support staff.",
  },
  {
    icon: Award,
    metric: "12+",
    title: "Years of Leadership",
    description: "Over a decade of executive-level experience in early childhood education.",
  },
  {
    icon: TrendingUp,
    metric: "40%",
    title: "Enrollment Growth",
    description: "Drove significant enrollment increases through community engagement and reputation building.",
  },
];

const KeyAchievements = () => {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Track Record
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key Achievements
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Measurable impact across every area of early childhood leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="text-2xl font-heading font-extrabold text-foreground">{item.metric}</span>
                  <h3 className="font-heading text-base font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
