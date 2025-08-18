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
    title: 'Senior Software Engineer (Java)',
    blurb:
        'Full-stack developer with 6+ years building scalable software using Java, Spring Boot and Angular. Strong in microservices, REST/SOAP APIs, and agile delivery — with hands-on DevOps on AWS and Jenkins.',
    avatar: '/assets/raymond.jpg',
    aboutMe: `I’m a Senior Software Engineer with over 6 years of experience in software development. I specialize in
            Java, Spring Boot,
            and microservices, and I’ve led cloud migration projects using AWS. In my recent role at Enterprise
            Mobility, I upgraded
            Spring-based applications, migrated batch jobs to the cloud with S3 storage, and modernized SOAP services
            into secure
            REST APIs.
            I’ve worked with messaging tools like ActiveMQ and RabbitMQ, used Redis for caching, and used Hibernate with
            PostgreSQL
            and Oracle for data persistence. I’m experienced with CI/CD pipelines using Jenkins and Bitbucket, and I
            always focus on
            scalable architecture, clean code, and secure APIs.
            I hold an Msc. Computer Science from Maharishi International University, Fairfield IA, USA and I’m
            AWS Certified.`,
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
        phone: '515-205-8276',
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
        x:'x.com/mawunyoaheto'
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
