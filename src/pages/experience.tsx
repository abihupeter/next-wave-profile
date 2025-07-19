import { useState } from "react";
import { currentExperience, experiences } from "@/data/experience";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const typeLabels = {
  fulltime: "Full-time",
  freelance: "Freelance",
  internship: "Internship",
    contract: "Contract",
  education: "Education",
};

export default function ExperiencePage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [compact, setCompact] = useState(true);

  const filteredExperiences = filter
    ? experiences.filter((exp) => exp.type === filter)
    : experiences;

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My{" "}
          <span className="primary-gradient bg-clip-text text-transparent">
            Experience
          </span>
        </h1>

        {/* Filter + Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 hover:scale-105 transition-transform">
          {Object.entries(typeLabels).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(filter === key ? null : key)}
              size="sm"
            >
              {label}
            </Button>
          ))}
          <Button
            variant={compact ? "default" : "outline"}
            onClick={() => setCompact(!compact)}
            size="sm"
          >
            {compact ? "Detailed View" : "Compact View"}
          </Button>
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp, idx) => (
            <ScrollAnimation
              key={exp.id}
              animation="slide-up"
              delay={idx * 100}
            >
              <Card className="hover:scale-[1.01] transition-transform duration-300 shadow-card">
                <CardHeader>
                  <CardTitle>
                    {exp.title} @ {exp.company}
                  </CardTitle>
                  <div className="text-muted-foreground text-sm">
                    {formatDateRange(exp.startDate, exp.endDate)} •{" "}
                    {typeLabels[exp.type]}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    {exp.description}
                  </p>
                  {!compact && (
                    <ul className="list-disc list-inside mb-4 text-sm space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDateRange(start: string, end: string) {
  const format = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    return `${new Date(Number(year), Number(month) - 1).toLocaleString(
      "default",
      {
        month: "short",
      }
    )} ${year}`;
  };

  return `${format(start)} – ${format(end)}`;
}
