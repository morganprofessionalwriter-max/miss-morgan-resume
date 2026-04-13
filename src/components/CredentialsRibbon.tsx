import { ShieldCheck, Award, GraduationCap, BadgeCheck, HeartPulse } from "lucide-react";

const credentials = [
  { icon: HeartPulse, label: "CPR / First Aid Certified" },
  { icon: GraduationCap, label: "Child Development Associate (CDA)" },
  { icon: ShieldCheck, label: "State Director Credential" },
  { icon: Award, label: "NAEYC Accreditation Leader" },
  { icon: BadgeCheck, label: "SafeServ Certified" },
];

const CredentialsRibbon = () => {
  return (
    <section className="py-16 bg-muted/50 border-y border-border/50">
      <div className="container">
        <p className="text-center text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-10">
          Credentials & Certifications
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-card border border-border/50"
            >
              <cred.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-body font-medium text-foreground whitespace-nowrap">{cred.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsRibbon;
