export interface Skill {
  name: string;
  level: number; // 1-10
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 9, icon: "react", category: "frontend" },
  { name: "Next.js", level: 9, icon: "next", category: "frontend" },
  { name: "TypeScript", level: 8, icon: "typescript", category: "frontend" },
  { name: "JavaScript", level: 9, icon: "javascript", category: "frontend" },
  { name: "HTML5", level: 9, icon: "html5", category: "frontend" },
  { name: "CSS3", level: 8, icon: "css3", category: "frontend" },
  { name: "Tailwind CSS", level: 9, icon: "tailwind", category: "frontend" },
  { name: "Sass", level: 2, icon: "sass", category: "frontend" },

  // Backend
  { name: "Node.js", level: 8, icon: "nodejs", category: "backend" },
  { name: "Express.js", level: 8, icon: "express", category: "backend" },
  { name: "Python", level: 1, icon: "python", category: "backend" },
  { name: "PHP", level: 5, icon: "php", category: "backend" },

  // Database
  { name: "MongoDB", level: 8, icon: "mongodb", category: "database" },
  { name: "PostgreSQL", level: 4, icon: "postgresql", category: "database" },
  { name: "MySQL", level: 8, icon: "mysql", category: "database" },
  { name: "Redis", level: 3, icon: "redis", category: "database" },

  // Tools
  { name: "Redux", level: 9, icon: "redux", category: "tools" },
  { name: "Git", level: 9, icon: "git", category: "tools" },
  { name: "Docker", level: 9, icon: "docker", category: "tools" },
  { name: "AWS", level: 6, icon: "aws", category: "tools" },
  { name: "Vercel", level: 8, icon: "vercel", category: "tools" },
  { name: "Figma", level: 2, icon: "figma", category: "tools" },
  { name: "Postman", level: 1, icon: "postman", category: "tools" },
];

export const skillsByCategory = {
  frontend: skills.filter(skill => skill.category === 'frontend'),
  backend: skills.filter(skill => skill.category === 'backend'),
  database: skills.filter(skill => skill.category === 'database'),
  tools: skills.filter(skill => skill.category === 'tools'),
  languages: skills.filter(skill => skill.category === 'languages')
};

export const topSkills = skills.filter(skill => skill.level >= 8).sort((a, b) => b.level - a.level);