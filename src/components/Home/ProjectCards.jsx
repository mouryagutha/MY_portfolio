import { motion } from "framer-motion";
import { MdOutlineExpandMore } from "react-icons/md";

const ProjectCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="overflow-hidden p-3 cursor-pointer border
       transition-colors duration-300 ease-in-out border-transparent
       hover:bg-gradient-to-b from-slate-400/20 to-slate-40
        hover:border-white/10 rounded-xl"
      whileTap={{
        scale: 0.9,
        rotateZ: -1,
        boxShadow: "0 0 0 0",
      }}
    >
      <div className="px-3">
        <div className="lg:p-[5px] p-1 my-3 bg-slate-400/40 w-fit rounded-full">
          <img
            className="w-8 h-8 rounded-full object-cover border"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="lg:text-xl text-lg my-3 font-light text-slate-100 py-1 px-2">
            {title}
          </h3>
        </div>
        <div className="px-2 pb-3 max-w-[30rem]">
          <p className="text-gray-500 font-normal text-base">{description}</p>
        </div>
        <div className="border-t border-white/10">
          <div className="flex justify-around mt-2">
            <a
              href="#"
              className="text-stone-400/50 font-normal text-sm px-2 py-1"
            >
              Details
            </a>
            <a
              href="#"
              className="text-stone-400/50 font-normal text-sm px-2 py-1"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = () => {
  const projects = [
    {
      image: "/s1.png",
      title: "SQL Runner",
      description:
        "Interactive SQL Query Execution Platform with Firebase authentication, real-time query execution, and AI-powered features.",
    },
    {
      image: "/tf.png",
      title: "Todo Summary Assistant",
      description:
        "AI-powered todo management with Slack integration, real-time updates using Supabase and OpenAI for intelligent summarization.",
    },
    {
      image: "/3d.png",
      title: "Zeotap Doc - Google Sheets Clone",
      description:
        "Modern spreadsheet application with formula support, drag functions, cell formatting, and Google Authentication.",
    },
    {
      image: "/cone.png",
      title: "Disney+ Clone",
      description:
        "Full-stack streaming service clone with user authentication, personalized recommendations, and responsive design.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-3 lg:gap-8 max-w-screen-lg mx-auto px-4">
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-3 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center text-center">
        <a href="/projects"
        className="flex items-center text-white">
          <MdOutlineExpandMore className="w-6 h-6 animate-bounce" />
          <span className="ml-1">View More</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
