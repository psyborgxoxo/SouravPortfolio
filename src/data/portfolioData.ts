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
  title: "AI Automation Engineer",
  tagline: "Electronics Engineer | QA Specialist | MERN Developer | Cybersecurity Enthusiast | Gen AI Engineer",
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
  {
    id: 14,
    title: "RAG Pipeline with GraphRAG Integration",
    description:
      "Production-grade RAG pipeline built on Azure AI Search and Groq LLaMA, extended with a GraphRAG layer for entity extraction and ontology-based retrieval. Deployed as a Dockerized FastAPI service.",
    tech: ["Azure AI Search", "Groq LLaMA", "FastAPI", "Docker", "GraphRAG"],
    category: "AI & Full Stack",
    status: "completed",
    year: "2026",
    icon: "Brain",
    githubRepo: "https://github.com/psyborgxoxo/RAG-Pipeline-Azure-AI-Search-Groq",
  },
  {
    id: 15,
    title: "Prompt Engineering & LLM Fine-Tuning Pipeline",
    description:
      "LLM fine-tuning pipeline using LoRA on Colab, paired with a custom LLM-as-judge evaluator built to replace RAGAS. Includes API key auth with rate limiting.",
    tech: ["LoRA", "Python", "LLM-as-judge", "FastAPI"],
    category: "AI & Full Stack",
    status: "completed",
    year: "2026",
    icon: "Sparkles",
    githubRepo: "https://github.com/psyborgxoxo/Prompt-Engineering-LLM-Fine-Tuning-Pipeline",
  },
  {
    id: 16,
    title: "MERN Todo App — Jest & Cypress Suite",
    description:
      "Take-home QA assignment for a MERN Todo application, covering unit and end-to-end test coverage with Jest and Cypress under a 48-hour turnaround.",
    tech: ["Jest", "Cypress", "MERN Stack"],
    category: "QA & Development",
    status: "completed",
    year: "2026",
    icon: "CheckCircle",
    githubRepo: "https://github.com/psyborgxoxo/mern-todo-jest-cypress",
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

export const certifications = [
   {
    id: 'gpcssi2021',
    name: "Gurugram Police Cyber Security Summer Internship 2021",
    issuer: "Gurugram Police",
    year: "2021",
    type: "internship"
  },
  {
    id: 'anthropic-fluency',
    name: 'AI Fluency Certification',
    issuer: 'Anthropic Academy',
    year: '2024',
    description: 'Validates multi-model mechanics and prompting baseline.',
  },
  {
    id: 'google-genai-leader',
    name: 'Generative AI Leader Certification',
    issuer: 'Google Cloud',
    year: '2024',
    description: 'Proves strategic and architectural understanding of enterprise generative AI.',
  },
  {
    id: 'google-vertex-studio',
    name: 'Introduction to Vertex AI Studio',
    issuer: 'Google Cloud',
    year: '2024',
    description: 'Tactical deployment verifying hands-on prompt design and model tuning capabilities.',
  },
  {
    id: 'google-mlops',
    name: 'Machine Learning Operations (MLOps): Getting Started',
    issuer: 'Google Cloud',
    year: '2024',
    description: 'Rapid-deployment module bridging CI/CD Jenkins expertise with live AI model deployment.',
  },
  {
    id: 'google-vector-search',
    name: 'Vector Search and Embeddings',
    issuer: 'Google Cloud',
    year: '2024',
    description: 'Targeted micro-lab designed to bulletproof resume claims regarding hybrid RAG architectures.',
  },
  {
    id: 'google-professional-ml',
    name: 'Professional Machine Learning Engineer Certification',
    issuer: 'Google Cloud',
    year: '2024',
    description: 'Long-term objective to execute once job pipeline is fully stabilized.',
  },
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