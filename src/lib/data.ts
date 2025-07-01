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

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  icon: string;
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
  title: "Full Stack Developer",
  subtitle: "Crafting digital experiences with modern web technologies",
  bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications. I love creating clean, efficient code and turning complex problems into simple, beautiful solutions.",
  resumeUrl: "/resume.pdf",
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
    company: "TechCorp Solutions",
    position: "Full Stack Developer",
    duration: "2023 - Present",
    location: "New York, NY",
    description: [
      "Developed and maintained 15+ web applications using React, Next.js, and Node.js",
      "Implemented responsive designs that improved user engagement by 40%",
      "Collaborated with cross-functional teams to deliver projects on time and within budget",
      "Optimized application performance resulting in 50% faster load times",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "AWS",
    ],
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2022 - 2023",
    location: "San Francisco, CA",
    description: [
      "Built responsive web applications using React and modern CSS frameworks",
      "Integrated RESTful APIs and managed state using Redux Toolkit",
      "Participated in code reviews and contributed to improving development workflows",
      "Mentored junior developers and conducted technical interviews",
    ],
    technologies: ["React", "Redux", "Tailwind CSS", "JavaScript", "Git"],
  },
];

// Skills Data
export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 90, category: "frontend", icon: "🔺" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "📘" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "🎨" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
  { name: "Bootstrap 5", level: 85, category: "frontend", icon: "🅱️" },
  { name: "ShadCN", level: 80, category: "frontend", icon: "🎭" },
  { name: "DaisyUI", level: 75, category: "frontend", icon: "🌼" },
  { name: "MUI", level: 80, category: "frontend", icon: "📦" },
  { name: "React Router", level: 90, category: "frontend", icon: "🛣️" },
  { name: "Redux Toolkit", level: 85, category: "frontend", icon: "🔄" },
  { name: "React Bootstrap", level: 80, category: "frontend", icon: "🅱️" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Express.js", level: 80, category: "backend", icon: "🚀" },

  // Database
  { name: "MongoDB", level: 80, category: "database", icon: "🍃" },
  { name: "Mongoose", level: 75, category: "database", icon: "🐾" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📚" },
  { name: "GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Vitest", level: 70, category: "tools", icon: "🧪" },
];

// Projects Data
export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "A full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
    fullDescription:
      "A comprehensive e-commerce solution built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory and user management. The platform supports multiple payment methods and includes features like wishlist, product reviews, and real-time notifications.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    completedAt: "2024-01-15",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    shortDescription:
      "A collaborative task management application with real-time updates and team collaboration features.",
    fullDescription:
      "A modern task management application designed for teams and individuals. Built with React and Node.js, it features real-time collaboration, drag-and-drop task organization, project templates, time tracking, and detailed analytics. The app includes features like task dependencies, file attachments, comments, and notifications to keep teams synchronized and productive.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    githubUrl: "https://github.com/username/task-management",
    liveUrl: "https://taskmanager-demo.vercel.app",
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
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    shortDescription:
      "A tool to generate beautiful portfolio websites from JSON configuration files.",
    fullDescription:
      "An innovative portfolio generation tool that allows users to create stunning portfolio websites by simply providing a JSON configuration file. The tool offers multiple themes, customization options, and automatically generates responsive layouts. It includes features like contact forms, project galleries, and blog integration, making it perfect for developers, designers, and creative professionals.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "JSON Schema", "Vercel"],
    githubUrl: "https://github.com/username/portfolio-generator",
    liveUrl: "https://portfolio-gen-demo.vercel.app",
    featured: false,
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
export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

// Get skills by category
export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((skill) => skill.category === category);
