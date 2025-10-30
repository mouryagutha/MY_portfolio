import ProjectCards from "./ProjectCards";
import { ScrollParallax } from "react-just-parallax";

const Projects = () => {
  return (
    <div className="text-white w-full py-20">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="mt-56 pb-10 font-light text-base">
          <h1 className="text-white border px-5 border-slate-700 py-1 rounded-full w-fit">
            Projects
          </h1>
        </div>
        <div className="w-full">
          <ScrollParallax>
            <ProjectCards />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Projects;
