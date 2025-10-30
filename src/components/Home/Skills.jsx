import Marquee from "./Marquee";

const Skills = () => {
  return (
    <div className="h-full w-full">
      <div className="mt-32">
        <div className="py-10">
          <div className="px-4 md:px-8 lg:px-16 pb-10 font-light text-base">
            <button className="text-white border px-5 border-slate-700 py-1 rounded-full w-fit bg-transparent hover:bg-slate-700 transition duration-300">
              I work With
            </button>
          </div>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Skills;
