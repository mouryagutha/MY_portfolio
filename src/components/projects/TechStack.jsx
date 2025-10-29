import { FaReact ,FaDocker,FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiHiveBlockchain,SiGooglegemini, SiRabbitmq, SiRedis ,SiWebrtc, SiSocketdotio, SiMongodb ,SiVite , SiSolidity , SiJsonwebtokens ,SiTailwindcss ,SiJavascript ,SiHtml5 ,SiCss3  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { LiaJava } from "react-icons/lia";


const techIcons = {
  "React": <FaReact size={24} />,
  "Node.js": <FaNodeJs size={24} />,
  "JWT": <SiJsonwebtokens size={24} />,
  "Blockchain": <SiHiveBlockchain size={24} />,
  "Solidity": <SiSolidity size={24} />,
  "MongoDB": <SiMongodb size={24} />,
  "TailwindCSS": <SiTailwindcss size={24} />,
  "Web3.js": <SiHiveBlockchain size={24} />,
  "metaMask": <SiHiveBlockchain size={24} />,
  "PostgreSQL": <BiLogoPostgresql size={24} />,
  "Vite": <SiVite size={24} />,
  "Socket.io": <SiSocketdotio size={24} />,
  "WebRTC": <SiWebrtc size={24} />,
  "Docker": <FaDocker size={24} />,
  "Git": <FaGitAlt size={24} />,
  "RabbitMQ": <SiRabbitmq size={24} />,
  "Next" : <RiNextjsFill size={24} />,
  "Gemini" : <SiGooglegemini size={24}/>,
  "Redis" : <SiRedis size={24} />,
  "javascript":<SiJavascript size={24}/>,
  "html5":<SiHtml5 size={24}/>,
  "css3":<SiCss3 size={24}/>,
  "java":<LiaJava size={24}/>,
  

  };

const TechStack = ({ techStack }) => {
  return (
    <div className="flex mx-2 space-x-4 mt-4">
      {techStack.map((tech, index) => (
        <div key={index} className="flex items-center">
          {techIcons[tech]}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
