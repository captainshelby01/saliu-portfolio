export interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend';
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  visualType: 'tutors' | 'allura' | 'v3fixer' | 'kanban';
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'database' | 'devops';
  skills: Skill[];
}

export interface TimelineItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
  isRemote?: boolean;
  isCurrent?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Saliu Oluwafemi',
    fullName: 'Saliu Oluwafemi Emmanuel',
    titles: [
      'Full Stack Developer',
      'UI/UX Enthusiast',
      'Problem Solver',
      'DevOps Practitioner'
    ],
    email: 'olukoyioluwafemi100@gmail.com',
    github: 'https://github.com/captainshelby01',
    linkedin: 'https://linkedin.com',
    location: 'Nigeria (Available for Remote)',
    availability: 'Available for Work',
    experienceYears: '3+ yrs'
  },
  
  projects: [
    {
      id: 1,
      title: 'The V3 Fixer',
      category: 'fullstack',
      description: 'An elegant professional platform for Winfrey Agbelese, The V3 Fixer. Offers executive communication architect branding, digital bookstores, pre-order systems for the V3 Devotional Trilogy, and full SEO/Schema optimizations.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'JSON-LD Schema'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://the-v3-fixer-website.vercel.app/',
      visualType: 'v3fixer'
    },
    {
      id: 2,
      title: 'Dr. J Tutors',
      category: 'frontend',
      description: 'A personalized academic home & online tutoring platform for K-12 students. Features custom booking forms, exam preparation modules (GCSE/WAEC/SAT), testimonial sliders, and automated WhatsApp inquiry integration.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Schema.org'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://dr-j-tutors.vercel.app/',
      visualType: 'tutors'
    },
    {
      id: 3,
      title: 'Allura Smiles Creative',
      category: 'frontend',
      description: 'A premium creative media & digital branding agency landing page. Features cinematic video integrations, modular portfolio galleries, client testimonials, and a custom lead generation flow to WhatsApp.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome', 'CSS Animations'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://allura-smiles-portfolio.vercel.app/',
      visualType: 'allura'
    },
    {
      id: 4,
      title: 'TaskFlow Kanban',
      category: 'fullstack',
      description: 'A Kanban-based collaborative project management system for developers. Supports drag-and-drop workspace cards, real-time board updates via WebSockets, and database synchronization.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://example.com',
      visualType: 'kanban'
    }
  ] as Project[],

  skills: [
    {
      title: 'Frontend Development',
      categoryKey: 'frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Backend Engineering',
      categoryKey: 'backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 90 },
        { name: 'Laravel / PHP', level: 92 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Databases & Cache',
      categoryKey: 'database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      categoryKey: 'devops',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'AWS (S3/EC2)', level: 70 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'ImpactDev Developers',
      period: '2024 - Present',
      isRemote: true,
      isCurrent: true,
      description: 'Building and maintaining full-stack web solutions remotely, delivering scalable products for clients across multiple sectors.',
      points: [
        'Developing end-to-end features using React, Node.js, and Laravel/PHP for client-facing web applications.',
        'Designing and optimizing RESTful API architectures with JWT authentication and role-based access control.',
        'Collaborating asynchronously with distributed teams using Git workflows, code reviews, and agile sprints.',
        'Deploying and maintaining production environments with CI/CD pipelines and cloud infrastructure.'
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Innovate Digital Agency',
      period: '2023 - 2024',
      isRemote: true,
      description: 'Built interactive and modern customer-facing web applications across various sectors.',
      points: [
        'Developed client web portals utilizing React, TypeScript, and modern state-management structures.',
        'Engineered secure backend endpoints with JWT authentication, role management, and request validation.',
        'Integrated payment processing systems (Stripe) and mail dispatch queue logic.',
        'Coordinated database schema setups for MongoDB, resolving complex transactional queries.'
      ]
    },
    {
      id: 3,
      role: 'Software Engineer Intern',
      company: 'Altair Attic',
      period: '2022 - 2023',
      description: 'Assisted in building UI designs and writing automated script validations.',
      points: [
        'Coded responsive components from Figma designs, ensuring complete device rendering compatibility.',
        'Constructed unit and integration tests using Jest and Cypress to ensure code stability.',
        'Authored clean REST API routes and structured technical onboarding documentations.'
      ]
    }
  ] as TimelineItem[]
};
