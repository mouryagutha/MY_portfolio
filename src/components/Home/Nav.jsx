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
      <div className="flex items-center gap-3 group">
        <a href="/" className="hover:opacity-80 transition-all duration-300 relative">
          <img
            src="/Zoro.jpeg"
            className="rounded-full grayscale"
            width={35}
            height={35}
            alt="mourya"
          />
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping"></div>
        </a>
        
        {/* Animated guiding text */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300"
        >
          <span className="text-[10px] font-mono text-white/60 group-hover:text-blue-400/90 tracking-wider uppercase transition-colors duration-300">
            ← back to home
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-blue-400/70 text-xs"
          >
            ⚡
          </motion.span>
        </motion.a>
      </div>
      
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white backdrop-blur-md bg-white/10 p-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
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
    <motion.header className="sticky top-0 z-50 mb-6">
      <nav
        className={`py-2 md:text-sm backdrop-blur-xl bg-white/5 border-b border-white/10 ${
          state
            ? "absolute z-50 top-0 inset-x-0 shadow-2xl rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 mx-2 mt-2"
            : ""
        }`}
      >
        <div className="gap-x-10 rounded-2xl items-center w-full px-4 md:flex md:px-8 lg:px-16">
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
            className={`flex-1 text-white/90 items-center lg:mt-4 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="mx-auto flex lg:flex-row flex-col w-full justify-center items-center space-y-4 md:space-x-3 md:space-y-0 lg:rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl px-4 py-2 text-sm font-medium text-white lg:w-fit">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-base lg:text-sm text-white/80 hover:text-white flex backdrop-blur-sm hover:bg-white/10 px-3 py-1.5 rounded-full transition-all duration-300"
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
