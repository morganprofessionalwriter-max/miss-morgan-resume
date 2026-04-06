import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    quote: "Within two weeks of sending out my new resume, I had interviews at three top companies. The investment paid for itself a hundred times over.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Software Engineer → PM",
    quote: "I was stuck in my career transition for months. The career-change resume perfectly highlighted my transferable skills. I landed my dream PM role!",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Associate Professor",
    quote: "My academic CV was a mess. The final product was polished, well-organized, and helped me secure a tenure-track position at a top university.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
