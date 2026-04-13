import { MessageSquare, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Consultation",
    description: "We deep-dive into your career goals, target roles, and unique value proposition in a 1-on-1 strategy session.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Strategy & Drafting",
    description: "Our team crafts your resume using proven ATS strategies, executive branding frameworks, and industry-specific keywords.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Launch & Interviews",
    description: "Receive your polished documents, apply with confidence, and start landing interviews within weeks.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Steps to <span className="text-gradient-cyan">Success</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-8 mb-12 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                )}
              </div>

              <div className="pb-12">
                <span className="text-primary/40 font-heading font-bold text-sm">{step.num}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body text-base leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
