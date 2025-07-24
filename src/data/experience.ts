export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: 'fulltime' | 'contract' | 'freelance' | 'internship'| 'education';
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Jumuisha Technologies Ltd",
    location: "Remote",
    startDate: "2025-05",
    endDate: "Present",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Implemented automated testing and CI/CD pipelines",
      "Worked directly with clients to gather requirements and provide technical solutions",
      "Maintained and updated existing applications",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Django",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Docker",
      "AWS",
    ],
    type: "internship",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Unity Sacco",
    location: "Kitengela, Kenya",
    startDate: "2025-04",
    endDate: "Present",
    description:
      "Developing and maintaining the company's web applications, focusing on user experience and performance.",
    responsibilities: [
      "Architected and developed scalable web applications using React, Node.js, and MongoDB",
      "Led a team of 5 developers and implemented agile development practices",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product managers and designers to deliver user-centric solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "AWS",
    ],
    type: "fulltime",
  },

  // {
  //   id: "3",
  //   title: "Frontend Developer",
  //   company: "Digital Agency Pro",
  //   location: "New York, NY",
  //   startDate: "2019-03",
  //   endDate: "2020-05",
  //   description:
  //     "Specialized in creating engaging user interfaces and optimizing user experiences.",
  //   responsibilities: [
  //     "Developed responsive websites and web applications using React and Vue.js",
  //     "Collaborated with designers to implement pixel-perfect UI designs",
  //     "Optimized websites for performance and SEO",
  //     "Implemented accessibility best practices",
  //     "Worked with backend teams to integrate APIs",
  //   ],
  //   technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Sass", "Webpack"],
  //   type: "fulltime",
  // },
  {
    id: "4",
    title: "Freelance Web Developer",
    company: "Runway Africa",
    location: "Remote",
    startDate: "2022-01",
    endDate: "2022-06",
    description:
      "Provided web development services to small businesses and startups.",
    responsibilities: [
      "Developed custom websites and web applications for various clients",
      "Provided ongoing maintenance and support",
      "Worked with clients to understand their business requirements",
      "Delivered projects on time and within budget",
      "Managed multiple projects simultaneously",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"],
    type: "freelance",
  },
  {
    id: "5",
    title: "Computer Science student",
    company: "Daystar Unversity",
    location: "Remote",
    startDate: "2022-09",
    endDate: "2025-05",
    description:
      "Studied computer science fundamentals and developed programming skills.",
    responsibilities: [
      "Built responsive School projects' web applications using React and Node.js",
      "Learned software development methodologies and best practices",
      "Participated in coding competitions and hackathons",
      "Collaborated with peers on group projects",
      "Maintained a high GPA while balancing coursework and extracurricular activities",
    ],
    technologies: ["C++", "java", "flutter", "mySQL", "HTML5", "C"],
    type: "education",
  },
];

export const currentExperience = experiences.find(exp => exp.endDate === 'Present');
export const getExperienceByType = (type: Experience['type']) => 
  experiences.filter(exp => exp.type === type);