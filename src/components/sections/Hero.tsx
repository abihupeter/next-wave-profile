import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Expert',
  'UI/UX Enthusiast'
];

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
    link.download = 'John_Doe_Resume.pdf';
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
    <section className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fade-in">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto w-40 h-40 mb-8">
              <div className="absolute inset-0 rounded-full primary-gradient animate-pulse-glow"></div>
              <img
                src="/api/placeholder/160/160"
                alt="John Doe"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-background shadow-elegant"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Hi, I'm{' '}
                <span className="primary-gradient bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground min-h-[2rem]">
                <span className="inline-block transition-smooth">
                  {roles[currentRole]}
                </span>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I create exceptional digital experiences with modern technologies. 
                Specializing in React, Node.js, and full-stack development with a 
                passion for clean code and innovative solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="primary-gradient hover-glow text-lg px-8 py-6"
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
              <div className="flex items-center justify-center gap-4 pt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href="mailto:hello@johndoe.dev">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}