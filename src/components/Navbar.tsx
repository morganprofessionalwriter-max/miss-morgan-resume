import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-primary-foreground">
          Miss <span className="text-gradient-gold">Morgan</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-primary-foreground/70 hover:text-gold text-sm font-body font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-gold text-secondary text-sm font-body font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-gold text-sm font-body font-medium"
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
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
