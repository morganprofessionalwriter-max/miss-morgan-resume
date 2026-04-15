import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const fallbackTestimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Marketing → CMO at Fortune 500",
    quote: "Miss Morgan completely transformed my resume. Within two weeks of using my new executive branding package, I landed three C-suite interviews. Her strategic approach to positioning my experience was game-changing.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Career Change: Teaching → Product Management",
    quote: "I was stuck in education for 12 years and thought I'd never break into tech. Morgan's career pivot strategy highlighted transferable skills I didn't even know I had. I'm now a Senior PM at a top startup.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Recent PhD → Research Director at Google",
    quote: "The academic-to-industry transition is brutal. Morgan understood exactly how to translate my research experience into corporate language. Her ATS optimization was flawless — every application got a response.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Mid-Level Engineer → Engineering Director",
    quote: "I'd been applying to senior roles for months with zero callbacks. Two weeks after Morgan rewrote my resume, I had five interviews lined up. The ROI on this investment is immeasurable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);

  useEffect(() => {
    const loadApproved = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });
      if (data && data.length > 0) {
        setTestimonials(
          data.map((r) => ({
            name: r.author_name,
            role: r.author_role || "",
            quote: r.quote,
            rating: r.rating,
          }))
        );
      }
    };
    loadApproved();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-gradient-cyan">Success Stories</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-14 relative">
            <Quote className="absolute top-8 left-8 h-10 w-10 text-primary/15" />

            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-2">
                <p className="font-heading font-bold text-lg text-foreground">{t.name}</p>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-body">{t.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-colors"
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
