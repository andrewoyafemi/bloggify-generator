
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-display text-2xl font-bold tracking-tight">
            GhostRyt
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background pt-20 px-6 z-40 transition-all duration-300 transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#features" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-lg font-medium py-2 border-b border-border"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-6 space-y-4">
            <Button className="w-full" variant="outline">
              Log in
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
