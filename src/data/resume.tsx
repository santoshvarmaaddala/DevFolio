import { Icons } from "@/components/icons";
import { Github, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santosh Varma Addala",
  initials: "ASV",
  url: "https://dillion.io",
  location: "AndhraPradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A passionate full-stack developer skilled in React and Node.js with a strong foundation in backend technologies like Express and Flask.",
  summary:
    "I am Santosh Varma Addala, a B.Tech CSE student at Pragati Engineering College, passionate about web and mobile development. I have experience building full-stack applications using React, FastAPI, and Node.js, I am continuously learning new technologies, recently diving into Hibernate for backend development.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Javascript",
    "Node.js",
    "Python",
    "Git",
    "FireBase",
    "MangoDB",
    "SQL",
    "Postgresql",
    "Flask",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "santoshvarma2166@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/santoshvarmaaddala",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santosh-varma-addala-3a6406255",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:santoshvarma2166@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Pragati Engineering College",
      href: "https://pragati.ac.in/",
      degree: "Bachelor's of Technology (CSE)",
      logoUrl: "/pragati.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "GIET Polytechnic College",
      href: "https://giet.ac.in/",
      degree: "Diploma in Computer Engineering (CME)",
      logoUrl: "/giet.png",
      start: "2019",
      end: "2022",
    },
    
  ],
  projects: [
    {
      title: "Weather Web App",
      href: "https://santoshvarmaaddala.github.io/Weather-App/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Weather App is a responsive web application built using ReactJS. It provides real-time weather updates based on user input, fetching data from a weather API. Ensuring smooth updates and performance. Designed with scalability in mind, this project showcases my proficiency in React, API integration, and frontend design.",
      technologies: [
        "React",
        "Figma",
        "Tailwindcss"
      ],
      links: [
        {
          type: "Website",
          href: "https://santoshvarmaaddala.github.io/Weather-App/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/santoshvarmaaddala/Weather-App/tree/gh-pages",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/weatherapp.png",
      video:
        "",
    },
    {
      title: "Event Management System",
      href: "https://github.com/santoshvarmaaddala/Event-Management-System",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "The Event Management System (EMS) is a web application built using Flask to streamline event planning and organization. It allows users to create, manage, and track events efficiently, providing an intuitive interface for handling event details, participant registrations, and scheduling.",
      technologies: [
        "Flask",
        "Python",
        "Jinger-template",
        "SqlAlchemy",
        "SqlLite"
      ],
      links: [
        {
          type: "source",
          href: "https://github.com/santoshvarmaaddala/Event-Management-System",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/ems.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Servicenow Certified System Administrator",
      dates: "August 08, 2024",
      location: "",
      description:
        "This certification validates my expertise in configuring, managing, and maintaining the ServiceNow platform. It covers user management, workflows, data schema, and automation to ensure efficient IT service management.",
      image:
        "/snsa.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Servicenow Certified Application Developer",
      dates: "July 22, 2024",
      location: "",
      description:
        "With this certification, I have demonstrated my ability to build, extend, and customize applications on the ServiceNow platform. It includes scripting, UI development, security configurations, and integrating third-party services.",
      image:
        "/snad.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "SalesForce AI Associate",
      dates: "November 03, 2024",
      location: "",
      description:
        "This certification showcases my understanding of AI concepts within the Salesforce ecosystem, including AI-driven automation, data insights, and ethical considerations for implementing AI in customer relationship management (CRM).",
      image:
        "/sfai.png",
      links: [],
    },
    
  ],
} as const;
