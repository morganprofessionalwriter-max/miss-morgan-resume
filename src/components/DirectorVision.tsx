import { Target, Users, Lightbulb, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategic Center Management",
    description: "Data-driven decision-making combined with hands-on leadership to ensure every center operates at peak performance while maintaining a warm, nurturing environment.",
  },
  {
    icon: Users,
    title: "Staff Mentorship & Development",
    description: "Investing in educators through continuous professional development, supportive mentorship, and creating a culture where every team member can grow and excel.",
  },
  {
    icon: Lightbulb,
    title: "Curriculum Innovation",
    description: "Implementing research-backed, developmentally appropriate curricula that spark curiosity and prepare children for lifelong learning success.",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description: "Building strong partnerships between families, educators, and community stakeholders to create a holistic ecosystem that supports every child's development.",
  },
];

const DirectorVision = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(43 76% 52% / 0.2) 0%, transparent 50%)`
      }} />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Leadership Philosophy
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Director Vision
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg leading-relaxed">
            My approach to early childhood leadership is built on four interconnected pillars 
            that drive organizational excellence and meaningful outcomes for children and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/8 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <pillar.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">{pillar.title}</h3>
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorVision;
