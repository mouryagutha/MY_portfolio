import React from "react";
import Marquee from "./Marquee";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFramer, SiNextdotjs, SiVercel } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrGolang } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="h-full">
  <div className="mt-32">
    <div className="py-10 rounded-lg">
      <div className="mx-10 px-10 pb-10 font-light text-base">
        <button className="text-white border px-5 border-slate-700 py-1 rounded-full w-fit bg-transparent hover:bg-slate-700 transition duration-300">
          I work With
        </button>
      </div>
      <Marquee />
    </div>
  </div>
</div>

  );
};

export default Skills;
