import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <div key={location.pathname}>
            {children}
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
