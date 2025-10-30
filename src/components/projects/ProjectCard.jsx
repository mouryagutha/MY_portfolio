import { motion } from "framer-motion";
import TechStack from "./TechStack";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ScrollParallax } from "react-just-parallax";

const ProjectCard = ({ image, title, description, link, techStack , live }) => {
  return (
    <div
      className="overflow-hidden lg:p-8 p-6 w-full min-h-[500px] lg:min-h-[550px] cursor-pointer border
      transition-colors duration-300 ease-in-out border-slate-700/20 lg:border-slate-700/10
      hover:bg-gradient-to-tl from-blue-600/20 to-slate-800/10
      hover:border-white/10 rounded-xl shadow-lg flex flex-col justify-between"
    >
     <div>
      <div>
        <div className="lg:p-[10px] my-3 bg-slate-600/40 w-fit rounded-full">
          <img
            className="w-10 h-10 rounded-full object-cover border"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-2xl my-3 font-semibold text-slate-100 py-1 px-2">
            {title}
          </h3>
        </div>
        <div className="px-2 pb-3 text-wrap">
          <p className="text-gray-300 font-normal text-base">{description}</p>
        </div>
      </div>
      <div>
        <div className="border-t mt-6 py-3 border-white/10">
          <div className="mb-3">
            <a
              href={live}
              className="text-blue-400 hover:text-blue-300 font-semibold text-sm px-2 py-1 inline-flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo <MdArrowOutward className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 px-2">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              title="View on GitHub"
            >
              <FaGithub className="text-white text-xl" />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              View Source Code
            </a>
          </div>
        </div>
        <TechStack techStack={techStack} />
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
