import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Github, Twitter, Mail } from "lucide-react";
import edifyLogo from "@/assets/edify-logo.png";

const footerLinks = {
  learn: [
    { href: "/roadmaps", label: "All Roadmaps" },
    { href: "/resources", label: "Resources" },
    { href: "/apphub", label: "Application Hub" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/20">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      
      <div className="container-wide py-12 md:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold text-foreground mb-4 group">
              <motion.img 
                src={edifyLogo} 
                alt="Edify Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-md"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <span>Edify</span>
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm mb-6">
              A learning and clarity platform for everyone. Find your path, build your system, achieve your goals with calm focus.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "/contact", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Edify. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-highlight fill-highlight" /> and clarity
          </p>
        </div>
      </div>
    </footer>
  );
}