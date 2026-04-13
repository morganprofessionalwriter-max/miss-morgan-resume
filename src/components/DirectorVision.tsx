import { Target, Users, Lightbulb, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Every resume is tailored to specific roles and industries, using data-driven keyword strategies that pass ATS filters and catch recruiters' eyes.",
  },
  {
    icon: Users,
    title: "Personal Branding",
    description: "We go beyond listing experience — we craft your professional narrative to position you as a thought leader and the ideal candidate.",
  },
  {
    icon: Lightbulb,
    title: "Industry Intelligence",
    description: "Deep knowledge of hiring trends across tech, finance, healthcare, education, and government ensures your resume speaks the right language.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Partnership",
    description: "Your career doesn't stop at a resume. We provide continuous support with LinkedIn optimization, interview prep, and career strategy.",
  },
];

const DirectorVision = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The <span className="text-gradient-cyan">Agency Advantage</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            We combine strategic thinking with creative execution to deliver career documents 
            that don't just list your experience — they tell your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorVision;
