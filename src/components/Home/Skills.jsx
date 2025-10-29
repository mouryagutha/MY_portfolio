import Marquee from "./Marquee";

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
