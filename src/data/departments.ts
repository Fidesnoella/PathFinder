import { Computer, Code2, DatabaseZap, LucideIcon } from "lucide-react";

export interface Department {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  courses: { title: string; description: string; topics: string[] }[];
  careers: { title: string; description: string; salary: string }[];
  research: { title: string; description: string }[];
  testimonials: { studentName: string; quote: string; imageUrl: string, program: string }[];
}

export const departmentsData: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: Computer,
    description: "Explore the theoretical foundations of information and computation, and their application in computer systems.",
    longDescription: "The Computer Science department offers a comprehensive curriculum covering algorithms, data structures, artificial intelligence, and more. Students gain a deep understanding of computation and learn to develop innovative software solutions for real-world problems.",
    courses: [
      { 
        title: "Introduction to Programming", 
        description: "Learn the fundamentals of programming using Python, focusing on problem-solving, logic, and basic syntax.",
        topics: ["Variables & Data Types", "Control Flow", "Functions", "Basic Data Structures"]
      },
      { 
        title: "Data Structures & Algorithms", 
        description: "Master essential data structures and algorithms for efficient problem-solving and software development.",
        topics: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting & Searching Algorithms"]
      },
      { 
        title: "Artificial Intelligence", 
        description: "Explore the principles and applications of AI and machine learning, from theory to practical implementation.",
        topics: ["Search Algorithms", "Machine Learning Models", "Neural Networks", "Natural Language Processing"]
      },
    ],
    careers: [
        { title: "Software Engineer", description: "Design, develop, and maintain software applications for various platforms, from web to mobile.", salary: "Avg. Salary: $110,000" },
        { title: "AI/ML Engineer", description: "Build and deploy machine learning models and artificial intelligence systems to solve complex problems.", salary: "Avg. Salary: $130,000" },
        { title: "Cybersecurity Specialist", description: "Protect computer systems and networks from security threats and cyber attacks through analysis and defense.", salary: "Avg. Salary: $105,000" },
        { title: "Research Scientist", description: "Conduct research to advance the field of computer science in academic or industrial settings.", salary: "Avg. Salary: $125,000" }
    ],
    research: [
      { title: "Quantum Computing", description: "Investigating the potential of quantum mechanics to revolutionize computation and solve problems intractable for classical computers." },
      { title: "Natural Language Processing", description: "Developing models that can understand, interpret, and generate human language, powering chatbots, translation services, and more." },
    ],
    testimonials: [
      { studentName: "Jane Doe", quote: "The CS department prepared me for a fantastic career in tech. The faculty is top-notch and the curriculum is cutting-edge!", imageUrl: "https://placehold.co/100x100.png", program: "B.S. in Computer Science, 2023" },
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    icon: Code2,
    description: "Learn the principles of designing, developing, testing, and maintaining large-scale software systems.",
    longDescription: "Our Software Engineering program focuses on a systematic, disciplined approach to software development. You will learn about software architecture, agile methodologies, and quality assurance to build robust and scalable applications.",
    courses: [
        { 
          title: "Software Design Patterns", 
          description: "Study reusable solutions to commonly occurring problems within a given context in software design.",
          topics: ["Creational Patterns", "Structural Patterns", "Behavioral Patterns", "Architectural Patterns"]
        },
        { 
          title: "Agile Development", 
          description: "Practice iterative development, where requirements and solutions evolve through collaboration and rapid cycles.",
          topics: ["Scrum & Kanban", "User Stories", "Sprint Planning", "Retrospectives"]
        },
        { 
          title: "DevOps & CI/CD", 
          description: "Learn the practices of continuous integration and continuous delivery for faster, more reliable development cycles.",
          topics: ["Version Control (Git)", "Automated Testing", "Containerization (Docker)", "Deployment Pipelines"]
        },
    ],
    careers: [
        { title: "Full Stack Developer", description: "Work on both the front-end (user interface) and back-end (server logic) of web applications.", salary: "Avg. Salary: $100,000" },
        { title: "DevOps Engineer", description: "Bridge the gap between software development and IT operations to automate and streamline processes.", salary: "Avg. Salary: $115,000" },
        { title: "Mobile App Developer", description: "Create applications for smartphones and tablets on platforms like iOS and Android.", salary: "Avg. Salary: $108,000" },
        { title: "Software Architect", description: "Make high-level design choices and dictate technical standards for software projects.", salary: "Avg. Salary: $140,000" }
    ],
    research: [
        { title: "Microservices Architecture", description: "Exploring best practices for building and deploying scalable, independently deployable microservices to create resilient systems." },
        { title: "Automated Software Testing", description: "Developing AI-powered tools for automated testing and bug detection, improving software quality and reliability." },
    ],
    testimonials: [
        { studentName: "John Smith", quote: "The hands-on projects were incredible. I built a full-stack application that landed me my first job before I even graduated.", imageUrl: "https://placehold.co/100x100.png", program: "B.S. in Software Engineering, 2024" },
    ],
  },
  {
    slug: "data-science",
    name: "Data Science",
    icon: DatabaseZap,
    description: "Extract knowledge and insights from structured and unstructured data using scientific methods and algorithms.",
    longDescription: "The Data Science department combines statistics, computer science, and domain expertise. Students learn to collect, clean, analyze, and visualize data to make data-driven decisions and predictions.",
    courses: [
        { 
          title: "Introduction to Data Science", 
          description: "Get an overview of the data science pipeline, from data acquisition and cleaning to analysis and communication of results.",
          topics: ["Data Wrangling", "Exploratory Data Analysis", "Statistical Inference", "Data Ethics"]
        },
        { 
          title: "Machine Learning", 
          description: "Implement and analyze machine learning algorithms for classification, regression, clustering, and more.",
          topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]
        },
        { 
          title: "Big Data Analytics", 
          description: "Work with large-scale datasets using distributed computing tools like Hadoop and Spark.",
          topics: ["Hadoop Ecosystem", "Spark RDDs & DataFrames", "Stream Processing", "Cloud Data Platforms"]
        },
    ],
    careers: [
        { title: "Data Scientist", description: "Use analytical and programming skills to collect, analyze, and interpret large data sets to drive business decisions.", salary: "Avg. Salary: $120,000" },
        { title: "Data Analyst", description: "Translate data into valuable business insights through reports, dashboards, and visualizations.", salary: "Avg. Salary: $85,000" },
        { title: "Machine Learning Engineer", description: "Design, build, and deploy production-ready machine learning systems at scale.", salary: "Avg. Salary: $135,000" },
        { title: "Data Engineer", description: "Develop and maintain robust and scalable data pipelines and architectures.", salary: "Avg. Salary: $118,000" }
    ],
    research: [
        { title: "Deep Learning for Medical Imaging", description: "Applying convolutional neural networks to accurately diagnose diseases from medical scans like X-rays and MRIs." },
        { title: "Ethical AI and Algorithmic Fairness", description: "Studying the societal impact of AI and developing methods to ensure algorithms are fair, transparent, and accountable." },
    ],
    testimonials: [
        { studentName: "Emily White", quote: "I love how this field combines statistics, coding, and critical thinking. The capstone project was a highlight of my college experience.", imageUrl: "https://placehold.co/100x100.png", program: "M.S. in Data Science, 2023" },
    ],
  },
];
