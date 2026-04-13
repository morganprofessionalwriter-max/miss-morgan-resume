const companies = [
  "Google", "Amazon", "Goldman Sachs", "Microsoft", "Apple",
  "JPMorgan", "Meta", "Deloitte", "McKinsey", "Tesla",
  "Netflix", "Salesforce", "IBM", "Oracle", "Adobe",
];

const TrustedByScroller = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50 overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-muted-foreground font-body text-sm font-medium tracking-wider uppercase">
          Our Clients Land Jobs At...
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...companies, ...companies].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center mx-8 flex-shrink-0"
            >
              <span className="text-foreground/20 font-heading font-bold text-2xl tracking-tight hover:text-primary/40 transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TrustedByScroller;
