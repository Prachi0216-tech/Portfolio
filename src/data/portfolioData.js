export const personalInfo = {
  name: "Prachi Singh",
  title: "Full Stack & AI Developer",
  tagline: "Building Scalable Web Applications, Real-Time Systems & Intelligent AI Solutions",
  location: "Ghaziabad, Uttar Pradesh, India",
  phone: "+91-7011853141",
  email: "singhprachi3141@gmail.com",
  linkedin: "https://linkedin.com/in/prachi-singh",
  github: "https://github.com/Prachi0216-tech",
  profileDriveUrl: "https://drive.google.com/file/d/13Ln5CFC3SMq_LyV3Bo5_aSks_AznWtG2/view?usp=sharing",
  profileImage: "/profile.jpg",
  careerObjective: "Aspiring Full Stack & AI Developer (B.Tech CSE, AKTU 2027) with hands-on experience in building full-stack web applications, RESTful APIs, and real-time systems. Seeking a Full Stack Developer role to leverage scalable technologies and software engineering best practices.",
  about: "I am a passionate software engineer and computer science undergraduate at ABES Institute of Technology with expertise in both modern frontend ecosystems and high-performance backend AI systems. With direct industry experience as a Full Stack Intern at ConsultIT Pvt Ltd, I specialize in architecting reactive user interfaces with React and Tailwind CSS, designing resilient RESTful APIs with FastAPI and Node.js, and deploying intelligent computer vision and machine learning models in production.",
  stats: [
    { label: "Core Projects", value: "3+", detail: "Full Stack & AI Architectures" },
    { label: "Industry Experience", value: "Intern", detail: "ConsultIT Pvt Ltd" },
    { label: "B.Tech CSE", value: "2027", detail: "ABESIT, AKTU" },
    { label: "Certifications", value: "3", detail: "Infosys, Microsoft & Deloitte" }
  ]
};

export const education = [
  {
    institution: "ABES Institute of Technology, AKTU",
    location: "Ghaziabad, Uttar Pradesh",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2023 – Expected 2027",
    status: "Currently Pursuing (3rd Year)",
    highlights: [
      "Specializing in Software Engineering, Full Stack Web Development, and Artificial Intelligence.",
      "Active participant in technical hackathons, algorithmic problem solving, and innovation challenges."
    ]
  },
  {
    institution: "CBSE Board",
    location: "Ghaziabad, Uttar Pradesh",
    degree: "Senior Secondary (Class XII) – Science & Mathematics",
    duration: "Completed 2023",
    status: "Score: 74.5%",
    highlights: [
      "Rigorous foundation in Computer Science, Mathematics, Physics, and Chemistry.",
      "Developed early passion for programming logic, problem-solving, and web technologies."
    ]
  }
];

export const experience = [
  {
    role: "Full Stack Intern",
    company: "ConsultIT Pvt Ltd",
    period: "Aug 5, 2026 – Present",
    type: "Internship",
    location: "Hybrid / Noida & Ghaziabad",
    description: "Contributing to enterprise software modernization, building reactive frontend modules, scalable REST APIs, and database optimizations.",
    bullets: [
      "Designed and developed responsive frontend UI components and robust backend APIs to streamline enterprise workflows.",
      "Integrated RESTful services with databases, optimizing query performance and maintaining version control via Git/GitHub.",
      "Collaborated in cross-functional agile sprints, participating in code reviews, bug fixes, and continuous integration pipelines."
    ],
    skills: ["React", "FastAPI", "Node.js", "RESTful APIs", "MongoDB", "SQL", "Git", "GitHub"]
  }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, tag: "Primary Backend & AI", icon: "Terminal" },
      { name: "JavaScript (ES6+)", level: 88, tag: "Modern Web Standard", icon: "Code" },
      { name: "SQL", level: 82, tag: "Relational Queries & DDL", icon: "Database" },
      { name: "HTML5", level: 95, tag: "Semantic Markup", icon: "Layout" },
      { name: "CSS3", level: 90, tag: "Responsive Styling", icon: "Palette" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React", level: 92, tag: "Components & Hooks", icon: "Atom" },
      { name: "Vite", level: 88, tag: "Modern Build Tooling", icon: "Zap" },
      { name: "Tailwind CSS", level: 94, tag: "Utility-First Styling", icon: "Palette" },
      { name: "Lucide Icons", level: 90, tag: "Modern Vector Graphics", icon: "Smile" },
      { name: "Recharts", level: 82, tag: "Data Visualizations", icon: "BarChart3" },
      { name: "PWA Architecture", level: 84, tag: "Service Workers & Offline", icon: "Smartphone" }
    ]
  },
  {
    id: "backend",
    name: "Backend & AI Engineering",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 89, tag: "High-Speed Async Python", icon: "Cpu" },
      { name: "Node.js", level: 85, tag: "JavaScript Runtime", icon: "Server" },
      { name: "Express.js", level: 84, tag: "Microservices Framework", icon: "Layers" },
      { name: "RESTful APIs", level: 92, tag: "Endpoint Architecture", icon: "Network" },
      { name: "WebSockets", level: 86, tag: "Real-Time Bi-Directional", icon: "Radio" },
      { name: "PyTorch", level: 82, tag: "Deep Learning & Tensors", icon: "Brain" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 88, tag: "NoSQL Document Store", icon: "FileCode" },
      { name: "PyMongo", level: 86, tag: "Python ODM/Driver", icon: "Layers" },
      { name: "MS SQL Server", level: 80, tag: "Enterprise Relational DB", icon: "Database" },
      { name: "Cloud Deployment (Render)", level: 85, tag: "Containerized Hosting", icon: "Cloud" }
    ]
  },
  {
    id: "tools",
    name: "Core Tools & Computer Vision",
    icon: "Wrench",
    skills: [
      { name: "OpenCV", level: 84, tag: "Image & Video Processing", icon: "Eye" },
      { name: "FaceNet / InceptionResnetV1", level: 82, tag: "Facial Embeddings", icon: "ScanFace" },
      { name: "MTCNN", level: 83, tag: "Multi-Task Face Detection", icon: "Scan" },
      { name: "Git & GitHub", level: 90, tag: "Version Control & CI", icon: "GitBranch" },
      { name: "VS Code", level: 95, tag: "Primary IDE", icon: "Terminal" },
      { name: "Postman", level: 88, tag: "API Testing & Automation", icon: "Send" }
    ]
  }
];

export const projects = [
  {
    id: "smartface",
    title: "SmartFace — Enterprise AI Employee Attendance Platform",
    subtitle: "Production-Grade Biometric Attendance System",
    category: "Full Stack AI & Real-Time System",
    badge: "Featured AI Platform",
    description: "Engineered a production-grade full-stack biometric attendance platform using FastAPI, PyTorch, MongoDB, and React. Implemented automated IN/OUT state machines, low-latency WebSockets for live updates, and a rich admin KPI dashboard.",
    keyFeatures: [
      "Facial Recognition Engine: Deep learning embeddings using MTCNN detection and FaceNet (InceptionResnetV1) for high-accuracy biometric verification.",
      "Automated IN/OUT State Machine: Real-time transition handling preventing double-checkins with time-fenced shifts.",
      "Low-Latency WebSockets: Instant real-time updates broadcast to the administrative dashboard without polling.",
      "Admin KPI Analytics: Attendance percentages, punch history, shift tracking, and dynamic reporting."
    ],
    technologies: ["FastAPI", "PyTorch", "MongoDB", "React", "WebSockets", "FaceNet", "MTCNN", "Tailwind CSS"],
    liveUrl: "https://attendance-seven-green.vercel.app/",
    githubUrl: "https://github.com/Prachi0216-tech/attendence",
    previewType: "attendance"
  },
  {
    id: "myroute",
    title: "MyRoute — Real-Time Transit & Commute Platform",
    subtitle: "Interactive Geolocation & Transit Tracking PWA",
    category: "Full Stack PWA & Mapping",
    badge: "Live PWA Platform",
    description: "Developed a real-time public transit tracking platform utilizing React, Vite, Leaflet maps, and PWA architecture. Integrated Service Workers for offline caching and deployed scalable containerized cloud hosting for high responsiveness.",
    keyFeatures: [
      "Interactive Geospatial Mapping: Integrated dynamic Leaflet maps with custom vehicle route overlays and stop markers.",
      "Progressive Web App (PWA): Service Workers providing robust offline caching, rapid asset load times, and installable experience.",
      "Live Commute Updates: Real-time tracking of route delays, arrival estimation, and transit schedules.",
      "Containerized Cloud Hosting: Optimized deployment on Render ensuring scalable responsiveness under variable traffic."
    ],
    technologies: ["React", "Vite", "Leaflet Maps", "PWA Architecture", "Service Workers", "Render", "Tailwind CSS"],
    liveUrl: "https://myroute-transit.onrender.com/",
    githubUrl: "https://github.com/Prachi0216-tech/route",
    previewType: "transit"
  },
  {
    id: "brand-sentiment",
    title: "Brand Sentiment Analysis & Web Platform",
    subtitle: "Natural Language Processing & ML Insights",
    category: "Machine Learning & NLP Application",
    badge: "Machine Learning",
    description: "Built a full-stack web application integrating a Python/NLP backend with an interactive Streamlit frontend interface. Implemented TF-IDF text preprocessing and machine learning classification algorithms achieving an 0.82 F1-score.",
    keyFeatures: [
      "NLP Processing Pipeline: Tokenization, stopword removal, lemmatization, and TF-IDF feature extraction.",
      "Classification Model: Multi-class sentiment categorization (Positive, Neutral, Negative) reaching a robust 0.82 F1-score.",
      "Interactive Streamlit Interface: Instant text classification, batch sentiment analysis of social reviews, and interactive metrics.",
      "Data Visualizations: Sentiment distribution charts, key polarity phrases, and confidence breakdown."
    ],
    technologies: ["Python", "NLP", "Streamlit", "Scikit-Learn", "TF-IDF", "Pandas", "Matplotlib"],
    liveUrl: null, // live link not provided in resume
    githubUrl: "https://github.com/Prachi0216-tech/brand-sentiment-analysis",
    previewType: "sentiment"
  }
];

export const certifications = [
  {
    id: "infosys-dsa",
    title: "Data Structures and Algorithms using Python",
    issuer: "Infosys Springboard",
    date: "Certified",
    badge: "Core CS & Algorithms",
    description: "Comprehensive certification covering algorithmic complexity, dynamic programming, tree traversals, graph algorithms, and efficient data structures implemented in Python.",
    skillsLearned: ["Data Structures", "Python", "Algorithms", "Optimization", "Time & Space Complexity"],
    verifyUrl: "https://infyspringboard.onwingspan.com/"
  },
  {
    id: "copilot-prompt",
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "Microsoft & Simplilearn",
    date: "Certified",
    badge: "AI Engineering & Dev Productivity",
    description: "Hands-on training in context structuring, code synthesis, iterative prompt refinement, and leveraging GitHub Copilot for enterprise code development.",
    skillsLearned: ["Prompt Engineering", "GitHub Copilot", "Generative AI", "Developer Productivity", "Code Generation"],
    verifyUrl: "https://www.simplilearn.com/"
  },
  {
    id: "deloitte-strategy",
    title: "Deloitte Technology Strategy Virtual Experience",
    issuer: "Forage & Deloitte",
    date: "April 2026",
    badge: "Enterprise Strategy & Architecture",
    description: "Completed real-world enterprise simulations focused on data interpretation, cloud transformation roadmaps, and strategic technical planning for modern enterprises.",
    skillsLearned: ["Technology Strategy", "Cloud Modernization", "Data Interpretation", "Enterprise Architecture"],
    verifyUrl: "https://www.theforage.com/"
  }
];

export const achievements = [
  {
    id: "deloitte-sim",
    title: "Deloitte Technology Strategy Virtual Experience",
    organization: "Deloitte & Forage",
    date: "April 2026",
    category: "Strategic Case & Tech Architecture",
    description: "Completed real-world simulations focused on data interpretation and strategic technical planning, analyzing technology infrastructure bottlenecks and formulating enterprise cloud roadmaps.",
    tags: ["Enterprise Planning", "Data Strategy", "Systems Architecture"]
  },
  {
    id: "aavishkar-hackathon",
    title: "Aavishkar 3.0 Tech Innovation",
    organization: "ABES Institute of Technology",
    date: "June 2024",
    category: "Hackathon & Prototyping",
    description: "Participated in tech innovation event, demonstrating collaborative prototyping, rapid ideation, and agile problem-solving under strict time constraints.",
    tags: ["Hackathon", "Rapid Prototyping", "Team Collaboration", "Problem Solving"]
  }
];
