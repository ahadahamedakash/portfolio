export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  grade?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skills {
  name: string;
  logo: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  completedAt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
}

// Personal Information
export const personalInfo = {
  name: "Ahad Ahamed Akash",
  title: "Frontend Developer | React & Next.js",
  subtitle:
    "Love to building clean, fast & thoughtful web apps with modern web technologies",
  bio: "I'm a frontend-focused developer with a knack for crafting responsive and smooth user experiences using React, Next.js, and Tailwind CSS. Over the past 1.5+ years, I’ve worked on a variety of projects — from full-stack MERN applications to modern dashboards with ShadCN and MUI — always putting performance, accessibility, and clean design at the heart of my work. I enjoy turning ideas into real, usable interfaces and constantly push myself to learn and grow with every project.",
  resumeUrl: "/Resume-of-Ahad-Ahamed-Akash.pdf",
};

// Education Data
export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2019 - 2023",
    grade: "3.8 GPA",
  },
  {
    id: "2",
    institution: "Tech Institute",
    degree: "Diploma",
    field: "Web Development",
    year: "2018 - 2019",
    grade: "Distinction",
  },
];

// Experience Data
export const experience: Experience[] = [
  {
    id: "1",
    company: "AB Software Solutions",
    position: "Frontend Web Developer",
    duration: "Nov 2023 - Feb 2025",
    location: "Lebanon",
    description: [
      "Developed and maintained robust user interfaces using React.js and Next.js.",
      "Implemented fully responsive and visually consistent designs across diverse devices using Tailwind CSS, Bootstrap, ShadCN and MUI, significantly improving user experience",
      "Built and integrated state management using Redux for complex application logic.",
      "Collaborated with Backend developers and designers to ensure user experience.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    id: "2",
    company: "Talentship Global Advisory Forum",
    position: "Web Developer",
    duration: "Sept 2023 - Oct 2023",
    location: "Noida, India",
    description: [
      "Collaborated with a non-profit startup dedicated to social impact and community empowerment.",
      "Utilized a stack of web development technologies including HTML, CSS, React, React Router DOM, JavaScript, Tailwind CSS, Daisy UI, and Firebase.",
      "Contributed to exciting projects aligned with my interests and the organization's mission.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Daisy Ui",
      "Firebase",
      "Git",
      "Github",
    ],
  },
];

// Skills Data
export const skills: Skills[] = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Material-UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Mongoose",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    slug: "tech-store",
    title: "TechStore - E-commerce",
    shortDescription:
      "A modern, responsive e-commerce web application built with React 19, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    fullDescription:
      "A modern, responsive e-commerce web application built with React 19, featuring a comprehensive public-facing site with authentication, product catalog, shopping cart, and more.",
    image: "/tech-store.png",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubUrl: "https://github.com/ahad1033/TechStore",
    liveUrl: "https://tech-store-mu-ashen.vercel.app/",
    featured: true,
    completedAt: "2025-01-15",
  },
  {
    slug: "stock-management-app",
    title: "Alishan - Stock Management App",
    shortDescription:
      "Alishan is a modern, role-based stock management web application built with React 19, Redux Toolkit, Tailwind CSS, and Vite.",
    fullDescription:
      "Alishan is a modern, role-based stock management web application built with React 19, Redux Toolkit, Tailwind CSS, and Vite. This project serves as the frontend of a MERN stack solution, designed to streamline inventory control, invoice processing, expense tracking, and financial analytics in a structured and scalable way.",
    image: "/alishan.png",
    images: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Redux Toolkit",
    ],
    githubUrl: "https://alishan-stock-management.vercel.app/",
    liveUrl: "https://github.com/ahad1033/alishan-stock-management-client",
    featured: true,
    completedAt: "2023-11-20",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription:
      "A responsive weather dashboard with location-based forecasts and interactive maps.",
    fullDescription:
      "An elegant weather dashboard that provides comprehensive weather information including current conditions, 7-day forecasts, weather maps, and severe weather alerts. The application uses geolocation for automatic weather updates, supports multiple locations, and includes features like weather history, comparison tools, and customizable widgets. Built with a focus on performance and user experience.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "Tailwind CSS",
      "Weather API",
    ],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: true,
    completedAt: "2023-09-10",
  },
  {
    slug: "blog-cms",
    title: "Blog CMS",
    shortDescription:
      "A content management system for bloggers with markdown support and SEO optimization.",
    fullDescription:
      "A powerful content management system designed specifically for bloggers and content creators. Features include a rich markdown editor, automatic SEO optimization, comment system, newsletter integration, and analytics dashboard. The CMS supports multiple authors, content scheduling, tag management, and includes a responsive design that works perfectly on all devices.",
    image:
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/username/blog-cms",
    liveUrl: "https://blog-cms-demo.vercel.app",
    featured: false,
    completedAt: "2023-07-25",
  },
  {
    slug: "medai-assistant",
    title: "Medai Assistant - Your AI Health Assistant",
    shortDescription:
      "Get instant access to AI-powered health insights, symptom analysis, and personalized medical guidance. Your intelligent companion for better health decisions.",
    fullDescription:
      "Get instant access to AI-powered health insights, symptom analysis, and personalized medical guidance. Your intelligent companion for better health decisions.",
    image: "/med-ai.png",
    images: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: ["Next", "ShadCN", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/ahad1033/medAI-assistant",
    liveUrl: "https://medai-assistant-two.vercel.app/",
    featured: true,
    completedAt: "2023-05-15",
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "ahad.dev2@mail.com",
  phone: "+88 01636428995",
  address: "Narayanganj, Bangladesh",
  socialLinks: {
    github: "https://github.com/ahad1033",
    linkedin: "https://linkedin.com/in/ahadahamed",
    twitter: "https://twitter.com/ah1033ad",
    portfolio: "https://ahadahamed.dev",
  },
};

// Get featured projects
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

// Get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects?.find((project) => project.slug === slug);
};
