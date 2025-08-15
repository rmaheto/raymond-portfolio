// src/app/data/profile.ts

export const profile = {
    name: 'Raymond Aheto',
    title: 'Senior Software Engineer (Java)',
    blurb:
        'Full‑stack developer with 6+ years building scalable software using Java, Spring Boot and Angular. Strong in microservices, REST/SOAP APIs, and agile delivery — with hands‑on DevOps on AWS and Jenkins.',
    avatar: '/assets/raymond.jpg',
    resumeUrl: '/assets/Raymond_Aheto_Resume.pdf',
    location: 'West Des Moines, IA',
    links: {
        email: 'rmkaheto4java@gmail.com',
        phone: '515‑205‑8276',
        linkedin: 'https://www.linkedin.com/in/raymond-aheto',
        github: 'https://github.com/rmaheto',
        facebook: 'https://www.facebook.com/profile.php?id=100086921498712'
    }
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
        'JSP'
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
        'JUnit', 'Mockito'
    ],

    db: [
        'PostgreSQL', 'Oracle', 'MySQL', 'MS SQL Server'
    ],

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
        'Server: Apache Tomcat'
    ],

    // Testing
    testing: ['JUnit', 'Mockito']
};


export const projects = [
    {
        name: 'Job Search Management System (MIU)',
        desc:
            'Designed and built an app to track job listings, applications, interviews, and resumes. Implemented REST services and data modeling; documented APIs with Swagger.',
        tags: ['Java', 'Spring', 'MySQL', 'Artemis', 'Swagger', 'Git']
    },
    {
        name: 'Movie Management System (MIU)',
        desc:
            'Full‑stack app to manage movies, actors, and awards with CRUD workflows and Angular UI.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Angular']
    },
    {
        name: 'Dictionary Application',
        desc:
            'Online dictionary with search, definitions, and responsive UI.',
        tags: ['HTML5', 'CSS3', 'Node.js/Express', 'JavaScript', 'jQuery', 'Ajax', 'MySQL']
    },
    {
        name: 'Library Management System (MIU)',
        desc:
            'Team project for member/author registrations, book reservations, and fines.',
        tags: ['Java', 'J2EE', 'Java Swing', 'Git']
    }
];

export const experience = [
    {
        role: 'Software Engineer II',
        company: 'Application Engineering Group (Client: Enterprise Mobility), United States',
        period: 'Jun 2022 – Jul 2025',
        bullets: [
            'Designed and implemented RESTful APIs and microservices using Spring Boot and Hibernate.',
            'Built features with Spring Web, Spring Data JPA, Spring Security, and Spring Batch.',
            'Drove unit/integration testing with JUnit & Mockito; improved code quality and reliability.',
            'Contributed to technical design discussions and architectural recommendations.',
            'Troubleshot production issues (Splunk) and reduced downtime through root‑cause fixes.',
            'Managed deployments/migrations across environments; automated with Jenkins CI/CD.'
        ],
        stack:
            'Spring Boot, Spring Web, Spring Data JPA, Spring Batch, Spring Security, Hibernate, Struts2, JSP, Angular, AWS, Microservices, JUnit, Mockito, Oracle, Splunk, IntelliJ, Swagger, Bitbucket, Jenkins, Jira, Apache Tomcat'
    },
    {
        role: 'Software Engineer',
        company: 'Infotech Dot Net Systems Ltd – Accra, Ghana',
        period: '2018 – 2021',
        bullets: [
            'Led integration projects for national healthcare systems; aligned with domain standards.',
            'Developed RESTful services and backend modules with Spring Boot & Hibernate.',
            'Created prototypes to validate designs and accelerate delivery.',
            'Tested APIs with Swagger/Postman; participated in Agile ceremonies.'
        ],
        stack:
            'Spring Boot, Spring Web, Spring Data JPA, Spring Security, Microservices, JUnit, Mockito, PostgreSQL, IntelliJ, Swagger, Slack, GitHub, Apache Tomcat'
    },
    {
        role: 'Backend Developer',
        company: 'KAZIHUB Ltd – Spintex, Accra, Ghana',
        period: '2018 – 2021',
        bullets: [
            'Built RESTful APIs for a point‑of‑sale system and backend integrations.',
            'Implemented Spring Boot/Hibernate services and Node.js/Express components.',
            'Collaborated with frontend team; documented & tested APIs (Swagger/Postman).'
        ],
        stack: 'Java, Spring Boot, Hibernate, Node.js, Express.js, PostgreSQL, MS SQL Server, VS Code, GitHub'
    },
    {
        role: 'IT Manager',
        company: 'New Crystal Health Services Ltd – Accra, Ghana',
        period: '2015 – 2018',
        bullets: [
            'Led IT operations and digital transformation, including a telemedicine rollout.',
            'Owned vendor relationships and contract negotiations; ensured solution quality.'
        ]
    },
    {
        role: 'IT Manager',
        company: 'St. John of God Hospital – Duayaw Nkwanta, Ghana',
        period: '2009 – 2014',
        bullets: [
            'Managed hospital IT systems, upgrades, and health‑information deployments.',
            'Coordinated with software vendors for implementation and support.'
        ]
    }
];

export const certifications = {
    certs: [
        {
            name: 'AWS Certified Solutions Architect – Professional (2023)',
            badge: 'assets/aws-badge.png',
            link: 'https://www.credly.com/badges/f79ef9cb-a06f-4692-a149-4bf286d37c51/public_url'
        }
    ],
    education: [
        {
            name: 'Master of Science in Computer Science',
            school: 'Maharishi International University (MIU), Fairfield, IA, USA',
            years: '2023'
        },
        {
            name: 'Bachelor of Education in Computer Science',
            school: 'University of Cape Coast, Ghana',
            years: '2008'
        }
    ]
};
