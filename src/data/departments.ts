import { Computer, Code2, DatabaseZap, LucideIcon } from "lucide-react";

export interface Department {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  courses: { title: string; description: string }[];
  careers: { title: string; description: string }[];
  research: { title: string; description: string }[];
  testimonials: { studentName: string; quote: string; imageUrl: string }[];
}

export const departmentsData: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: Computer,
    description: "Explore the theoretical foundations of information and computation, and their application in computer systems.",
    longDescription: "The Computer Science department offers a comprehensive curriculum covering algorithms, data structures, artificial intelligence, and more. Students gain a deep understanding of computation and learn to develop innovative software solutions for real-world problems.",
    courses: [
      { title: "Introduction to Programming", description: "Learn the fundamentals of programming using Python." },
      { title: "Data Structures & Algorithms", description: "Master essential data structures and algorithms for efficient problem-solving." },
      { title: "Artificial Intelligence", description: "Explore the principles and applications of AI and machine learning." },
      { title: "Operating Systems", description: "Understand the core concepts of operating system design and implementation." },
    ],
    careers: [
        { title: "Software Engineer", description: "Design, develop, and maintain software applications for various platforms." },
        { title: "Systems Analyst", description: "Analyze and design information systems to solve business problems." },
        { title: "AI/ML Engineer", description: "Build and deploy machine learning models and artificial intelligence systems." },
        { title: "Cybersecurity Specialist", description: "Protect computer systems and networks from security threats and cyber attacks." },
        { title: "Research Scientist", description: "Conduct research to advance the field of computer science in academic or industrial settings." }
    ],
    research: [
      { title: "Quantum Computing", description: "Investigating the potential of quantum mechanics for computation." },
      { title: "Natural Language Processing", description: "Developing models that can understand and generate human language." },
    ],
    testimonials: [
      { studentName: "Jane Doe", quote: "The CS department prepared me for a fantastic career in tech. The faculty is top-notch!", imageUrl: "https://placehold.co/100x100.png" },
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    icon: Code2,
    description: "Learn the principles of designing, developing, testing, and maintaining large-scale software systems.",
    longDescription: "Our Software Engineering program focuses on a systematic, disciplined approach to software development. You will learn about software architecture, agile methodologies, and quality assurance to build robust and scalable applications.",
    courses: [
        { title: "Software Design Patterns", description: "Study reusable solutions to commonly occurring problems within a given context in software design." },
        { title: "Agile Development", description: "Practice iterative development, where requirements and solutions evolve through collaboration." },
        { title: "DevOps & CI/CD", description: "Learn the practices of continuous integration and continuous delivery for faster development cycles." },
        { title: "Mobile App Development", description: "Design and build applications for iOS and Android platforms." },
    ],
    careers: [
        { title: "Full Stack Developer", description: "Work on both the front-end and back-end of web applications." },
        { title: "DevOps Engineer", description: "Bridge the gap between software development and IT operations." },
        { title: "Mobile App Developer", description: "Create applications for smartphones and tablets on platforms like iOS and Android." },
        { title: "Software Architect", description: "Make high-level design choices and dictate technical standards." },
        { title: "Quality Assurance Engineer", description: "Ensure software quality through manual and automated testing." }
    ],
    research: [
        { title: "Microservices Architecture", description: "Exploring best practices for building and deploying scalable microservices." },
        { title: "Automated Software Testing", description: "Developing AI-powered tools for automated testing and bug detection." },
    ],
    testimonials: [
        { studentName: "John Smith", quote: "The hands-on projects were incredible. I felt ready for the job market from day one.", imageUrl: "https://placehold.co/100x100.png" },
    ],
  },
  {
    slug: "data-science",
    name: "Data Science",
    icon: DatabaseZap,
    description: "Extract knowledge and insights from structured and unstructured data using scientific methods and algorithms.",
    longDescription: "The Data Science department combines statistics, computer science, and domain expertise. Students learn to collect, clean, analyze, and visualize data to make data-driven decisions and predictions.",
    courses: [
        { title: "Introduction to Data Science", description: "Get an overview of the data science pipeline, from data acquisition to communication of results." },
        { title: "Machine Learning", description: "Implement and analyze machine learning algorithms for classification, regression, and clustering." },
        { title: "Big Data Analytics", description: "Work with large-scale datasets using tools like Hadoop and Spark." },
        { title: "Data Visualization", description: "Learn to create effective and insightful visualizations to communicate data stories." },
    ],
    careers: [
        { title: "Data Scientist", description: "Use analytical, statistical, and programming skills to collect, analyze, and interpret large data sets." },
        { title: "Data Analyst", description: "Translate data into valuable business insights through reports and visualizations." },
        { title: "Machine Learning Engineer", description: "Design and build production-ready machine learning systems." },
        { title: "Business Intelligence Analyst", description: "Analyze data to help organizations make better business decisions." },
        { title: "Data Engineer", description: "Develop, construct, test, and maintain architectures, such as databases and large-scale processing systems." }
    ],
    research: [
        { title: "Deep Learning for Medical Imaging", description: "Applying neural networks to diagnose diseases from medical scans." },
        { title: "Ethical AI and Algorithmic Fairness", description: "Studying the societal impact of AI and developing methods to mitigate bias." },
    ],
    testimonials: [
        { studentName: "Emily White", quote: "I love how this field combines statistics and coding. The capstone project was a highlight of my college experience.", imageUrl: "https://placehold.co/100x100.png" },
    ],
  },
];
