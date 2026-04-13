import { ShieldCheck, Award, GraduationCap, BadgeCheck, FileCheck } from "lucide-react";

const credentials = [
  { icon: BadgeCheck, label: "Certified Professional Resume Writer" },
  { icon: GraduationCap, label: "Career Development Facilitator" },
  { icon: ShieldCheck, label: "ATS Optimization Specialist" },
  { icon: Award, label: "Executive Branding Expert" },
  { icon: FileCheck, label: "Federal Resume Certified" },
];

const CredentialsRibbon = () => {
  return (
    <section className="py-16 bg-muted/20 border-y border-border/30">
      <div className="container">
        <p className="text-center text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-10">
          Credentials & Certifications
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex items-center gap-3 glass-card rounded-full px-6 py-3"
            >
              <cred.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-body font-medium text-foreground whitespace-nowrap">{cred.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsRibbon;
