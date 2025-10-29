import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cv from "/mourya kumar G.pdf";

const Nav = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Articles", path: "/articles" },
    { title: "Cv Download", path: cv }, // Update the path to the CV
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between md:block">
      <a href="/">
        <img
          src="/Zoro.jpeg"
          className="rounded-full grayscale"
          width={45}
          height={45}
          alt="mourya"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <motion.header className="sticky top-0 z-50 mb-10">
      <nav
        className={`pb-5 md:text-sm ${
          state
            ? "absolute z-50 top-0 inset-x-0 shadow-lg rounded-xl border mx-2 mt-2"
            : ""
        }`}
      >
        <div className="gap-x-14 rounded-2xl items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <Brand />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              type: "spring",
              stiffness: 30,
            }}
            className={`flex-1 text-white/90 items-center lg:mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="mx-auto flex lg:flex-row flex-col w-full justify-center items-center space-y-6 md:space-x-6 md:space-y-0 lg:rounded-full dark:bg-zinc-800/10 lg:dark:[border:1px_solid_rgba(255,255,255,.1)] lg:dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]
            px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg
             shadow-zinc-800/5 lg:ring-1 ring-zinc-900/5 lg:backdrop-blur-2xl
              dark:text-zinc-200 dark:ring-white/10 lg:w-fit ">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-lg lg:text-sm text-slate-300 hover:text-white flex"
                >
                  {item.title === "Cv Download" ? (
                    <a href={item.path} className="block" download>
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Nav;
