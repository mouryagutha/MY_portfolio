/* eslint-disable @next/next/no-img-element */
// "use client";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import { useSpring, motion } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useEffect, useRef } from "react";
import { useRafLoop } from "react-use";
import {
  IoGitCommit,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql, SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const _ = {
  speed: 1,
  threshold: 0.014,
  wheelFactor: 1.25,
  dragFactor: 1.2,
};

const data = [
  {
    title: "JavaScript",
    tag: "Programming Language",
    icon: <IoLogoJavascript className="text-5xl" />,
  },
  {
    icon: <IoLogoReact className="text-5xl" />,
    title: "React Js",
    tag: "Frontend Library",
  },
  {
    title: "Node Js",
    tag: "Javascript Runtime",
    icon: <IoLogoNodejs className="text-5xl" />,
  },
  {
    icon: <DiMongodb className="text-5xl" />,
    title: "MongoDB",
    tag: "Database",
  },
  {
    icon: <SiPostman className="text-5xl" />,
    title: "PostMan",
    tag: "API Development Tool",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl" />,
    title: "Tailwind CSS",
    tag: "CSS Framework",
  },
  {
    icon: <SiPostgresql className="text-5xl" />,
    title: "PostgreSQL",
    tag: "Database",
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-5xl" />,
    tag: "Version Control System",
  },
];

const data3 = [
  {
    title: "JavaScript",
    tag: "Programming Language",
    icon: <IoLogoJavascript className="text-5xl" />,
  },
  {
    icon: <IoLogoReact className="text-5xl" />,
    title: "React Js",
    tag: "Frontend Library",
  },
  {
    title: "Node Js",
    tag: "Javascript Runtime",
    icon: <IoLogoNodejs className="text-5xl" />,
  },
  {
    icon: <DiMongodb className="text-5xl" />,
    title: "MongoDB",
    tag: "Database",
  },
  {
    icon: <SiPostman className="text-5xl" />,
    title: "PostMan",
    tag: "API Development Tool",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl" />,
    title: "Tailwind CSS",
    tag: "CSS Framework",
  },
  {
    icon: <SiPostgresql className="text-5xl" />,
    title: "PostgreSQL",
    tag: "Database",
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-5xl" />,
    tag: "Version Control System",
  },
];

const data2 = [
  {
    title: "JavaScript",
    tag: "Programming Language",
    icon: <IoLogoJavascript className="text-5xl" />,
  },
  {
    icon: <IoLogoReact className="text-5xl" />,
    title: "React Js",
    tag: "Frontend Library",
  },
  {
    title: "Node Js",
    tag: "Javascript Runtime",
    icon: <IoLogoNodejs className="text-5xl" />,
  },
  {
    icon: <DiMongodb className="text-5xl" />,
    title: "MongoDB",
    tag: "Database",
  },
  {
    icon: <SiPostman className="text-5xl" />,
    title: "PostMan",
    tag: "API Development Tool",
  },
  {
    icon: <SiExpress className="text-5xl" />,
    title: "Express Js",
    tag: "Node Js Framework",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl" />,
    title: "Tailwind CSS",
    tag: "CSS Framework",
  },
  {
    icon: <SiPostgresql className="text-5xl" />,
    title: "PostgreSQL",
    tag: "Database",
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-5xl" />,
    tag: "Version Control System",
  },
];

export default function Marquee() {
  const x = useRef(0);
  const x2 = useRef(0);
  const x3 = useRef(0);
  const x4 = useRef(0);

  const onWheel = (e) => {
    const normalized = normalizeWheel(e);
    x.current = normalized.pixelY * _.wheelFactor;
    x2.current = normalized.pixelY * _.wheelFactor;
    x3.current = normalized.pixelY * _.wheelFactor;
    x4.current = normalized.pixelY * _.wheelFactor;
  };

  return (
    <main
      className="flex flex-col  h-60 bg-black
      overflow-hidden
        max-w-screen  items-center text-center"
      onWheel={onWheel}
    >
      <div className="">
        <div className="flex gap-[40px] flex-col">
          <MyMarquee
            x={x}
            direction="left"
            speedDetails={{
              damping: 200,
              stiffness: 1000,
              mass: 1,
            }}
            cardData={data}
          />
          <MyMarquee
            x={x2}
            direction="right"
            speedDetails={{ damping: 200, stiffness: 400, mass: 1 }}
            cardData={data2}
          />
        </div>
      </div>
    </main>
  );
}

const MyMarquee = ({ x, direction, speedDetails, cardData }) => {
  var initialValue = _.speed;

  if (direction === "right") {
    initialValue *= -1;
  }

  const speed = useSpring(initialValue, speedDetails);

  const marquee = useRef(null);

  const slowDown = useRef(false);

  const onDragStart = () => {
    slowDown.current = true;
    marquee.current.classList.add("drag");
    speed.set(0);
  };

  const onDrag = (e, info) => {
    speed.set(_.dragFactor * -info.delta.x);
  };

  const onDragEnd = (e) => {
    slowDown.current = false;
    marquee.current.classList.remove("drag");
    x.current = _.speed;
  };

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < _.threshold) return; // to preserver a minimum speed

    x.current *= 0.66; // so we gradiuallly decrease the speed to a threshold other wise it will infinitley speed

    if (direction === "right") {
      speed.set((_.speed + x.current) * -1);
    } else {
      speed.set(_.speed + x.current);
    }
  };

  useRafLoop(loop, true);

  return (
    <>
      <motion.div
        className="marquee flex gap-4
         hover:cursor-grab "
        ref={marquee}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <MarqueeItem speed={speed}>
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </MarqueeItem>
        <MarqueeItem speed={speed}>
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </MarqueeItem>
        <MarqueeItem speed={speed}>
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </MarqueeItem>{" "}
        <MarqueeItem speed={speed}>
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </MarqueeItem>
      </motion.div>
    </>
  );
};

const MarqueeItem = ({ children, speed }) => {
  const item = useRef(null);
  const rect = useRef({});
  const x = useRef(0);

  const [width, height] = useWindowSize();

  const setX = () => {
    if (!item.current || !rect.current) return;

    var xPercentage = (x.current / rect.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;

    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    rect.current = item.current.getBoundingClientRect();
  }, [width, height]);

  const loop = (e) => {
    x.current -= speed.get();
    setX();
  };

  useRafLoop(loop, true);

  return (
    <div
      draggable={false}
      className="item shrink-0 flex gap-[30px] items-center
       text-white  whitespace-nowrap"
      ref={item}
    >
      {children}
    </div>
  );
};

const Card = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 100,
        x: -100,
        skewX: 20,
        skewY: 10,
      }}
      animate={
        inView ? { opacity: 1, scale: 1, y: 0, x: 0, skewX: 0, skewY: 0 } : {}
      }
      transition={{ duration: 0.5 }}
      className="flex pointer-events-none bg-white
      mx-auto  lg:flex-row flex-col w-full justify-center items-center
      space-y-6 md:space-x-6 md:space-y-0 lg:rounded-xl dark:bg-zinc-800/10
      lg:dark:[border:1px_solid_rgba(255,255,255,.1)]
      lg:dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium
       text-zinc-800 shadow-lg shadow-zinc-800/5 lg:ring-1 ring-zinc-900/5 lg:backdrop-blur
        dark:text-zinc-200 dark:ring-white/10 lg:w-fit
      rounded-xl p-2 cursor-pointer  shrink-0   gap-1"
    >
      <div className="max-h-[104px] rounded-xl relative max-w-[104px] overflow-clip">
        {item.icon && item.icon}
      </div>
      <div className="flex flex-col items-start mx-2">
        <span className="text-xl font-medium w-full whitespace-nowrap">
          {item.title}
        </span>
        <span className="text-sm text-gray-800 font-medium w-full whitespace-nowrap">
          {item?.tag}
        </span>
      </div>
    </motion.div>
  );
};
