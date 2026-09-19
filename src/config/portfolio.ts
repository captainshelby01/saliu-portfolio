export interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend';
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  visualType: 'tutors' | 'allura' | 'v3fixer' | 'nourishark';
  status?: string;
  features?: string[];
  architecture?: string;
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

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  projectRelation?: string;
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
    linkedin: 'https://www.linkedin.com/in/oluwafemi-saliu-18526a89/',
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
      liveUrl: 'https://www.thev3fixer.com',
      visualType: 'v3fixer',
      status: 'Live in Production',
      features: [
        'Custom pre-order gateway for the V3 Devotional Trilogy with dynamic order receipt generation',
        'Executive branding showcase with responsive media galleries and testimonials',
        'Rich JSON-LD Schema markup for maximum search engine indexability and author branding',
        'Sub-second page load times with optimized asset bundling via Vite'
      ],
      architecture: 'Single Page React application leveraging TypeScript for strict typing, component modularity, and client-side routing optimized for Vercel edge deployment.'
    },
    {
      id: 2,
      title: 'Dr. J Tutors',
      category: 'frontend',
      description: 'A personalized academic home & online tutoring platform for K-12 students. Features custom booking forms, exam preparation modules (GCSE/WAEC/SAT), testimonial sliders, and automated WhatsApp inquiry integration.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Schema.org'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://www.drjtutorsglobal.com',
      visualType: 'tutors',
      status: 'Live in Production',
      features: [
        'Interactive subject catalog & curriculum breakdown for K-12 and international exams',
        'Automated WhatsApp inquiry router that converts booking form inputs directly into structured messages',
        'Cross-device responsive design with accessible color contrast and educational theme',
        'Parent review testimonial slider and tutor qualification badges'
      ],
      architecture: 'Clean modern JavaScript & semantic HTML5 architecture with lightweight CSS modules and zero runtime overhead for fast mobile access.'
    },
    {
      id: 3,
      title: 'Allura Smiles Creative',
      category: 'frontend',
      description: 'A premium creative media & digital branding agency landing page. Features cinematic video integrations, modular portfolio galleries, client testimonials, and a custom lead generation flow to WhatsApp.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome', 'CSS Animations'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://www.allurasmiles.com',
      visualType: 'allura',
      status: 'Live in Production',
      features: [
        'Cinematic hero video background with lazy loading and low-bandwidth fallbacks',
        'Filterable portfolio showcase highlighting media production, photography, and brand identity projects',
        'High-converting lead funnel capturing client requirements before routing to direct consultation',
        'Smooth scroll transitions, dark glassmorphic styling, and micro-animations'
      ],
      architecture: 'Performance-tuned frontend architecture with custom CSS keyframes, responsive viewport units, and optimized imagery for creative agency presentation.'
    },
    {
      id: 4,
      title: 'Nourish Ark Foods',
      category: 'fullstack',
      description: 'An organic food production and staple preparation e-commerce platform offering stone-free peeled beans, naturally sweet honey beans, pure bean flour, and authentic Agoyin sauce with dynamic cart management, WhatsApp instant ordering, and wholesale bulk portals.',
      tech: ['PHP', 'Laravel', 'Alpine.js', 'TailwindCSS', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/captainshelby01',
      liveUrl: 'https://www.nourisharkfoods.com',
      visualType: 'nourishark',
      status: 'Live in Production',
      features: [
        'Dynamic slide-over cart drawer and sticky mobile quick-order bar with real-time price calculations',
        'Direct WhatsApp instant order routing and custom wholesale/bulk procurement portal',
        'Interactive product catalog with stone-free purity badges, weight variants, and recipe integration',
        'SEO-optimized product schemas, Alpine-powered modal quick-views, and lightning-fast server-rendered views'
      ],
      architecture: 'Robust Laravel backend architecture with MySQL relational schemas, session-managed cart states, responsive Alpine.js reactive components, and optimized asset delivery.'
    }
  ] as Project[],

  testimonials: [
    {
      id: 1,
      name: 'Winfrey Agbelese',
      role: 'Author & Executive Communication Architect',
      company: 'The V3 Fixer',
      feedback: 'Saliu took our digital branding and book platform to the next level. The V3 Fixer platform has lightning-fast load times, impeccable design fidelity, and streamlined our book pre-order system effortlessly.',
      rating: 5,
      projectRelation: 'The V3 Fixer'
    },
    {
      id: 2,
      name: 'Dr. Jerry O.',
      role: 'Lead Educator & Founder',
      company: 'Dr. J Tutors',
      feedback: 'The tutoring website Saliu built helped us double our student inquiries within weeks. The automated booking flow and responsive exam modules made parents feel immediately confident in our service.',
      rating: 5,
      projectRelation: 'Dr. J Tutors'
    },
    {
      id: 3,
      name: 'Samuel Adeniyi',
      role: 'Creative Director',
      company: 'Allura Smiles Creative',
      feedback: 'Working with Saliu was seamless. He translated our agency vision into a cinematic, ultra-smooth web experience that our high-profile clients constantly compliment. Truly reliable engineering.',
      rating: 5,
      projectRelation: 'Allura Smiles Creative'
    }
  ] as Testimonial[],

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
