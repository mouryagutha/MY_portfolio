import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BackgroundGrid from "../utils/BgGrid";

const projects = [
  

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
      <div className="text-white lg:mx-14 py-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="-mt-8"
        >
          <h1
            className="text-3xl font-medium font-mono mx-6
         text-slate-300 border-white uppercase p-4"
          >
            My Awesome Projects
          </h1>
          <div>
            <p className="text-white/80 leading-7 tracking-wide w-[60%] mx-10 mt-4 font-light">
              Dive into some of the cool projects I've been working on. Click
              the "View Project" button to explore them on GitHub.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, skewX: 50 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-10 pb-10 font-light text-base"
        >
          <h1 className="text-slate-400 mt-8 border px-3 border-slate-700 py-1 text-sm rounded-full w-fit">
            Featured Projects
          </h1>
        </motion.div>
        <div className="mx-10  grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
