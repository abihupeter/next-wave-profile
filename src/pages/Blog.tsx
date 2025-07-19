import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    title: "Optimizing React Performance",
    description:
      "Learn advanced patterns and profiling tips to make your React apps snappy.",
    date: "July 10, 2025",
    link: "#",
  },
  {
    title: "Building Modern Portfolios with Tailwind CSS",
    description:
      "Explore utility-first styling, animations, and responsive design techniques.",
    date: "June 28, 2025",
    link: "#",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Latest{" "}
          <span className="primary-gradient bg-clip-text text-transparent">
            Articles
          </span>
        </h1>
        <div className="grid gap-8">
          {posts.map((post, idx) => (
            <ScrollAnimation key={idx} animation="slide-up" delay={idx * 100}>
              <Card className="hover-lift shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
