import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/username', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/username', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/username', icon: Twitter },
  { name: 'Email', href: 'mailto:hello@johndoe.dev', icon: Mail }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="/projects" className="text-muted-foreground hover:text-primary transition-smooth">
                Projects
              </a>
              <a href="/experience" className="text-muted-foreground hover:text-primary transition-smooth">
                Experience
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover-glow"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Always open to interesting conversations and opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}