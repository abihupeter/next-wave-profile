import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Download, Github, Linkedin, Twitter,Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/abihupeter",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abihu-peter-94b89125a/",
    icon: Linkedin,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/pierr.e095/",
    icon: Instagram,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide logic
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setScrolled(currentY > 50);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "abihuP_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-card border-b"
          : "bg-transparent",
        showNavbar ? "translate-y" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="font-fonarto text-4xl font-bold primary-gradient bg-clip-text text-transparent hover:text-white transition-smooth hover:scale-105"
            >
              AP
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:text-primary hover:scale-105",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:scale-105"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-glow hover:scale-105"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              ))}
            </div>
            <ThemeToggle />
            <Button
              onClick={handleDownloadResume}
              className="primary-gradient hover-glow hover:scale-105"
              title="click to download cv"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover-glow"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg border-b shadow-card">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-smooth",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-3 border-t">
              <div className="flex items-center justify-between px-3">
                <div className="flex items-center space-x-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover-glow"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="h-4 w-4" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={handleDownloadResume}
                  className="primary-gradient hover-glow"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
