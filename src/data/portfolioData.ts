export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  icon: string;
  githubRepo?: string;
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
  url?: string;
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
    linkedin:string
    instagram:string
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
  type: 'internship' | 'course'
  | 'certification';
}

export const personalInfo: PersonalInfo = {
  name: "SOURAV",
  title: "Full Stack SDET , MERN Stack Dev & AI Generalist",
  tagline: "Electronics Engineer | QA Specialist | MERN Developer | Cybersecurity Enthusiast | AI Generalist",
  bio: " Detail-oriented SDET with 2.5 years of experience in manual and automation testing, API validation, CI/CD integration, and building scalable test frameworks using Java, Selenium, TestNG, and RestAssured. Proven track record of improving release quality and engineering velocity through intelligent automation and strong collaboration with product and development teams at Fynd (Jio Commerce). Experienced across functional, regression, and system testing with hands-on expertise in designing test strategies, analyzing requirements, and driving sprint-level QA ownership. Brings emerging capabilities in AI-driven testing, including self-healing automation, LLM-assisted test generation, and RAG-based validation workflows. Strong technical foundation, a product-centric mindset, and the ability to deliver reliable, high-quality releases in fast-paced Agile environments. ",
  location: "Bangalore, India",
  email: "souravshetty11@gmail.com",
  phone: "+91 6360642212",
  portfolio: "sourav.io",
  profileImage: "/profile-photo1.jpeg",
  social: {
    github: "https://github.com/psyborgxoxo",
    linkedin:"",
    instagram:"",
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
    cgpa: "7",
    languages: "VTU",
    year: "2022"
  }
];


export const projects: Project[] = [
  // New UI Automation Projects
  {
    id: 1,
    title: "Flipkart Search Test Automation",
    description:
      "Automated UI testing for Flipkart's search functionality using Selenium. Ensured robust test coverage for various search scenarios and edge cases.",
    tech: ["Selenium", "Java", "TestNG", "Jenkins"],
    category: "QA & Development",
    status: "completed",
    year: "2023",
    icon: "Search",
    githubRepo: "https://github.com/psyborgxoxo/souravshetty10-ME_QA_XFLIPKART_SEARCH",
  },
  {
    id: 2,
    title: "YouTube Search Automation",
    description:
      "Developed automation scripts for YouTube search functionality using Selenium and Java. Focused on scalability and maintainability of test cases.",
    tech: ["Selenium", "Java", "JUnit", "Maven"],
    category: "QA & Development",
    status: "completed",
    year: "2023",
    icon: "Video",
    githubRepo: "https://github.com/psyborgxoxo/ME_QA_XYOUTUBE_SEARCH",
  },
  {
    id: 3,
    title: "Web Scraping Automation",
    description:
      "Automated data scraping from websites using Selenium and Python. Designed modular scripts for extracting structured data efficiently.",
    tech: ["Selenium", "Python", "BeautifulSoup", "Pandas"],
    category: "QA & Development",
    status: "completed",
    year: "2023",
    icon: "Data",
    githubRepo: "https://github.com/psyborgxoxo/-ME_QA_XSCRAPE_DATA",
  },
  {
    id: 4,
    title: "Google Forms Automation",
    description:
      "Automated UI testing for Google Forms using Selenium. Validated form submission workflows and ensured cross-browser compatibility.",
    tech: ["Selenium", "Java", "TestNG", "Cross-Browser Testing"],
    category: "QA & Development",
    status: "completed",
    year: "2023",
    icon: "Form",
    githubRepo: "https://github.com/psyborgxoxo/ME_QA_XGOOGLE_FORM",
  },

   {
    id: 4,
    title: "Leet Code Automation",
    description:
      "About End-to-end LeetCode UI automation suite using Selenium, TestNG, and POM architecture. Covers login, problem navigation, filtering, code editor interactions, and submission workflows.",
    tech: ["Selenium", "Java", "TestNG", "Cross-Browser Testing"],
    category: "QA & Development",
    status: "completed",
    year: "2024",
    icon: "Form",
    githubRepo: "https://github.com/psyborgxoxo/ME_QA_XLEETCODE_AUTOMATION",
  },

     {
    id: 5,
    title: "Stack Overflow Automation",
    description:
      "UI automation framework for Stack Overflow using Selenium, TestNG, and Page Object Model (POM), focusing on end-to-end workflow validation such as search, navigation, authentication, and question interactions.",
    tech: ["Selenium", "Java", "TestNG", "Cross-Browser Testing"],
    category: "QA & Development",
    status: "completed",
    year: "2024",
    icon: "Form",
    githubRepo: "https://github.com/psyborgxoxo/ME_QA_XSTACKOVERFLOW_AUTOMATION",
  },

     {
    id: 6,
    title: "Q-Trip Automation",
    description:
      "UI automation framework for QTrip using Selenium, TestNG, and the Page Object Model (POM), covering end-to-end test workflows including search, filters, booking, reservations, and user authentication.",
    tech: ["Selenium", "Java", "TestNG", "Cross-Browser Testing"],
    category: "QA & Development",
    status: "completed",
    year: "2025",
    icon: "Form",
    githubRepo: "https://github.com/psyborgxoxo/ME_QA_XQTRIP_AUTOMATION",
  },

  

  // New API Automation Project
  {
    id: 7,
    title: "PetStore API Automation",
    description:
      "Automated API testing for PetStore using RestAssured and Java. Validated endpoints for CRUD operations and error handling scenarios.",
    tech: ["RestAssured", "Java", "TestNG", "Postman"],
    category: "QA & Development",
    status: "completed",
    year: "2023",
    icon: "API",
    githubRepo: "https://github.com/psyborgxoxo/QPetStore-API-Automation",
  },

  // New Full Stack Development Projects
  // {
  //   id: 8,
  //   title: "Personal Portfolio Website",
  //   description:
  //     "Developed a personal portfolio website using React and Vite. Integrated modern design principles and responsive layouts for optimal user experience.",
  //   tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
  //   category: "Full Stack Development",
  //   status: "completed",
  //   year: "2023",
  //   icon: "Portfolio",
  //   githubRepo: "https://github.com/psyborgxoxo/SouravPortfolio",
  // },
  {
    id: 9,
    title: "Design Hut - Creative Design Platform",
    description:
      "Built a creative design platform using React and Vite. Enabled users to explore and share design templates with interactive features.",
    tech: ["React", "Vite", "Styled Components", "ESLint"],
    category: "AI & Full Stack",
    status: "completed",
    year: "2023",
    icon: "Design",
    githubRepo: "https://github.com/psyborgxoxo/design-hut",
  },
  // Existing Projects
  // {
  //   id: 10,
  //   title: "React Web Apps - Social Media MERN Clones",
  //   description:
  //     "Built multiple social media applications including Amazon, Tinder, TikTok, Instagram, and WhatsApp clones using MERN stack. Implemented real-time features, authentication systems, and responsive design.",
  //   tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
  //   category: "Full Stack Development",
  //   status: "completed",
  //   year: "2022",
  //   icon: "SocialNetwork",
  //   githubRepo: "https://github.com/psyborgxoxo/social-media-clones",
  // },
  // {
  //   id: 11,
  //   title: "E-Commerce Construction Based Website",
  //   description:
  //     "Quality Assured Website with comprehensive QA procedures and 50+ work instructions. Monitored field-level performance and reported current status with improvements through research and root cause analysis.",
  //   tech: ["React.js", "JavaScript", "QA Tools", "Performance Monitoring"],
  //   category: "QA & Development",
  //   status: "completed",
  //   year: "2022",
  //   icon: "Construction",
  //   githubRepo: "https://github.com/psyborgxoxo/e-commerce-construction",
  // },
  // {
  //   id: 12,
  //   title: "React Native Apps - Employee Authentication App",
  //   description:
  //     "Complete employee authentication system powered by Firebase backend, ready for implementation. Features include secure login, role-based access, and real-time data synchronization.",
  //   tech: ["React Native", "Firebase", "Authentication Services", "Redux"],
  //   category: "Mobile Development",
  //   status: "completed",
  //   year: "2022",
  //   icon: "MobileApp",
  //   githubRepo: "https://github.com/psyborgxoxo/employee-auth-app",
  // },
  {
    id: 13,
    title: "Job Portal App - AI-Powered MERN Application",
    description:
      "Full stack MERN-based recruiting application with both Employer and Job Seeker suite featuring AI-based search, Video CV with video interview capability, and intelligent job matching algorithms.",
    tech: [
      "MERN Stack",
      "AI Integration",
      "Video Technology",
      "Advanced Search",
      "Machine Learning",
    ],
    category: "AI & Full Stack",
    status: "completed",
    year: "2022",
    icon: "JobPortal",
    githubRepo: "https://github.com/psyborgxoxo/job-portal-ai",
  },
];

export const skills: Skill[] = [

  // Quality Assurance & Testing (Updated 2025)
  { name: "API Testing (Rest Assured/Postman)", proficiency: 90, category: "Quality Assurance & Testing" },
  { name: "UI Testing (Selenium)", proficiency: 88, category: "Quality Assurance & Testing" },
  { name: "Functional Testing", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Mobile App Testing (Appium)", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Performance Testing (JMeter)", proficiency: 80, category: "Quality Assurance & Testing" },
  { name: "Security Testing Basics", proficiency: 75, category: "Quality Assurance & Testing" },
  { name: "API Contract Testing (Postman / Newman)", proficiency: 82, category: "Quality Assurance & Testing" },
  { name: "AI-powered Testing (GPT Automation / Test Generation)", proficiency: 85, category: "Quality Assurance & Testing" },
  { name: "Test Strategy & Test Planning", proficiency: 90, category: "Quality Assurance & Testing" },
  { name: "Exploratory Testing", proficiency: 88, category: "Quality Assurance & Testing" },

  // Programming Languages
  { name: "Core Java", proficiency: 80, category: "Programming Languages" },
  { name: "TypeScript", proficiency: 78, category: "Programming Languages" },
  { name: "React.js", proficiency: 80, category: "Programming Languages" },
  { name: "Node.js", proficiency: 80, category: "Programming Languages" },
  { name: "REST APIs", proficiency: 80, category: "Programming Languages" },

  // CI/CD & Version Control
  { name: "Jenkins", proficiency: 75, category: "CI/CD & Version Control" },
  { name: "Git", proficiency: 80, category: "CI/CD & Version Control" },
  { name: "GitHub", proficiency: 80, category: "CI/CD & Version Control" },

  // AI (AI-Focused)
  { name: "Machine Learning Basics", proficiency: 70, category: "AI" },
  { name: "Deep Learning Fundamentals", proficiency: 65, category: "AI" },
  { name: "Generative AI (LLMs)", proficiency: 75, category: "AI" },
  { name: "Prompt Engineering", proficiency: 80, category: "AI" },
  { name: "RAG (Retrieval-Augmented Generation)", proficiency: 70, category: "AI" },
  { name: "MCP (Model Context Protocol)", proficiency: 70, category: "AI" },
  { name: "AI Automation & Agents", proficiency: 75, category: "AI" },


  // Security & Development
  { name: "Application Security", proficiency: 80, category: "Security & Development" },
  { name: "Vulnerability Assessment", proficiency: 80, category: "Security & Development" },
];



export const experience: Experience[] = [

  {
    id: 1,
    period: "January 2024 – Present",
    title: "CTO",
    company: "Design Hut Interior Studio",
    location: "Remote / India",
    type: "work",
    url: "https://design-hut.vercel.app/",
    description: [
      "Designed and developed the official website for Design Hut Interior Studio using modern UI/UX principles",
      "Implemented responsive layouts optimized for desktop and mobile devices",
      "Built clean, minimal, and user-friendly interface using React and Tailwind CSS",
      "Created and structured content sections highlighting services, portfolio, and contact information",
      "Integrated animations and modern visual aesthetics suitable for an interior design brand"
    ]
  },

  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    name: "Oracle Java SE 11 Developer Certification (OCP)",
    issuer: "Oracle",
    year: "2024",
    type: "certification"
  },
  {
    id: 3,
    name: "ISTQB Foundation Level – Software Testing",
    issuer: "ISTQB",
    year: "2024",
    type: "certification"
  },
  {
    id: 5,
    name: "DeepLearning.AI – Introduction to LLMs and RAG",
    issuer: "DeepLearning.AI",
    year: "2024",
    type: "certification"
  },
  {
    id: 6,
    name: "FreeCodeCamp – JavaScript Algorithms and Data Structures",
    issuer: "Free Code Camp",
    year: "2022",
    type: "course"
  }
];


export const interests = [
  "AI Engineering & Automation",
  "Software Quality Engineering and Test Automation",
  "Full-Stack Web Development (MERN Stack)",
  "Agile Processes and Sprint Leadership",
  "Product Thinking & Technical Project Management",
  "Business Strategy and Tech Leadership",
  "Emerging Technologies like RAG, MCP, and Generative AI"
];


export const navigationItems = [
  { name: "Home", href: "#home", icon: "Home" },
  { name: "About", href: "#about", icon: "User" },
  { name: "Skills", href: "#skills", icon: "Brain" },
  { name: "Projects", href: "#projects", icon: "Code" },
  { name: "Experience", href: "#experience", icon: "Briefcase" },
  { name: "Contact", href: "#contact", icon: "Mail" }
];
