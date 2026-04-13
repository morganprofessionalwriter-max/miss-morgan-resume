import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Patricia Williams",
    role: "School District Superintendent",
    quote: "Morgan's leadership transformed our early childhood program. Her strategic vision and dedication to excellence resulted in measurable improvements across every metric we track.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Parent & Community Advocate",
    quote: "My children thrived under Morgan's direction. The curriculum was innovative, the environment was nurturing, and the communication with parents was exemplary. She sets the gold standard.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Board of Directors Chair",
    quote: "In my 20 years on the board, I've never seen a director with Morgan's combination of operational excellence and genuine passion for child development. She's truly exceptional.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Early Childhood Education Professor",
    quote: "Morgan's approach to curriculum implementation is research-driven and innovative. She's a model for what early childhood leadership should look like in the 21st century.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Leaders Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-10 md:p-14 shadow-card border border-border/50 relative">
            <Quote className="absolute top-8 left-8 h-10 w-10 text-accent/20" />

            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div>
                <p className="font-heading font-bold text-lg text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground font-body">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
