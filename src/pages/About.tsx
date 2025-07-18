import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download, Award, Code, Users, Coffee } from 'lucide-react';
import { skills, skillsByCategory } from '@/data/skills';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '25+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Award, label: 'Years Experience', value: '5+' }
];

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  About <span className="primary-gradient bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with 5+ years of experience building 
                  scalable web applications. I specialize in React, Node.js, and modern web 
                  technologies, with a keen eye for user experience and clean code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or mentoring aspiring developers. I believe in the 
                  power of technology to solve real-world problems and create meaningful impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleDownloadResume}
                    className="primary-gradient hover-glow"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button variant="outline" asChild className="hover-lift">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="absolute inset-0 primary-gradient rounded-lg blur opacity-20 animate-pulse-glow"></div>
                <img
                  src="/api/placeholder/500/600"
                  alt="John Doe"
                  className="relative z-10 rounded-lg shadow-elegant w-full max-w-md mx-auto"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation 
                key={stat.label} 
                animation="slide-up" 
                delay={index * 100}
              >
                <Card className="text-center hover-lift shadow-card">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg primary-gradient mb-4">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and proficiency levels.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
              <ScrollAnimation 
                key={category} 
                animation="slide-up" 
                delay={index * 150}
              >
                <Card className="shadow-card hover-lift">
                  <CardHeader>
                    <CardTitle className="capitalize">{category}</CardTitle>
                    <CardDescription>
                      {category === 'frontend' && 'User interface and experience technologies'}
                      {category === 'backend' && 'Server-side development and APIs'}
                      {category === 'database' && 'Data storage and management solutions'}
                      {category === 'tools' && 'Development tools and platforms'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <Badge variant="secondary">{skill.level}/10</Badge>
                          </div>
                          <Progress value={skill.level * 10} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <Card className="shadow-elegant">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">My Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 primary-gradient rounded-full flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Clean Code</h3>
                    <p className="text-muted-foreground">
                      Writing maintainable, scalable code that stands the test of time.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 primary-gradient rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">User-Centric</h3>
                    <p className="text-muted-foreground">
                      Prioritizing user experience and accessibility in every project.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 primary-gradient rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Staying updated with the latest technologies and best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}