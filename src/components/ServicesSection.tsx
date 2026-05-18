import { FileText, Mail, Linkedin, Target, Search, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Resume Writing",
    description: "ATS-optimized resumes engineered to pass screening filters and impress hiring managers.",
  },
  {
    icon: Mail,
    title: "Cover Letter Writing",
    description: "Compelling, role-specific letters that tell your story and earn the recruiter's attention.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description: "Magnetic profiles built for inbound recruiter outreach and search visibility.",
  },
  {
    icon: Target,
    title: "Job Search Strategy",
    description: "A clear plan to target the right roles, companies, and decision-makers — fast.",
  },
  {
    icon: Search,
    title: "Reverse Recruiting",
    description: "We do the searching, applying, and outreach so you focus on interviewing.",
  },
  {
    icon: GraduationCap,
    title: "Career Coaching",
    description: "1-on-1 coaching for interviews, salary negotiation, and long-term career growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            — What we do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services built to <span className="text-gradient-gold">land interviews.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Six focused offerings designed to position you as the obvious hire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <a
              key={s.title}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 block"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;