import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex h-16 sm:h-18 items-center justify-between py-3">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 sm:gap-3 font-display text-lg sm:text-xl font-semibold text-foreground hover:text-highlight transition-colors group"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-md bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={edifyLogo} 
              alt="Edify Logo" 
              className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Edify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
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
        <div className="hidden lg:block">
          <Button variant="accent" size="sm" className="gap-2">
            <Sparkles className="w-4 h-4" />
            Begin Learning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Button variant="accent" className="w-full gap-2">
                  <Sparkles className="w-4 h-4" />
                  Begin Learning
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}