// src/app/data/profile.ts

// Define a type for links
export type Links = {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
};

export const profile: {
  name: string;
  title: string;
  blurb: string;
  avatar: string;
  aboutMe: string;
  resumeUrl: string;
  location: string;
  seo: {
    pageTitle: string;
    description: string;
  };
  contactIntro: string;
  links: Links;
  linksDisplay: Partial<Links>;
  footer: { text: string };
} = {
  name: 'Raymond Aheto',
  title: 'SOFTWARE ENGINEER | JAVA | AWS CERTIFIED',
  blurb:
    'Senior Software Engineer with 6+ years building scalable software using Java, Spring Boot and Angular. Strong in microservices, REST/SOAP APIs, and agile delivery — with hands-on DevOps on AWS and Jenkins.',
  avatar: '/assets/raymond.jpg',
  aboutMe: `Senior Software Engineer with 6+ years of experience delivering scalable enterprise applications using Java (8–17), Spring Boot, and AWS. Skilled in designing, developing, and maintaining REST APIs, 
            microservices, and messaging systems (Kafka, RabbitMQ) with Spring and Hibernate. Proven ability to modernize legacy platforms, build new features that enhance customer experience and accelerate 
            product delivery, reduce costs, and improve system performance through cloud-native solutions.`,
  resumeUrl: '/assets/Raymond_Aheto_Resume.pdf',
  location: 'West Des Moines, IA',

  seo: {
    pageTitle: 'About Me - Raymond Aheto',
    description:
      'Senior Software Engineer specializing in Java, Spring Boot, AWS cloud migration, and secure API development.',
  },

  contactIntro:
    "I'm always interested in discussing new opportunities, challenging projects, or connecting.",

  links: {
    email: 'rmkaheto4java@gmail.com',
    phone: 'XXX-XXX-8276',
    linkedin: 'https://www.linkedin.com/in/raymond-aheto',
    github: 'https://github.com/rmaheto',
    facebook: 'https://www.facebook.com/profile.php?id=100086921498712',
    x: 'https://x.com/mawunyoaheto',
    instagram: 'https://www.instagram.com/mawunyoaheto/',
  },

  linksDisplay: {
    linkedin: 'linkedin.com/in/raymond-aheto',
    github: 'github.com/rmaheto',
    facebook: 'facebook.com/raymond-aheto',
    instagram: 'instagram.com/mawunyoaheto/',
    x: 'x.com/mawunyoaheto',
  },

  footer: {
    text: 'Crafted with ❤️ by Raymond Aheto',
  },
};

export const skills = {
  // UI
  frontend: [
    'Angular',
    'TypeScript',
    'HTML5 / CSS3',
    'JavaScript',
    'Bootstrap',
    'jQuery',
    'AJAX',
    'JSP',
  ],

  // Services & backend
  backend: [
    'Java',
    'Spring (Boot, MVC, Data JPA, Security, Batch)',
    'Hibernate',
    'Microservices',
    'RESTful APIs',
    'SOAP',
    'Struts 2 (legacy)',
    'JUnit',
    'Mockito',
  ],

  db: ['PostgreSQL', 'Oracle', 'MySQL', 'MS SQL Server'],

  // Platform, DevOps & tooling
  devops: [
    'AWS (Solutions Architect)',
    'Jenkins (CI/CD)',
    'Docker',
    'OpenAPI / Swagger',
    'Postman',
    'Git / GitHub / Bitbucket',
    'IDEs: IntelliJ / Eclipse / VS Code',
    'Observability: Splunk',
    'Project: Jira',
    'Server: Apache Tomcat',
  ],

  // Testing
  testing: ['JUnit', 'Mockito'],
};

export const projects = [
  {
    name: 'Job Search Management System (MIU)',
    desc: 'Designed and built an app to track job listings, applications, interviews, and resumes. Implemented REST services and data modeling; documented APIs with Swagger.',
    tags: [
      'Java',
      'Spring',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'MySQL',
      'Artemis',
      'Swagger',
      'Git',
    ],
  },
  {
    name: 'Schomemoire',
    desc: 'A modern school yearbook and management platform built with Spring Boot (Java) and Angular, designed to help schools create digital and printable yearbooks with ease.',
    tags: [
      'Java',
      'SpringBoot',
      'Spring Data JPA',
      'Spring Security',
      'Spring AI',
      'Aws S3',
      'AWS CloudFront',
      'Hibernate',
      'Postgres',
      'Swagger',
      'GitLab',
    ],
  },
  {
    name: 'Authentication Service',
    desc: 'Microservice for user authentication and authorization, built with Spring Boot and integrated with Spring Security and JWT. Supports role-based access control, secure token management, and service discovery through Spring Cloud Eureka. Designed to be a core component in a microservices architecture.',
    tags: [
      'Java',
      'SpringBoot',
      'Spring Data JPA',
      'Spring Security',
      'JWT',
      'Spring Cloud',
      'Eureka Server',
      'Eureka Client',
      'Hibernate',
      'Postgres',
      'Swagger',
      'Git',
    ],
  },

  {
    name: 'Movie Management System (MIU)',
    desc: 'Full‑stack app to manage movies, actors, and awards with CRUD workflows and Angular UI.',
    tags: ['Node.js', 'Express.js', 'Typescript', 'MongoDB', 'Angular'],
  },
  {
    name: 'Dictionary Application',
    desc: 'Online dictionary with search, definitions, and responsive UI.',
    tags: [
      'HTML5',
      'CSS3',
      'Node.js/Express',
      'JavaScript',
      'jQuery',
      'Ajax',
      'MySQL',
    ],
  },
  {
    name: 'Library Management System (MIU)',
    desc: 'Team project for member/author registrations, book reservations, and fines.',
    tags: ['Java', 'J2EE', 'Java Swing', 'Git'],
  },
];

export const experience = [
  {
    role: 'Software Engineer II',
    company:
      'AEG, Inc (Employer) | Client: Enterprise Mobility, United States',
    period: 'Jun 2022 – Present',
    bullets: [
      'Modernized legacy SOAP services into secure, standards-based RESTful APIs using Spring Boot, improving interoperability',
      'Migrated Spring Batch workloads to AWS S3, reducing on-prem storage costs by 40% and boosting scalability',
      'Upgraded Java (8 to 17), Spring Boot (2.5 to 3.1), Spring MVC (4 to 5.3), enhancing reliability and reducing downtime by 30%.',
      'Developed event-driven microservices with RabbitMQ and OAuth 2.0, enabling real-time processing and improvingthroughput by 30% ',
      'Delivered new feature development, adding Vehicle Recall Audit functionality that improved compliance tracking and streamlined vehicle repair workflows in a fleet management application',
      'Collaborated with product teams to align sprint goals and user needs, reducing feature delivery time by 15%',
      'Resolved production incidents with Splunk log analysis and code fixes, ensuring SLA compliance.'
    ],
    stack:
      'Spring Boot, Spring Web, Spring Data JPA, Spring Batch, Spring Security, Hibernate, Struts2, JSP, Splunk, Angular, AWS, Microservices, JUnit, Mockito, Oracle, Splunk, IntelliJ, Swagger, Bitbucket, Jenkins, Jira, Apache Tomcat',
  },
  {
    role: 'Software Engineer/Operations Manager (Hybrid Role)',
    company: 'Infotech Dot Net Systems Ltd – Accra, Ghana',
    period: '2018 – 2021',
    bullets: [
      'Designed and implemented RESTful APIs in Spring Boot to integrate EHR systems with third-party healthcare services',
      'Transformed healthcare monolithic applications into Spring Boot microservices with API Gateway and Eureka, improving scalability and system availability for patient services',
      'Developed batch jobs with Spring Batch to automate daily data synchronization of lab results and billing information, reducing manual intervention',
      'Implemented Kafka messaging to securely process 100K+ daily healthcare transactions, improving reliability and throughput',
      'Introduced caching (Spring Cache + Redis) for frequently accessed medical codes and reference data, improving application response time by 40%',
      'Acted as primary liaison with healthcare facility management to gather requirements, demonstrate solutions and ensure successful adoption of the Health Information Management System (HIMS)',
      'Coordinated with vendors, stakeholders and healthcare administrators to deliver compliant, scalable solutions.'

    ],
    stack:
      'Spring Boot, Spring Web, Spring Data JPA, Spring Security, Microservices, JUnit, Mockito, PostgreSQL, IntelliJ, Swagger, Slack, GitHub, Apache Tomcat, , OS Tickets',
  },
  {
    role: 'IT Manager',
    company: 'New Crystal Health Services Ltd – Accra, Ghana',
    period: '2015 – 2018',
    bullets: [
      'Directed IT operations for a healthcare network, improving system uptime to 99.5% through proactive monitoring',
      'Led the development of a telemedicine platform and modernization of health information systems.',
      'Oversaw vendor management, contract negotiations and performance reviews.',
      'Directed a team of IT staff, setting goals, conducting evaluations and ensuring project delivery.',
    ],
  },
  {
    role: 'IT Manager',
    company: 'St. John of God Hospital – Duayaw Nkwanta, Ghana',
    period: '2009 – 2014',
    bullets: [
      'Digitized health records, cutting data retrieval time by 40%, and led IT team to improve delivery by 35%',
      'Oversaw hospital-wide IT strategy, system upgrades, and rollout of health information systems.',
      'Coordinated with software vendors for implementation and support.',
    ],
  },
];

export const certifications = {
  certs: [
    {
      name: 'AWS Certified Solutions Architect – Professional (2023)',
      badge: 'assets/aws-badge.png',
      link: 'https://www.credly.com/badges/f79ef9cb-a06f-4692-a149-4bf286d37c51/public_url',
    },
  ],
  education: [
    {
      name: 'Master of Science in Computer Science',
      school: 'Maharishi International University (MIU), Fairfield, IA, USA',
      years: '2023',
    },
    {
      name: 'Bachelor of Education in Computer Science',
      school: 'University of Cape Coast, Ghana',
      years: '2008',
    },
  ],
};
