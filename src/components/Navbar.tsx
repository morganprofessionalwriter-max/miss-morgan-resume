import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Vision", href: "#vision" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-elevated border-b border-primary-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 py-4">
        <a href="#" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
          Miss <span className="text-gradient-gold">Morgan</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/70 hover:text-accent text-sm font-body font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-gold text-secondary text-sm font-body font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-nav border-t border-primary-foreground/10 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-accent text-sm font-body font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-gold text-secondary text-sm font-body font-semibold px-5 py-3 rounded-full"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
