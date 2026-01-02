import { Link } from "react-router-dom";
import edifyLogo from "@/assets/edify-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold text-foreground mb-4">
              <img 
                src={edifyLogo} 
                alt="Edify Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              Edify
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A learning and clarity platform for everyone. Find your path, build your system, achieve your goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/roadmaps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/apphub" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Application Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edify. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with clarity and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
