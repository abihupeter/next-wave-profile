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
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, payment processing via Stripe, order tracking, and a complete admin dashboard for inventory management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    longDescription: 'A modern task management application that allows teams to collaborate in real-time, featuring drag-and-drop functionality, real-time notifications, file attachments, and detailed analytics.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/username/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
    longDescription: 'A responsive weather dashboard that provides detailed weather information, 7-day forecasts, interactive charts, and location-based weather alerts using multiple weather APIs.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Geolocation API', 'CSS3'],
    github: 'https://github.com/username/weather-dashboard',
    demo: 'https://weather-dashboard-demo.vercel.app',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'Social Media API',
    description: 'RESTful API for social media platform with authentication and real-time features.',
    longDescription: 'A robust REST API for a social media platform featuring user authentication, post management, real-time messaging, friend systems, and comprehensive documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Cloudinary', 'Swagger'],
    github: 'https://github.com/username/social-api',
    demo: 'https://social-api-docs.vercel.app',
    image: '/api/placeholder/600/400',
    featured: true,
    category: 'backend'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations and dark mode.',
    longDescription: 'A modern portfolio website built with React and Tailwind CSS, featuring smooth animations, dark/light mode toggle, contact form, and optimized performance.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio-demo.vercel.app',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'web'
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'Real-time chat application with group messaging and file sharing.',
    longDescription: 'A real-time chat application with group messaging, file sharing, emoji support, and user presence indicators built with Socket.io and React.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Multer', 'JWT'],
    github: 'https://github.com/username/chat-app',
    demo: 'https://chat-app-demo.vercel.app',
    image: '/api/placeholder/600/400',
    featured: false,
    category: 'fullstack'
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);