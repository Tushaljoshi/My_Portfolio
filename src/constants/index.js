
import {
  /*logo,*/
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  NavRasa,
  EzyFix,
  SunTech,
  Travelo
} from '../assets'


// Import Tekisky separately
import navrasa_logo from "../assets/company/navrasa_logo.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MySql",
    icon: mysql,
  },

];

const experiences = [
  {
    title: "Web Developement Intern",
    company_name: "NavRasa IT Solutions",
    icon: navrasa_logo,
    iconBg: "#383E56",
    date: "May-2025 - Present",
    points: [
      "👨‍💻 Developed real-world web applications as part of a hybrid team at Navrasa IT Solutions, contributing to both frontend and backend tasks under tight deadlines.",

      "⚙️ Gained hands-on experience with modern web technologies including React.js, Tailwind CSS, REST APIs, and responsive design best practices.",
      
      "🤝 Collaborated cross-functionally with designers and backend developers to deliver user-friendly interfaces and performance-optimized components.",
      
      "🧠 Worked in a structured 3-month probation environment, receiving regular performance reviews and feedback that helped sharpen my technical and soft skills.",
      
      "📈 Demonstrated rapid learning and adaptability, leading to commendation from mentors and consideration for a full-time developer role post-internship."
      
      
    ],
  },
];

const testimonials = [
]
const projects = [
  {
    name: "NavRasa IT Solutions",
    description:
      "Developed a full-stack backend application using Node.js and Express.js to handle contact form submissions. Integrated Google Forms for data capture and implemented email notifications via Nodemailer. Built secure and configurable services using environment variables and RESTful APIs.",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "CSS", color: "white-text-gradient" },
      { name: "Javascript", color: "white-text-gradient" },
      { name: "Nodejs", color: "pink-text-gradient" },
      { name: "Expressjs", color: "pink-text-gradient" },
    ],
    image: NavRasa,
    source_code_link: "https://github.com/tushaljoshi/NavRasa",
    live_link: "https://navrasa-xi.vercel.app/",
  },
  {
    name: "EzyFix-Coupon Selling",
    description:
      "EzyFix is a responsive ReactJS-based web application that allows users to discover, purchase, and redeem coupons and deals across various categories such as Restaurants, Travel, Fashion, Fitness, etc. It includes user authentication, wallet integration, secure purchase, and coupon management features.",
    tags: [
      { name: "reactJS", color: "blue-text-gradient" },
      { name: "Tailwind", color: "blue-text-gradient" },
    ],
    image: EzyFix,
    source_code_link: "https://github.com/Tushaljoshi/EzyFix",
    live_link: "https://ezyfix.vercel.app/",
  },
  {
    name: "Travelo",
    description:
      "A sleek, responsive travel booking web application designed to help users explore destinations, plan trips, and book tours with ease. Built using HTML, CSS, JavaScript, Python, Flask, MySQL it features animated scrolling, destination highlights, and an intuitive interface—ideal for showcasing frontend creativity and user-focused design and Forntend and Backend both have sepearte git repositories",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "CSS", color: "white-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: Travelo,
    source_code_link: "https://github.com/Tushaljoshi/travel-frontend",
    live_link: "https://travel-frontend-peach.vercel.app/",
  },
  {
    name: "SunTech",
    description:
      "A sleek and responsive landing page designed for a solar energy solutions brand using React, JavaScript,NodeJS and EmailJS. The site features smooth scroll-based animations, interactive sections, and a responsive layout across all devices./n ",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "white-text-gradient" },
      { name: "Nodejs", color: "white-text-gradient" },
      { name: "Expreejs", color: "white-text-gradient" },


    ],
    image: SunTech,
    source_code_link: "https://github.com/Tushaljoshi/SunTech",
    live_link: "https://suntech-coon.onrender.com/", 
  },
];


export { services, technologies, experiences, testimonials, projects };
