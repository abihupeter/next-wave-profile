import { Hero } from '@/components/sections/Hero';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { topSkills } from '@/data/skills';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work, featuring full-stack applications and modern web solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation 
                key={project.id} 
                animation="slide-up" 
                delay={index * 100}
              >
                <Card className="hover-lift shadow-card group">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-in">
            <div className="text-center">
              <Button asChild className="primary-gradient hover-glow">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Top Skills */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Top Skills</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topSkills.map((skill, index) => (
              <ScrollAnimation 
                key={skill.name} 
                animation="slide-up" 
                delay={index * 50}
              >
                <Card className="hover-lift shadow-card group text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3 group-hover:animate-float">
                      {/* Placeholder for skill icon */}
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{skill.name[0]}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="primary-gradient h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level * 10}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-in" delay={400}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="hover-lift">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-in">
            <Card className="shadow-elegant">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="primary-gradient hover-glow">
                    <Link to="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-lift">
                    <a href="mailto:hello@johndoe.dev">
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}