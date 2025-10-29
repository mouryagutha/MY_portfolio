import { motion } from "framer-motion";
import TechStack from "./TechStack";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ScrollParallax } from "react-just-parallax";

const ProjectCard = ({ image, title, description, link, techStack , live }) => {
  return (
    <motion.div
      className="overflow-hidden lg:p-6 p-5 w-full lg:h-96 cursor-pointer border
      transition-colors duration-300 ease-in-out border-slate-700/20 lg:border-slate-700/10
      hover:bg-gradient-to-tl from-blue-600/20 to-slate-800/10
      hover:border-white/10 rounded-xl shadow-lg flex flex-col justify-between"
      whileTap={{
        scale: 0.95,
        rotate: -2,
        boxShadow: "0 0 0 0",
      }}
    >
     <ScrollParallax >
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
        <div className="flex gap-2 border-t mt-6 py-2 border-white/10  justify-between w-[100%]">
          <div className="">
            <a
              href={live}
              className="text-blue-400 font-semibold text-sm px-2 py-1 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title} <MdArrowOutward className="inline-block w-5 h-5" />
            </a>
          </div>
          <div>
            <a href={link}>
              <FaGithub className="text-white text-2xl" />
            </a>
          </div>
        </div>
        <TechStack techStack={techStack} />
      </div>
      </ScrollParallax>
    </motion.div>
  );
};

export default ProjectCard;
