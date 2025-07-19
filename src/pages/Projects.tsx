import { useState } from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects, Project } from '@/data/projects';

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'web', label: 'Frontend', count: projects.filter(p => p.category === 'web').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <ScrollAnimation animation="slide-up" delay={index * 100}>
      <Card className="hover-lift shadow-card group h-full">
        <CardHeader className="p-0">
          <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="group-hover:text-primary transition-smooth">
                {project.title}
              </CardTitle>
              {project.featured && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription className="mb-4">
              {project.description}
            </CardDescription>
            <p className="text-sm text-muted-foreground mb-4">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {/* <div className="flex items-center gap-2 pt-8 border-t">
            <Button size="sm" variant="outline" asChild className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </ScrollAnimation>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                My <span className="primary-gradient bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my skills in full-stack development, 
                modern web technologies, and problem-solving approaches.
              </p>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {categories.filter(cat => cat.id !== 'all').map((category, index) => (
              <ScrollAnimation key={category.id} animation="slide-up" delay={index * 100}>
                <Card className="text-center hover-lift shadow-card">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
                      {category.count}
                    </div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {category.label}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by category:</span>
              </div>
              <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-5 gap-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm"
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <ScrollAnimation animation="fade-in">
            <Card className="shadow-elegant">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="primary-gradient hover-glow">
                    <a href="/contact" className="flex items-center">
                      Start a Project
                    </a>
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    <a href="mailto:abihupita@gmail.com" className="flex items-center">
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