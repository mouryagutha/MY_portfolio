import { FaReact ,FaDocker,FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiHiveBlockchain,SiGooglegemini, SiRabbitmq, SiRedis ,SiWebrtc, SiSocketdotio, SiMongodb ,SiVite , SiSolidity , SiJsonwebtokens ,SiTailwindcss ,SiJavascript ,SiHtml5 ,SiCss3, SiNextdotjs, SiTypescript, SiFastapi, SiSqlite, SiFirebase  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { LiaJava } from "react-icons/lia";


const techIcons = {
  "React": <FaReact size={28} />,
  "Node.js": <FaNodeJs size={28} />,
  "JWT": <SiJsonwebtokens size={28} />,
  "Blockchain": <SiHiveBlockchain size={28} />,
  "Solidity": <SiSolidity size={28} />,
  "MongoDB": <SiMongodb size={28} />,
  "TailwindCSS": <SiTailwindcss size={28} />,
  "Web3.js": <SiHiveBlockchain size={28} />,
  "metaMask": <SiHiveBlockchain size={28} />,
  "PostgreSQL": <BiLogoPostgresql size={28} />,
  "Vite": <SiVite size={28} />,
  "Socket.io": <SiSocketdotio size={28} />,
  "WebRTC": <SiWebrtc size={28} />,
  "Docker": <FaDocker size={28} />,
  "Git": <FaGitAlt size={28} />,
  "RabbitMQ": <SiRabbitmq size={28} />,
  "Next" : <RiNextjsFill size={28} />,
  "Next.js" : <SiNextdotjs size={28} />,
  "Gemini" : <SiGooglegemini size={28}/>,
  "Redis" : <SiRedis size={28} />,
  "javascript":<SiJavascript size={28}/>,
  "html5":<SiHtml5 size={28}/>,
  "css3":<SiCss3 size={28}/>,
  "java":<LiaJava size={28}/>,
  "TypeScript": <SiTypescript size={28} />,
  "FastAPI": <SiFastapi size={28} />,
  "Python": <FaPython size={28} />,
  "SQLite": <SiSqlite size={28} />,
  "Firebase": <SiFirebase size={28} />,
  };

const TechStack = ({ techStack }) => {
  return (
    <div className="flex flex-wrap mx-2 gap-4 mt-6">
      {techStack.map((tech, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center backdrop-blur-md bg-white/10 p-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group relative"
          title={tech}
        >
          <span className="text-white/80 group-hover:text-white transition-colors">
            {techIcons[tech]}
          </span>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
