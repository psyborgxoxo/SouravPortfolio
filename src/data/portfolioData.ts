export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

export interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  type: 'work' | 'internship' | 'education';
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  portfolio: string;
  profileImage: string;
  social: {
    github: string;
    portfolio: string;
    email: string;
    phone: string;
  };
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
  languages: string;
  year: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  type: 'internship' | 'course';
}

export const personalInfo: PersonalInfo = {
  name: "SOURAV",
  title: "MERN Stack Dev, Full Stack QAE & AI Generalist",
  tagline: "Electronics Engineer | QA Specialist | MERN Developer | Cybersecurity Enthusiast",
  bio: "I am a results-driven Software Development Engineer in Test (SDET) with 2.5 years of hands-on experience in functional and automation testing, API validation, CI/CD integration, and building robust test automation frameworks. Having worked with cross-functional teams at Fynd (Jio Commerce platform) and RCS Pvt. Ltd., I’ve contributed to enhancing product reliability, performance, and release efficiency through scalable QA solutions. With a deep interest in Artificial Intelligence, particularly AI-driven testing and automation intelligence, I strive to design smarter, self-healing, and adaptive test systems that bridge the gap between QA engineering and cutting-edge innovation.",
  location: "Bangalore, India",
  email: "souravshetty11@gmail.com",
  phone: "+91 6360642212",
  portfolio: "sourav.io",
  profileImage: "/profile-photo1.jpeg", // Professional portrait photo
  social: {
    github: "https://github.com/psyborgxoxo",
    portfolio: "sourav.io",
    email: "souravshetty11@gmail.com",
    phone: "+91 6360642212"
  }
};

export const education: Education[] = [
  {
    id: 1,
    degree: "BE in Electronics & Communication",
    institution: "Adhichunchangiri Institute Of Technology",
    location: "Chikmagaluru, India",
    cgpa: "6.5",
    languages: "English",
    year: "2022"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "React Web Apps - Social Media MERN Clones",
    description: "Built multiple social media applications including Amazon, Tinder, TikTok, Instagram, and WhatsApp clones using MERN stack. Implemented real-time features, authentication systems, and responsive design.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    category: "Full Stack Development",
    status: "completed",
    year: "2022",
    icon: "SocialNetwork"
  },
  {
    id: 2,
    title: "E-Commerce Construction Based Website",
    description: "Quality Assured Website with comprehensive QA procedures and 50+ work instructions. Monitored field-level performance and reported current status with improvements through research and root cause analysis.",
    tech: ["React.js", "JavaScript", "QA Tools", "Performance Monitoring"],
    category: "QA & Development",
    status: "completed",
    year: "2022",
    icon: "Construction"
  },
  {
    id: 3,
    title: "React Native Apps - Employee Authentication App",
    description: "Complete employee authentication system powered by Firebase backend, ready for implementation. Features include secure login, role-based access, and real-time data synchronization.",
    tech: ["React Native", "Firebase", "Authentication Services", "Redux"],
    category: "Mobile Development",
    status: "completed",
    year: "2022",
    icon: "MobileApp"
  },
  {
    id: 4,
    title: "Job Portal App - AI-Powered MERN Application",
    description: "Full stack MERN-based recruiting application with both Employer and Job Seeker suite featuring AI-based search, Video CV with video interview capability, and intelligent job matching algorithms.",
    tech: ["MERN Stack", "AI Integration", "Video Technology", "Advanced Search", "Machine Learning"],
    category: "AI & Full Stack",
    status: "completed",
    year: "2022",
    icon: "JobPortal"
  }
];

export const skills: Skill[] = [
  // Full Stack Development
  { name: "MERN Stack", proficiency: 90, category: "Full Stack Development" },

  // Quality Assurance & Testing
  { name: "Manual Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Automation Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Sanity Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Functional Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "UAT", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "System Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Regression Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Installation Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Smoke Testing", proficiency: 85, category: "Quality Assurance & Testing" },

  // Programming Languages
  { name: "JavaScript", proficiency: 80, category: "Programming Languages" },
  { name: "React.js", proficiency: 80, category: "Programming Languages" },
  { name: "Core Java", proficiency: 80, category: "Programming Languages" },
  { name: "HTML/CSS", proficiency: 80, category: "Programming Languages" },

  // API & Testing Tools
  { name: "Postman", proficiency: 85, category: "API & Testing Tools" },
  { name: "API Testing", proficiency: 85, category: "API & Testing Tools" },
  { name: "Object-Oriented Programming", proficiency: 85, category: "API & Testing Tools" },

  // Emerging Technologies
  { name: "IoT Development", proficiency: 75, category: "Emerging Technologies" },
  { name: "Sensor Integration", proficiency: 75, category: "Emerging Technologies" },
  { name: "Visual Data Analysis", proficiency: 75, category: "Emerging Technologies" },
  { name: "Web3", proficiency: 75, category: "Emerging Technologies" },
  { name: "NFT", proficiency: 75, category: "Emerging Technologies" },
  { name: "Bug Bounty", proficiency: 75, category: "Emerging Technologies" },

  // Security & Development
  { name: "Application Security", proficiency: 80, category: "Security & Development" },
  { name: "Vulnerability Assessment", proficiency: 80, category: "Security & Development" },
  { name: "CTF", proficiency: 80, category: "Security & Development" },
  { name: "Cybersecurity", proficiency: 80, category: "Security & Development" }
];

export const experience: Experience[] = [
  {
    id: 1,
    period: "September 2022 – Present",
    title: "Full-Stack QAE [Trainee]",
    company: "FYND",
    location: "Bangalore, India",
    type: "work",
    description: [
      "Skills in implementing latest testing techniques and tools in software development life cycle",
      "In-depth understanding and exposure to best practices in testing",
      "Strong experience in Sanity Testing, Functional Testing, UAT, System Testing, Regression Testing, Installation Testing, Smoke Testing on desktop and web applications",
      "Proficient in Java and object-oriented programming concepts",
      "Application Programming Interface Testing using Postman"
    ]
  },
  {
    id: 2,
    period: "July 2021 – September 2021",
    title: "Application Level Security Intern",
    company: "Gurugram Police CSSI 2021",
    location: "Gurugram Cybercell",
    type: "internship",
    description: [
      "60-day cyber security summer internship sponsored by Safe-House",
      "Infrastructure and security flaws analysis inside web and mobile applications",
      "Cyber security training and vulnerability assessment"
    ]
  },
  {
    id: 3,
    period: "November 2021 – June 2022",
    title: "Full-Stack Developer [Trainee]",
    company: "RSC Systems Private Limited",
    location: "Bangalore, India",
    type: "work",
    description: [
      "Built multiple applications including MERN stack clone",
      "Electronic Health Record app from SNOMED CT (open source EHR system)",
      "IoT developer with automation for various industries using sensor integration and visual data analysis"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Gurugram Police Cyber Security Summer Internship 2021",
    issuer: "Gurugram Police",
    year: "2021",
    type: "internship"
  },
  {
    id: 2,
    name: "Scrimba Introduction to ES6+ and JavaScript",
    issuer: "Scrimba",
    year: "2022",
    type: "course"
  },
  {
    id: 3,
    name: "Free Code Camp - Responsive Web Design",
    issuer: "Free Code Camp",
    year: "2022",
    type: "course"
  },
  {
    id: 4,
    name: "Free Code Camp - JavaScript Algorithms and Data Structures",
    issuer: "Free Code Camp",
    year: "2022",
    type: "course"
  }
];

export const interests = [
  "Capture The Flag (CTF) Competitions",
  "Vulnerability Disclosure Programs",
  "E-commerce Technologies",
  "NFT and WEB3 Development",
  "Bug Bounty Hunting",
  "Application Security Research"
];

export const navigationItems = [
  { name: "Home", href: "#home", icon: "Home" },
  { name: "About", href: "#about", icon: "User" },
  { name: "Skills", href: "#skills", icon: "Brain" },
  { name: "Projects", href: "#projects", icon: "Code" },
  { name: "Experience", href: "#experience", icon: "Briefcase" },
  { name: "Contact", href: "#contact", icon: "Mail" }
];
