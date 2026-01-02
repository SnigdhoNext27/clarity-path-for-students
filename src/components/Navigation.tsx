import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import edifyLogo from "@/assets/edify-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/resources", label: "Resources" },
  { href: "/apphub", label: "App Hub" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <nav className="container-wide flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 font-display text-xl font-semibold text-foreground hover:text-highlight transition-colors group"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-md bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={edifyLogo} 
              alt="Edify Logo" 
              className="relative w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Edify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === link.href
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="accent" size="sm">
            Begin Learning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background"
          >
            <div className="container-wide py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === link.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" className="mt-2">
                Begin Learning
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
