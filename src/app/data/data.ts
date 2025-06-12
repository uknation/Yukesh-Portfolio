// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
import { FiHome, FiMail } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaPhp,
  FaGit,
  FaBootstrap,
  FaLinkedinIn
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbUserSquare } from "react-icons/tb";
import {
  SiDjango,
  SiMongodb,
  SiExpress,
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiSqlite,
  SiNextdotjs,
} from "react-icons/si";

import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
// List your technical skills below
export const skills = [
 
{ name: "HTML", icon: FaHtml5, color: "#E34F26" },
{ name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
{ name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
{ name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
{ name: "ReactJS", icon: FaReact, color: "#61DAFB" },
{ name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
{ name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
{ name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
{ name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
{ name: "Django", icon: SiDjango, color: "#092E20" },
{ name: "PHP", icon: FaPhp, color: "#8892BF" },
{ name: "Python", icon: FaPython, color: "#3776AB" },
{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
{ name: "MySQL", icon: SiMysql, color: "#4479A1" },
{ name: "SQLite", icon: SiSqlite, color: "#003B57" },
{ name: "SQL", icon: FaDatabase, color: "#003B57" },
{ name: "Git", icon: FaGit, color: "#F05032" },
];

type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/yukesh23", // Replace "#" with your LinkedIn profile URL.
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/uknation", // Replace "#" with your Github profile URL.
    size: "18px",
  },
];

// Add your projects here with their descriptions, features, and tech stack.
export const projects = [
  {
    name: "Yummigo Food Delivery App",
    description: "Yummigo is a responsive MERN-based food delivery app with Stripe payments, providing smooth access for customers, admins, and delivery staff.",
    points: [
      "Multi-user roles for orders and management.",
      "Secure payments with Stripe.",
      "Real-time order tracking and updates.",
    ],
    techStack: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      
    ],
    liveLink: "https://yummigo-food-ordering-app-frontend.onrender.com",
    githubLink: "https://github.com/uknation/Yummigo-Food-Ordering-App",
    image: "/img/projectone.png",
  },
  {
    name: "Shopora E-Commerce Website",
    description: "Shopora is a MERN e-commerce app with product browsing, secure payments, and admin management.",
    points: [
      "Browse and filter products.",
      "Secure checkout with Stripe and Razorpay.",
      "Admin panel for managing products and orders.",
    ],
    techStack: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
    ],
    liveLink: "https://shopora-e-commerce-website-frontend.onrender.com",
    githubLink: "https://github.com/uknation/Shopora-E-Commerce-Website",
    image: "/img/projecttwo.png", // Update with the actual project image
  },
  {
    name: "Banking System",
    description: "A Django-based web app for managing bank accounts with secure login and fund transfers.",
    points: [
      "User registration, login, and balance transfers.",
      "View account balances and transaction history.",
      "Admin dashboard for account management.",
    ],
    techStack: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
    liveLink: "https://online-banking-system-7ksn.onrender.com/",
    githubLink: "https://github.com/uknation/Online-Banking-System",
    image: "/img/projectthree.png", // Update with the actual project image
  },
  {
    name: "AI Blog App",
    description: "AI Blog App is a full-stack, responsive blogging platform powered by AI for content generation and summarization.",
    points: [
      "AI-powered content generation and blog summaries.",
      "User authentication and personalized dashboard.",
      "Responsive design for all device types.",
    ],
    techStack: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" }
    ],
    liveLink: "https://ai-blog-app-ip65.onrender.com",
    githubLink: "https://github.com/uknation/AI-Blog-App",
    image: "/img/projectfour.png", // Update with the actual project image
  },
];

// Update your personal information
export const personalInfo = {
  pfp: "/img/img.png", // Update with your profile picture path
  alt: "Yukesh Choudhary Profile Pic",
  summary:
    "I'm a passionate Full-Stack Developer with hands-on experience in web development and data management. I enjoy building responsive applications, solving problems, and continuously learning new technologies.",
  location: "Chhattisgarh,  India",
};

// Update your education details

export const education = [
  {
    college: "Shri Shankaracharya Technical Campus",
    course: "Master of Computer Applications (MCA)",
    cgpa: "",
    duration: "2025 - Present",
  },
  {
    college: "M.J. College",
    course: "Bachelor of Computer Applications (BCA)",
    cgpa: "7.35",
    duration: "2021 - 2024",
  }
];

// Update your work experience

export const experience = [
  {
    companyName: "CodTech IT Solutions PVT. LTD.",
    duration: "January 2025 - April 2025",
    title: "Full Stack Web Development Intern",
    location: "Hyderabad, Telangana",
    points: [
      "Worked on full stack web applications using React.js, Node.js, and Django.",
      "Implemented real-time features with WebSocket and collaborative tools.",
      "Used technologies: HTML, CSS, JavaScript, REST API, Chrome APIs, MongoDB.",
    ],
  },
  {
    companyName: "Bharat Engineering Work",
    duration: "February 2022 - March 2024",
    title: "Data Management & Office Administrator",
    location: "Nagpur, Maharashtra",
    points: [
      "Maintained and supported IT infrastructure and systems.",
      "Handled software, network, and hardware troubleshooting tasks.",
      "Used tools and platforms: Windows OS, Microsoft Office, Network Admin Tools.",
    ],
  },
];
