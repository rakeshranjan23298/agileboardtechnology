


export type Job = {
id: string;
title: string;
location: string;
category: string;
type: string;
description: string;
requirements: string[];
postedDate: string;
};

export const jobs: Job[] = [
   {
    id: "1",
    title: "SAP Developer",
    location: "Chicago, IL",
    category: "ERP & Enterprise Applications",
    type: "Full-time",
    description:
      "Develop, customize, and maintain SAP solutions to support enterprise business operations.",
    requirements: [
      "SAP ABAP",
      "SAP S/4HANA",
      "SAP Fiori",
      "Debugging",
    ],
    postedDate: "2026-06-09",
  },
  {
    id: "2",
    title: "AWS Cloud Developer",
    location: "Atlanta, GA",
    category: "Cloud & Infrastructure",
    type: "Full-time",
    description:
      "Develop cloud-native applications and deploy scalable solutions on AWS.",
    requirements: [
      "AWS",
      "Lambda",
      "EC2",
      "CloudFormation",
    ],
    postedDate: "2026-06-08",
  },
  {
    id: "3",
    title: "Software Developer",
    location: "Charlotte, NC",
    category: "Engineering",
    type: "Full-time",
    description:
      "Design, develop, test, and maintain enterprise software applications.",
    requirements: [
      "C# or Java",
      ".NET or Spring Boot",
      "SQL",
      "REST APIs",
    ],
    postedDate: "2026-06-07",
  },
  {
    id: "4",
    title: ".NET Full Stack Developer",
    location: "Dallas, TX",
    category: "Engineering",
    type: "Full-time",
    description:
      "Build scalable enterprise applications using .NET Core, React, SQL Server and Azure.",
    requirements: [
      "3+ years .NET Core",
      "React.js",
      "SQL Server",
      "REST APIs",
    ],
    postedDate: "2026-06-20",
  },
  {
    id: "5",
    title: "React Frontend Developer",
    location: "Austin, TX",
    category: "Engineering",
    type: "Full-time",
    description:
      "Develop modern and responsive web applications using React, TypeScript and Tailwind CSS.",
    requirements: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API Integration",
    ],
    postedDate: "2026-06-18",
  },
  {
    id: "6",
    title: "AI Engineer",
    location: "Seattle, WA",
    category: "Artificial Intelligence",
    type: "Full-time",
    description:
      "Develop AI-powered solutions using machine learning, LLMs, and cloud-based AI services.",
    requirements: [
      "Python",
      "Machine Learning",
      "OpenAI APIs",
      "Vector Databases",
    ],
    postedDate: "2026-06-15",
  },
  {
    id: "7",
    title: "DevOps Engineer",
    location: "Denver, CO",
    category: "Cloud & Infrastructure",
    type: "Full-time",
    description:
      "Manage CI/CD pipelines, cloud infrastructure, and deployment automation.",
    requirements: [
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    postedDate: "2026-06-12",
  },
  {
    id: "8",
    title: "UI/UX Designer",
    location: "New York, NY",
    category: "Design",
    type: "Contract",
    description:
      "Design intuitive and engaging user experiences for web and mobile applications.",
    requirements: [
      "Figma",
      "UI Design",
      "User Research",
      "Prototyping",
    ],
    postedDate: "2026-06-10",
  },
 
  {
    id: "9",
    title: "Java Developer",
    location: "Phoenix, AZ",
    category: "Engineering",
    type: "Full-time",
    description:
      "Build high-performance backend services using Java and Spring Boot.",
    requirements: [
      "Java",
      "Spring Boot",
      "Microservices",
      "MySQL",
    ],
    postedDate: "2026-06-06",
  },
  {
    id: "10",
    title: "UI/UX Developer",
    location: "San Francisco, CA",
    category: "Design",
    type: "Full-time",
    description:
      "Develop responsive user interfaces while collaborating closely with design and engineering teams.",
    requirements: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
    ],
    postedDate: "2026-06-05",
  },
];

export const insights = [
{
id: "1",
title: "How AI is Transforming Modern Education",
excerpt:
"Explore how Generative AI is revolutionizing learning experiences, assessments and personalized education.",
date: "2026-06-01",
category: "Artificial Intelligence",
},
{
id: "2",
title: "Building Scalable Applications with .NET and React",
excerpt:
"Best practices for developing enterprise-grade applications using modern web technologies.",
date: "2026-05-25",
category: "Software Development",
},
{
id: "3",
title: "The Future of Cloud-Native Applications",
excerpt:
"Why cloud-first architecture is essential for modern businesses and startups.",
date: "2026-05-15",
category: "Cloud Computing",
},
];

export const teamMembers = [
  {
    id: "1",
    name: "Ajay Rajput",
    title: "Founder & CEO",
    bio: "",
   
  },
  {
    id: "2",
    name: "Akash Raj",
    title: "President",
    bio: "",
  },
];

export const industries = [
  {
    id: "it-staffing",
    name: "IT Staffing & Recruitment",
    description:
      "Contract, Contract-to-Hire, Permanent Placement, RPO, and Managed Staffing Services for organizations across the United States.",
    icon: "👨‍💼",
  },
  {
    id: "it-consulting",
    name: "IT Consulting & Digital Transformation",
    description:
      "Technology consulting services that help businesses modernize operations, improve efficiency, and accelerate digital transformation initiatives.",
    icon: "💼",
  },
  {
    id: "software-cloud-ai",
    name: "Software, Cloud & AI Solutions",
    description:
      "Custom software development, cloud consulting, data engineering, artificial intelligence, cybersecurity, and ServiceNow consulting services.",
    icon: "☁️",
  },
  {
    id: "enterprise-services",
    name: "Enterprise & ERP Consulting",
    description:
      "ERP implementation, project management, system integration, application support, and technical support services for enterprise organizations.",
    icon: "🏢",
  },
];
export const locations = [
  {
    id: "1",
    name: "US Office",
    address: "5680 King Centre Dr, Ste #1, Kingstowne, VA 22315, USA",
    // phone: "+1 XXX XXX XXXX",
  },
  {
    id: "2",
    name: "India Office",
    address: "A-74, Second Floor, Sector-63, Noida, Uttar Pradesh, India - 201301",
    // phone: "+91 XXXXX XXXXX",
  },
];

export const milestones = [
  {
    value: "2,000+",
    title: "IT Professionals Placed",
    text: "Successfully connected skilled technology professionals with leading organizations across the United States.",
  },
  {
    value: "100+",
    title: "Enterprise Clients",
    text: "Trusted staffing partner for startups, mid-sized businesses, and Fortune 500 companies.",
  },
  {
    value: "98%",
    title: "Placement Success Rate",
    text: "Delivering high-quality candidates through an efficient recruitment and screening process.",
  },
  {
    value: "15+",
    title: "Years in US Staffing",
    text: "Providing reliable staffing and workforce solutions with deep industry expertise.",
  },
];
