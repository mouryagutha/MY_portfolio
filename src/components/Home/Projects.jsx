import React from "react";
import ProjectCards from "./ProjectCards";
import { ScrollParallax } from "react-just-parallax";

const Projects = () => {
  return (
    <div className="text-white  mx-auto py-20">
      <div className="lg:mx-20">
        <div className="mt-56 w-[80%] mx-auto   pb-10 font-light text-base">
          <h1 className="text-white border px-5 border-slate-700 py-1 rounded-full w-fit">
            Projects
          </h1>
        </div>
        <div className="w-full">
          <ScrollParallax
          >
            <ProjectCards />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Projects;
