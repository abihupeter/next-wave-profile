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
  type: "fulltime" | "contract" | "freelance" | "internship" | "education";
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

  {
    id: "3",
    title: "Frontend Developer",
    company: "Catholic Organization of Relief Development Aid (CORDAID)",
    location: "kakamega, Kenya",
    startDate: "2025-08",
    endDate: "2025-09",
    description:
      "Specialized in creating engaging user interfaces and optimizing user experiences.",
    responsibilities: [
      "Developed responsive web applications using React and KoboToolbox",
      "Collaborated with designers to implement pixel-perfect UI designs",
      "Optimized websites for performance and SEO",
      "Implemented accessibility best practices",
      "Worked with backend teams to integrate APIs",
    ],
    technologies: ["React", "KoboToolbox", "JavaScript", "Webpack"],
    type: "contract",
  },
  {
    id: "4",
    title: "Freelance Web Developer",
    company: "Runway Africa",
    location: "Remote",
    startDate: "2024-01",
    endDate: "2024-06",
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
    title: "AWS Certified Cloud Practitioner (In Progress)",
    company: "Amazon Web Services (AWS)",
    location: "Remote",
    startDate: "2026-02",
    endDate: "Present",
    description:
      "Currently preparing for the AWS Certified Cloud Practitioner certification, focusing on cloud fundamentals, security, architecture, pricing, and core AWS services.",
    responsibilities: [
      "Studying AWS global infrastructure and cloud computing concepts",
      "Practicing deployment of services like EC2, S3, and RDS",
      "Learning IAM, security best practices, and shared responsibility model",
      "Understanding AWS billing, pricing models, and cost optimization",
      "Completing hands-on labs and mock certification exams",
    ],
    technologies: ["AWS", "EC2", "S3", "RDS", "IAM", "CloudWatch"],
    type: "education",
  },
  {
    id: "6",
    title: "Software Engineering student",
    company: "Moringa School",
    location: "Remote",
    startDate: "2023-05",
    endDate: "2023-11",
    description:
      "Completed an intensive software engineering short course focused on full-stack development and real-world project building",
    responsibilities: [
      "Built responsive full-stack applications using React and Node.js",
      "Developed RESTful APIs and connected applications to MongoDB and MySQL databases",
      "Implemented authentication and state management in web applications",
      "Collaborated in agile team projects using Git and GitHub",
      "Presented capstone projects demonstrating end-to-end system development",
    ],
    technologies: [
      "Java",
      "MySQL",
      "HTML5",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Git",
    ],
    type: "education",
  },
  {
    id: "7",
    title: "Computer Science student",
    company: "Daystar University",
    location: "Nairobi, Kenya",
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

export const currentExperience = experiences.find(
  (exp) => exp.endDate === "Present"
);
export const getExperienceByType = (type: Experience["type"]) =>
  experiences.filter((exp) => exp.type === type);
