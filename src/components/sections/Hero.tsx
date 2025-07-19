import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import TypingNameHeading from './nametyping';


const roles = ["Next.js", "MongoDB", "Express.js", "Node.js", "React.js"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'abihu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-gradient ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fade-in">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            {/* Left: Text Content in blue box */}
            <div className="bg-blue-600/10 backdrop-blur-md p-8 rounded-2xl w-full lg:w-80% space-y-6 shadow-md hover:scale-105 transition-transform mt-16 sm:mt-0">
              <TypingNameHeading />

              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground min-h-[2rem]">
                <span
                  key={currentRole}
                  className="inline-block overflow-hidden whitespace-nowrap animate-typing"
                >
                  {roles[currentRole]}
                </span>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I create exceptional digital experiences with modern
                technologies. Specializing in Next.js, React and full-stack
                development with a passion for clean code and innovative
                solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="primary-gradient hover-glow text-lg px-8 py-6 hover:scale-105"
                  onClick={scrollToProjects}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 hover-lift"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a
                    href="https://github.com/abihupeter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/abihu-peter-94b89125a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href="mailto:abihupita@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative w-40 h-40 lg:w-60 lg:h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full primary-gradient animate-pulse-glow hover:scale-105"></div>
              <img
                src="/images/abihu.jpeg"
                alt="abihu"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-background shadow-elegant hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-105">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}