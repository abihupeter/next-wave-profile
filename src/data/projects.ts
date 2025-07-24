export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack' | 'backend';
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Property listing",
    description:
      "a full-featured property listing application with user authentication, property management, and search functionality.",
    longDescription:
      "A comprehensive property listing application that allows users to register, log in, and manage their property listings. Features include advanced search filters, user profiles, and a responsive design.",
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "Django",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/abihupeter/listing.git",
    demo: "https://listing.kodinyumba.com/",
    image: "/images/kodi-logo.png",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Spareparts Marketplace",
    description:
      "A modern spareparts marketplace with real-time collaboration and analytics.",
    longDescription:
      "A full-stack spareparts marketplace application that allows users to buy and sell spare parts with real-time collaboration features, user authentication, and detailed analytics.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "svelte",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/abihupeter/spareparts-marketplace.git",
    demo: "https://spareparts-marketplace-two.vercel.app/",
    image: "/images/logo.png",
    featured: true,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts and interactive charts.",
    longDescription:
      "A responsive weather dashboard that provides detailed weather information, 7-day forecasts, interactive charts, and location-based weather alerts using multiple weather APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Geolocation API",
      "CSS3",
    ],
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    image: "/images/weather.jpg",
    featured: false,
    category: "web",
  },
  {
    id: "4",
    title: "Social Media API",
    description:
      "RESTful API for social media platform with authentication and real-time features.",
    longDescription:
      "A robust REST API for a social media platform featuring user authentication, post management, real-time messaging, friend systems, and comprehensive documentation.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Cloudinary",
      "Swagger",
    ],
    github: "https://github.com/username/social-api",
    demo: "https://social-api-docs.vercel.app",
    image: "/images/api.jpg",
    featured: false,
    category: "backend",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    longDescription:
      "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations, dark/light mode toggle, contact form, and optimized performance.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Django",
      "Express",
      "Vite",
    ],
    github: "https://github.com/abihupeter/next-wave-profile.git",
    demo: "https://next-wave-profile-qkji.vercel.app/",
    image: "/images/prtfolio.jpg",
    featured: true,
    category: "web",
  },
  {
    id: "6",
    title: "Chat Application",
    description:
      "Real-time chat application with group messaging and file sharing.",
    longDescription:
      "A real-time chat application with group messaging, file sharing, emoji support, and user presence indicators built with Socket.io and React.",
    technologies: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Multer",
      "JWT",
    ],
    github: "https://github.com/username/chat-app",
    demo: "https://chat-app-demo.vercel.app",
    image: "/images/chat.jpg",
    featured: false,
    category: "mobile",
  },
];

export const featuredProjects = projects.filter(project => project.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);