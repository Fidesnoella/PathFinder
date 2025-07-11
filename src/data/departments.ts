import { Computer, Code2, DatabaseZap, LucideIcon } from "lucide-react";

export interface Department {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  courses: { title: string; description: string }[];
  careers: string[];
  faculty: { name: string; title: string; imageUrl: string }[];
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
    careers: ["Software Engineer", "Systems Analyst", "AI/ML Engineer", "Cybersecurity Specialist", "Research Scientist"],
    faculty: [
      { name: "Dr. Alan Turing", title: "Professor & Chair", imageUrl: "https://placehold.co/100x100.png" },
      { name: "Dr. Ada Lovelace", title: "Associate Professor", imageUrl: "https://placehold.co/100x100.png" },
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
    careers: ["Full Stack Developer", "DevOps Engineer", "Mobile App Developer", "Software Architect", "Quality Assurance Engineer"],
    faculty: [
        { name: "Dr. Grace Hopper", title: "Professor", imageUrl: "https://placehold.co/100x100.png" },
        { name: "Dr. Linus Torvalds", title: "Assistant Professor", imageUrl: "https://placehold.co/100x100.png" },
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
    careers: ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst", "Data Engineer"],
    faculty: [
        { name: "Dr. John Tukey", title: "Distinguished Professor", imageUrl: "https://placehold.co/100x100.png" },
        { name: "Dr. Hadley Wickham", title: "Professor of Practice", imageUrl: "https://placehold.co/100x100.png" },
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
