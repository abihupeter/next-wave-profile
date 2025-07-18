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
  type: 'fulltime' | 'contract' | 'freelance' | 'internship';
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
    responsibilities: [
      'Architected and developed scalable web applications using React, Node.js, and MongoDB',
      'Led a team of 5 developers and implemented agile development practices',
      'Optimized application performance resulting in 40% faster load times',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with product managers and designers to deliver user-centric solutions'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'AWS'],
    type: 'fulltime'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    responsibilities: [
      'Built responsive web applications using React and Node.js',
      'Integrated third-party APIs and payment gateways',
      'Implemented automated testing and CI/CD pipelines',
      'Worked directly with clients to gather requirements and provide technical solutions',
      'Maintained and updated existing applications'
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    type: 'fulltime'
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    startDate: '2019-03',
    endDate: '2020-05',
    description: 'Specialized in creating engaging user interfaces and optimizing user experiences.',
    responsibilities: [
      'Developed responsive websites and web applications using React and Vue.js',
      'Collaborated with designers to implement pixel-perfect UI designs',
      'Optimized websites for performance and SEO',
      'Implemented accessibility best practices',
      'Worked with backend teams to integrate APIs'
    ],
    technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'Sass', 'Webpack'],
    type: 'fulltime'
  },
  {
    id: '4',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: '2018-01',
    endDate: '2019-02',
    description: 'Provided web development services to small businesses and startups.',
    responsibilities: [
      'Developed custom websites and web applications for various clients',
      'Provided ongoing maintenance and support',
      'Worked with clients to understand their business requirements',
      'Delivered projects on time and within budget',
      'Managed multiple projects simultaneously'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
    type: 'freelance'
  },
  {
    id: '5',
    title: 'Junior Developer',
    company: 'CodeStarter Inc',
    location: 'Austin, TX',
    startDate: '2017-06',
    endDate: '2017-12',
    description: 'Started my professional development career working on various web projects.',
    responsibilities: [
      'Assisted in developing web applications using JavaScript and PHP',
      'Learned version control with Git and collaborative development',
      'Participated in daily standups and sprint planning',
      'Fixed bugs and implemented minor features',
      'Worked closely with senior developers to improve coding skills'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'Git'],
    type: 'fulltime'
  }
];

export const currentExperience = experiences.find(exp => exp.endDate === 'Present');
export const getExperienceByType = (type: Experience['type']) => 
  experiences.filter(exp => exp.type === type);