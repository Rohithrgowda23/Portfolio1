// All résumé-derived content lives here. Paste from resume.pdf. Empty sections are hidden automatically.
export type Link = { label: string; href: string };
export type Skill = { name: string; category: string; logo?: string }; // logo: "/logos/java.svg"
export type Project = { name: string; description: string; tech: string[]; features: string[]; github?: string };
export type TimelineItem = { date?: string; title: string; org: string; points?: string[] };
export type Education = { degree: string; institution: string; university?: string; year?: string; cgpa?: string };
export type Cert = { name: string; issuer: string };
export type Achievement = { title: string; detail: string };

export const PROFILE = {
  name: "Rohith R Gowda",
  firstName: "Rohith",
  lastName: "R Gowda",
  role: "Java Full Stack Developer",
  location: "Bengaluru, India",
  summary:
    "Java Full Stack Developer experienced in building scalable applications using Java, Spring Boot, Microservices, React.js, MySQL, REST APIs, and Docker. Skilled in Spring Security, JWT, OAuth 2.0, Apache Kafka, Redis, DSA, and database optimization. Hands-on with Generative AI, including LLMs, RAG, prompt engineering, and vector databases, with a strong focus on building clean, secure, high-performance, production-ready systems and maintainable enterprise solutions.",
};
export const CONTACT = {
  email: "rohithrgowda23@gmail.com",
  phone: "8971487731",
  github: "https://github.com/Rohithrgowda23",
  linkedin: "https://linkedin.com/in/rohithrgowda",
};
const group = (category: string, names: string[]): Skill[] => names.map((name) => ({ name, category }));
export const SKILLS: Skill[] = [
  ...group("Backend", ["Java", "Spring Boot", "REST APIs", "JDBC", "JPA/Hibernate", "Spring Security (JWT, OAuth 2.0)", "Microservices", "Servlets", "Apache Kafka"]),
  ...group("Frontend", ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design", "Tailwind CSS"]),
  ...group("Database", ["MySQL", "SQL Server", "Redis", "Database Design", "Query Optimization", "CRUD Operations"]),
  ...group("AI & Generative AI", ["LLMs", "Prompt Engineering", "RAG", "Semantic Search", "Vector Databases", "Spring AI", "AI Chatbots"]),
  ...group("Tools & DevOps", ["Git", "GitHub", "Postman", "Maven", "Docker", "VS Code", "IntelliJ IDEA", "CI/CD"]),
  ...group("Core Concepts", ["Data Structures & Algorithms", "SDLC", "API Design", "Debugging", "JUnit", "Mockito"]),
];
export const PROJECTS: Project[] = [
  {
    name: "AI Resume Analyser",
    description: "Architected a scalable AI-powered resume analysis platform using microservices, separating authentication, resume processing, AI analysis, reporting, and notification into independent, independently deployable services.",
    tech: ["Java", "Spring Boot AI", "Spring Security (JWT, OAuth 2.0)", "React.js", "MySQL", "Docker", "LLM", "Prompt Engineering"],
    features: [
      "Implemented secure authentication with Spring Security, JWT, Google OAuth 2.0, email OTP verification, and password reset flows.",
      "Built resume parsing and AI-driven analysis features that generate ATS compatibility scores, extract skills, and identify skill gaps.",
      "Containerized the full application stack with Docker to streamline deployment, scalability, and environment consistency.",
    ],
    github: "https://github.com/Rohithrgowda23/Ai-resume-analyser",
  },
  {
    name: "E-Commerce Application",
    description: "Designed an e-commerce platform using microservices architecture, decoupling product, user, cart, order, inventory, and authentication services while developing Java and Spring Boot microservices with REST APIs for e-commerce operations efficiently.",
    tech: ["Java", "Spring Boot", "Microservices", "Apache Kafka", "Redis", "Spring Security (JWT, OAuth 2.0)", "MySQL", "Docker"],
    features: [
      "Integrated Apache Kafka for event-driven communication between microservices for reliable order processing.",
      "Implemented Redis caching to reduce redundant database queries and improve application response time.",
      "Designed and managed MySQL databases with JPA/Hibernate for persistent storage and efficient CRUD operations.",
    ],
    github: "https://github.com/Rohithrgowda23/E-commerceshopsphere",
  },
];
export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Advanced Java Full Stack Trainee",
    org: "Besant Technologies (E&ICT Academy)",
    points: [
      "Completed intensive, hands-on training in Advanced Java, JDBC, Servlets, Spring Boot, React.js, HTML, CSS, JavaScript, and MySQL.",
      "Built multiple scalable full-stack applications integrating frontend and backend systems through RESTful API communication, relational databases, authentication, validation, and business logic implementation.",
      "Practiced end-to-end API development, JWT authentication, relational database management, exception handling, input validation, and CI/CD-driven deployment workflows with testing practices.",
      "Implemented CRUD operations, robust exception handling, and input validation logic across real-world application scenarios.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    org: "JupiterKings Technologies",
    points: [
      "Developed and maintained scalable web application modules using Java, Spring Boot, React.js, and MySQL, contributing to production-grade features used by end users.",
      "Designed and implemented RESTful APIs enabling reliable, low-latency communication between frontend and backend microservices.",
      "Built responsive, reusable React.js UI components and integrated them with backend microservices to improve development efficiency.",
      "Participated in relational database design, SQL query optimization, and backend business logic implementation to improve application performance and data integrity.",
    ],
  },
];
export const EDUCATION: Education[] = [
  { degree: "Bachelor of Engineering (B.E.), Computer Science", institution: "Visvesvaraya Technological University (VTU)", year: "2025", cgpa: "7.1" },
];
export const CERTIFICATIONS: Cert[] = [
  { name: "Advanced Java Full Stack Development", issuer: "Besant Technologies (E&ICT Academy)" },
  { name: "Full Stack Development", issuer: "JupiterKings Technologies" },
];
export const ACHIEVEMENTS: Achievement[] = [];
export const RESUME_URL = "/resume.pdf";
export const NAV = [
  { id: "about", label: "About", show: !!PROFILE.summary },
  { id: "skills", label: "Skills", show: SKILLS.length > 0 },
  { id: "work", label: "Work", show: PROJECTS.length > 0 },
  { id: "experience", label: "Experience", show: EXPERIENCE.length + EDUCATION.length > 0 },
  { id: "achievements", label: "Achievements", show: ACHIEVEMENTS.length + CERTIFICATIONS.length > 0 },
  { id: "contact", label: "Contact", show: true },
].filter((n) => n.show);
