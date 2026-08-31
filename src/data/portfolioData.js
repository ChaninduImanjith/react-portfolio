// Navigation Links
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

// Hero Stats
export const heroStats = [
  { value: '3', suffix: '+', label: 'Years Coding' },
  { value: '10', suffix: '+', label: 'Projects Built' },
  { value: '16', suffix: '+', label: 'Certifications' },
];

// Typewriter Roles
export const roles = [
  'DevOps & MLOps Engineer',
  'AI Solutions Architect',
  'Full-Stack Developer',
  'SE Undergraduate',
  'Tech Writer',
];

// Social Links
export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chanindu-imanjith-72814431b/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ChaninduImanjith',
    icon: 'github',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@chanindu.imanjith',
    icon: 'medium',
  },
];

// Skills
export const languageSkills = [
  { name: 'Java', percent: 95 },
  { name: 'C', percent: 90 },
  { name: 'JavaScript / TypeScript', percent: 90 },
  { name: 'React / Next.js', percent: 85 },
  { name: 'Node.js / Express', percent: 80 },
  { name: 'Python', percent: 80 },
];

export const toolSkills = [
  'Docker', 'Kubernetes', 'AWS', 'GCP',
  'CI/CD', 'Terraform', 'GitOps', 'Linux',
  'OpenAI API', 'LangChain', 'Prompt Engineering', 'Vector DBs',
  'REST APIs', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
];

// Projects
export const projects = [
  {
    id: 'talynza',
    title: 'Talynza – AI-Native Recruitment Platform',
    shortDescription:
      'An AI-native recruitment platform built on a modern microservices architecture, combining intelligent recruitment workflows with Spring AI, event-driven Kafka messaging, Redis caching, and Kubernetes-ready cloud-native deployment.',
    tags: ['Next.js', 'Spring Boot', 'Spring AI', 'Kafka', 'Kubernetes', 'Docker', 'PostgreSQL'],
    category: 'AI Platform / Microservices / Cloud Native',
    image: '/images/project_talynza.png',
    github: 'https://github.com/ChaninduImanjith/talynza-platform',
    featured: true,
    teamProject: false,
  },
  {
    id: 'devops-platform',
    title: 'Cloud Native DevOps Platform',
    shortDescription:
      'A production-oriented cloud-native platform showcasing modern DevOps: Amazon EKS orchestration, Terraform IaC, GitHub Actions CI/CD, Prometheus & Grafana monitoring, and full-stack application delivery on AWS.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
    category: 'DevOps / AWS / Kubernetes',
    image: '/images/project_devops.png',
    github: 'https://github.com/ChaninduImanjith/cloud-native-devops-platform',
    featured: true,
    teamProject: false,
  },
  {
    id: 'research-tracker',
    title: 'Research Project Tracker',
    shortDescription:
      'A secure full-stack research project management system with JWT authentication, role-based access control, and REST APIs. Built with a React + TypeScript frontend and a Spring Boot + Spring Security backend.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    category: 'Full Stack / Spring Boot / React',
    image: '/images/project_research.png',
    github: {
      frontend: 'https://github.com/ChaninduImanjith/research-project-tracker-frontend',
      backend: 'https://github.com/ChaninduImanjith/research-project-tracker-backend',
    },
    featured: false,
    teamProject: false,
  },
  {
    id: 'docker-calculator',
    title: 'Multi-Stage Docker Calculator',
    shortDescription:
      'A production-ready JavaScript calculator demonstrating modern containerisation: multi-stage Docker builds, automated Jest testing, ESLint quality checks, Nginx serving, and a full GitHub Actions CI/CD pipeline.',
    tags: ['Docker', 'GitHub Actions', 'JavaScript', 'Jest', 'Nginx', 'CI/CD', 'ESLint'],
    category: 'Docker / CI-CD / DevOps',
    image: '/images/project_docker_calc.png',
    github: 'https://github.com/ChaninduImanjith/multi-stage-docker-calculator',
    featured: false,
    teamProject: false,
  },
  {
    id: 'sams',
    title: 'Student Attendance Management System – SAMS',
    shortDescription:
      'A desktop-based attendance system built with Java, JavaFX, and Hibernate ORM. Features Admin and Lecturer roles, student management, attendance tracking, reporting, and a layered software architecture backed by MySQL.',
    tags: ['Java', 'JavaFX', 'Hibernate', 'MySQL', 'Maven', 'OOP'],
    category: 'Java / Desktop / Database',
    image: '/images/project_sams.png',
    github: 'https://github.com/ChaninduImanjith/student-attendance-management-system',
    featured: false,
    teamProject: false,
  },
  {
    id: 'spare-parts',
    title: 'Vehicle Spare Parts Management System',
    shortDescription:
      'A full-stack web platform for vehicle spare parts commerce with customer and admin portals, product management, shopping cart, order management, and a team-based Git branching workflow with CI integration.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'GitHub Actions', 'Git'],
    category: 'Full Stack / PHP / MySQL',
    image: '/images/project_spare_parts.png',
    github: 'https://github.com/ChaninduImanjith/vehicle-spare-parts-management-system',
    featured: false,
    teamProject: false,
  },
  {
    id: 'debatex',
    title: 'DebateX – AI Powered Realtime Debate Platform',
    shortDescription:
      'An AI-powered real-time debate platform enabling interactive debate experiences via Socket.IO. Built with a TypeScript/Next.js frontend and a Node.js/Express backend with real-time event-driven communication.',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'Socket.IO', 'Express.js', 'REST APIs'],
    category: 'AI / Real-Time / TypeScript',
    image: null,
    github: 'https://github.com/ChaninduImanjith/debatex',
    featured: false,
    teamProject: false,
  },
  {
    id: 'petcare',
    title: 'Pet Care Management System',
    shortDescription:
      'A team-based web application for managing pet care services including grooming, bathing, veterinary appointments, and administrative operations. Developed collaboratively using PHP, MySQL, and a structured Git workflow.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    category: 'Team Project / PHP / MySQL',
    image: null,
    github: 'https://github.com/ChaninduImanjith/Pet-Care-System',
    featured: false,
    teamProject: true,
  },
];

// Experience & Education Timeline 
export const timeline = [
  {
    date: 'Mar 2025 — Mar 2029',
    title: 'BSc (Hons) Software Engineering',
    company: 'University of Kelaniya, Sri Lanka',
    description: 'Currently pursuing a Bachelor of Science with Honours in Software Engineering, Computer Software Engineering at the University of Kelaniya, Sri Lanka.',
    skills: [],
  },
  {
    date: 'Dec 2024 — Nov 2025',
    title: 'CMJD Professional | Comprehensive Master Java Developer',
    company: 'IJSE — Institute of Software Engineering',
    description: 'Completed the IJSE CMJD Professional Programme an in depth program designed to build advanced Java development skills and a comprehensive understanding of the software development lifecycle, including advanced Java programming, object-oriented design and project management.',
    skills: ['Spring Framework', 'Core Java', 'JavaSE', 'Web Development', 'Angular', 'C++', 'MySQL', 'Spring MVC', 'Programming', 'Spring Boot', 'C#', 'AJAX', 'JavaScript'],
  },
  {
    date: 'Jul 2024 — Mar 2025',
    title: 'Management Assistant',
    company: 'Industrial Technology Institute · Contract',
    description: 'Worked as a Management Assistant at the Industrial Technology Institute in Colombo, Western Province, Sri Lanka. Provided executive and administrative support across departments.',
    skills: ['Microsoft Excel', 'Assistants', 'Management Support', 'Executive Support', 'Administrative Assistance'],
  },
  {
    date: '2014 — 2024',
    title: 'Secondary Education',
    company: 'Ananda Sastralaya National School',
    description: 'Completed secondary education at Ananda Sastralaya National School from 2014 to 2024.',
    skills: [],
  },
];

// Technology Icons (Row 1)
export const techRow1 = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

//  Technology Icons (Row 2)
export const techRow2 = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', invert: true },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

// Certifications 
export const certifications = [
  {
    name: 'Linux Essentials',
    issuer: 'Cisco',
    date: 'Issued Feb 2026',
    skills: ['Linux', 'Shell Scripting', 'Linux Server', 'Embedded Linux'],
    logo: '/images/CISCO.png',
    link: 'https://www.credly.com/badges/a959dfea-a8a0-497b-9248-af62d6be52a3/linked_in_profile',
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Feb 2026',
    skills: ['Cloud Computing', 'Cloud Security', 'AWS IAM', 'Machine Learning'],
    logo: '/images/AWS.png',
    link: 'https://www.linkedin.com/in/chanindu-imanjith-72814431b/details/certifications/1772045757978/single-media-viewer/?profileId=ACoAAFEAHxABDbLe6qQVkTJuJ_Gd6y2kQzIfL_I',
  },
  {
    name: 'Java',
    issuer: 'HackerRank',
    date: 'Issued Sep 2025',
    skills: ['Java'],
    logo: '/images/HackerRank.png',
    link: 'https://www.hackerrank.com/certificates/iframe/5444bb569422',
  },
  
  {
    name: 'Computer Hardware Basics',
    issuer: 'Cisco',
    date: 'Issued Jan 2025',
    skills: ['Computer Hardware', 'Device Management', 'Laptops'],
    logo: '/images/CISCO.png',
    link: 'https://www.credly.com/badges/4581ecb7-6d58-4ef6-bf78-706e74f606a3/linked_in_profile',
  },
  {
    name: 'Web Development',
    issuer: 'Sololearn',
    date: 'Issued Jan 2025',
    skills: ['HTML', 'CSS', 'JavaScript'],
    logo: '/images/SoloLearn.png',
    link: 'https://www.sololearn.com/certificates/CC-1MD5ICD1',
  },
  {
    name: 'Introduction to Java',
    issuer: 'Sololearn',
    date: 'Issued Dec 2024',
    skills: ['Java'],
    logo: '/images/SoloLearn.png',
    link: 'https://www.sololearn.com/certificates/CC-SW1ZH8NV',
  },
  {
  name: 'JavaScript Application Programming',
    issuer: 'Alison',
    date: 'Issued Aug 2024',
    skills: ['JavaScript'],
    logo: '/images/Alison.png',
    link: 'https://alison.com/certification/check/3b6ecf0d3d',
  },
  {
    name: 'Introduction to Programming C',
    issuer: 'Sololearn',
    date: 'Issued Aug 2024',
    skills: ['C Programming'],
    logo: '/images/SoloLearn.png',
    link: 'https://www.sololearn.com/certificates/CC-TUY8OIWS',
  },
  {
  name: 'AI and Machine Learning in Business',
    issuer: 'Alison',
    date: 'Issued Aug 2024',
    skills: ['Artificial Intelligence','Machine Learning'],
    logo: '/images/Alison.png',
    link: 'https://alison.com/certification/check/9b57c6ce69',
  },
  {
    name: 'ITIL 4 Fundamentals — IT Service Management',
    issuer: 'Alison',
    date: 'Issued May 2024',
    skills: ['ITIL', 'IT Service Management'],
    logo: '/images/Alison.png',
    link: 'https://alison.com/certification/check/08230125bd',
  },
  {
    name: 'How to Become a Cloud Architect',
    issuer: 'Alison',
    date: 'Issued Aug 2024',
    skills: ['Cloud Architecture','Cloud Computing'],
    logo: '/images/Alison.png',
    link: 'https://alison.com/certification/check/704460cbef',
  },
   {
    name: 'Plan Agile with GitHub Projects and Azure Boards',
    issuer: 'Microsoft',
    date: 'Issued Mar 2026',
    skills: ['GitHub Projects','Azure Boards','Agile'],
    logo: '/images/Microsoft.png',
    link: 'https://learn.microsoft.com/en-us/users/chaninduimanjith-8749/achievements/9r5cxtmu?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
   {
    name: 'Introduction to DevOps',
    issuer: 'Microsoft',
    date: 'Issued Mar 2026',
    skills: ['DevOps','CI/CD','Azure DevOps'],
    logo: '/images/Microsoft.png',
    link: 'https://learn.microsoft.com/en-us/users/chaninduimanjith-8749/achievements/kcm4gnvb?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
   {
    name: 'Describe the Core Architectural Components of Azure',
    issuer: 'Microsoft',
    date: 'Issued Mar 2026',
    skills: ['Azure Architecture','Cloud Computing','Microsoft Azure'],
    logo: '/images/Microsoft.png',
    link: 'https://learn.microsoft.com/en-us/users/chaninduimanjith-8749/achievements/37ladw6h?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
   {
    name: 'Plan with DevOps',
    issuer: 'Microsoft',
    date: 'Issued Mar 2026',
    skills: ['DevOps','Project Planning','Azure DevOps'],
    logo: '/images/Microsoft.png',
    link: 'https://learn.microsoft.com/en-us/users/chaninduimanjith-8749/achievements/hzlp55v8?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  
 {
    name: 'Develop with DevOps',
    issuer: 'Microsoft',
    date: 'Issued Mar 2026',
    skills: ['DevOps','Agile','DevSecOps','CI/CD<'],
    logo: '/images/Microsoft.png',
    link: 'https://learn.microsoft.com/en-us/users/chaninduimanjith-8749/achievements/uajrx5n3?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  
];

// Articles
export const articles = [
  {
    title: 'Beyond the Wall of Text: Why Diagrams Are the Secret to Technical Clarity',
    description: 'A diagram is a visual representation of information ideas or a system. In the fast-paced world of technical writing and software development diagrams are the secret weapon for clarity.',
    meta: 'Technical Writing · Mar 22',
    link: 'https://medium.com/@chanindu.imanjith/beyond-the-wall-of-text-why-diagrams-are-the-secret-to-technical-clarity-0a9c5febfbe2',
  },
  {
    title: 'Modeling the Digital Pandemic: How Better Math Can Stop Malware in Its Tracks',
    description: 'Exhibited at the Undergraduate Research Symposium & Innovation Exhibition (URSIE 2025), Faculty of Science, University of Kelaniya. Exploring mathematical models to combat malware spread.',
    meta: 'Cybersecurity · Dec 26, 2025',
    link: 'https://medium.com/@chanindu.imanjith/modeling-the-digital-pandemic-how-better-math-can-stop-malware-in-its-tracks-485f8b0e52cd',
  },
  {
    title: 'CIA Triad in Cyber Security',
    description: 'In cybersecurity, the CIA Triad serves as the fundamental framework that guides every security decision. A deep dive into this three-pillar model of Confidentiality, Integrity and Availability.',
    meta: 'Cybersecurity · Jun 23, 2025',
    link: 'https://medium.com/@chanindu.imanjith/cia-triad-in-cyber-security-3a010af941d1',
  },
];
