import { MessageSquare, PenTool, Send, ThumbsUp } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", description: "We discuss your career goals, target roles, and what makes you unique." },
  { icon: PenTool, title: "Crafting", description: "I write your resume using proven strategies and ATS-optimized formatting." },
  { icon: ThumbsUp, title: "Review", description: "You review the draft and we refine it until it's perfect." },
  { icon: Send, title: "Delivery", description: "Receive your final resume in multiple formats, ready to send." },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">How It Works</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple 4-Step Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="h-7 w-7 text-accent-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-secondary text-xs font-bold flex items-center justify-center font-body">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
