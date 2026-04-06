const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-primary-foreground/10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-heading text-xl font-bold text-primary-foreground">
          Miss <span className="text-gradient-gold">Morgan</span>
        </a>
        <div className="flex gap-6">
          {["Portfolio", "Pricing", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-primary-foreground/50 hover:text-gold text-sm font-body transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Miss Morgan. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
