import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BackgroundGrid from "../utils/BgGrid";

const projects = [
  {
    image: "/s1.png",
    title: "SQL Runner - Interactive SQL Query Execution Platform",
    description:
      "A modern, full-stack web application that allows users to write, execute, and visualize SQL queries in real-time with Firebase authentication, animated UI, query history, and comprehensive database management features.",
    link: "https://github.com/mouryagutha/SQL-Compiler.git",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLite",
      "Firebase",
      "TailwindCSS",
    ],
    live: "https://sql-compiler-y7zn.vercel.app",
  },
  {
    image: "/tf.png",
    title: "Todo Summary Assistant",
    description:
      "A full-stack application that helps users manage their todos and get AI-powered summaries sent to Slack. Features real-time updates using Supabase and OpenAI integration for intelligent todo summarization.",
    link: "https://github.com/mouryagutha/-Todo-Summary-Assistant.git",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
    ],
    live: "https://github.com/mouryagutha/-Todo-Summary-Assistant.git",
  },
  {
    image: "/3d.png",
    title: "Zeotap Doc - Google Sheets Clone",
    description:
      "A modern Google Sheets Clone with spreadsheet UI, drag functions, formula support (SUM, AVERAGE, COUNT, MAX, MIN), data quality functions, cell formatting, and Google Authentication via Firebase.",
    link: "https://github.com/mouryagutha/Googlesheet_clone.git",
    techStack: [
      "React",
      "javascript",
      "Firebase",
      "TailwindCSS",
    ],
    live: "https://googlesheet-clone-sigma.vercel.app",
  },
  {
    image: "/cone.png",
    title: "Disney+ Clone",
    description:
      "A full-stack Disney+ streaming service clone with user authentication, personalized movie recommendations, search functionality, movie details with cast and reviews, favorites list, and responsive design optimized for all devices.",
    link: "https://github.com/mouryagutha/Disney_clone.git",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "javascript",
    ],
    live: "https://disney-clone-peach.vercel.app",
  },

  {
    image: "/b.png",
    title: "Weather app",
    description:
      "A web application that displays real-time weather updates for any location, built with HTML, CSS, and JavaScript, featuring a modern, responsive design",
    link: "https://github.com/mouryagutha/weather-app",
    techStack: [
      "html5",
      "css3",
      "javascript",
      
    ],
    live: "https://weather-app-zeta-neon-31.vercel.app/",
  },
  {
    image: "https://dvalidate.netlify.app/favicon.ico",
    title: "Dvalidate",
    description:
      "Blockchain-powered certificate validation system ensuring secure issuance and verification of certificates.",
    link: "https://github.com/mouryagutha/Dvalidate",
    techStack: [
      "Blockchain",
      "React",
      "Next",
      "Node.js",
      "Solidity",
      "MongoDB",
      "TailwindCSS",
    ],
    live: "https://github.com/mouryagutha/Dvalidate",
  },
  

  {
    image: "/d.png",
    title: "DocX",
    description:
      "Local container management tool optimizing Dockerfile configurations with logging metrics using Winston logger.",
    link: "https://github.com/mouryagutha/Docker-project",
    techStack: ["Node.js", "Docker", "React", "TailwindCSS"],
    live: "https://github.com/mouryagutha/Docker-project",
  },
  {
    image: "/cal.png",
    title: "calculator using java",
    description:
      "A Java-based calculator application with a user-friendly Swing UI, supporting basic arithmetic operations.",
    link: "https://github.com/mouryagutha/Calculator-using-java.git",
    techStack: [
      "java",
      
      
    ],
    live: "https://github.com/mouryagutha/Calculator-using-java.git",
  },
  {
    image: "/java.png",
    title: "java_master",
    description:
      "Java Master: A comprehensive collection of Java implementations focused on mastering Data Structures and Algorithms through clean code and efficient problem-solving",
    link: "https://github.com/mouryagutha/java_master.git",
    techStack: [
      "java",
      
      
    ],
    live: "https://github.com/mouryagutha/java_master.git",
  },
  {
    image: "/dic.png",
    title: "Dictionary",
    description:
      "Developed a dynamic dictionary application using JavaScript, HTML, and CSS. The app features a simple, user-friendly UI and fetches word meanings in real-time via an external APIw",
    link: "https://github.com/mouryagutha/Dictionary-apk.git",
    techStack: [
      "html5",
      "css3",
      "javascript",
      
      
    ],
    live: "https://dictionary-apk.vercel.app/",
  },
];

const Project = () => {
  return (
    <>
      <BackgroundGrid />
      <div className="text-white w-full py-10 min-h-screen px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="-mt-8"
        >
          <h1
            className="text-3xl font-medium font-mono
         text-slate-300 border-white uppercase p-4"
          >
            My Awesome Projects
          </h1>
          <div>
            <p className="text-white/80 leading-7 tracking-wide max-w-3xl mt-4 font-light">
              Dive into some of the cool projects I&apos;ve been working on. Click
              the &quot;View Project&quot; button to explore them on GitHub.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, skewX: 50 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-10 font-light text-base"
        >
          <h1 className="text-slate-400 mt-8 border px-3 border-slate-700 py-1 text-sm rounded-full w-fit">
            Featured Projects
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
