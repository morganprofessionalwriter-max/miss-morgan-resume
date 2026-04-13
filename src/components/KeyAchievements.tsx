import { FileText, Clock, DollarSign, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { icon: FileText, value: 5000, suffix: "+", label: "Resumes Written", prefix: "" },
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience", prefix: "" },
  { icon: DollarSign, value: 20, suffix: "M+", label: "Combined Salary Increases", prefix: "$" },
  { icon: Trophy, value: 98, suffix: "%", label: "Interview Success Rate", prefix: "" },
];

const Counter = ({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-foreground">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const KeyAchievements = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Success Metrics
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Numbers That <span className="text-gradient-cyan">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((item, i) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-8 text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <Counter target={item.value} prefix={item.prefix} suffix={item.suffix} />
              <p className="text-sm text-muted-foreground font-body mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
