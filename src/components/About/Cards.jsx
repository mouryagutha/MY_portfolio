import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdArrowOutward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Cards = () => {
  const cards = [
    {
      title: "Twitter",
      link: "https://x.com/mouryakuma81062",
      icon: <FaXTwitter />,
    },
    {
      title: "GitHub",
      link: "https://github.com/mouryagutha",
      icon: <SiGithub />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mourya-kumar/",
      icon: <BsLinkedin />,
    },
    {
      title: "Email",
      link: "mailto:kmouryap@gmail.com",
      icon: <MdOutlineAlternateEmail />,
    },
  ];

  return (
    <>
      <motion.div
      initial={{ opacity: 0 , y: 100 , skewX: 50}}
      animate={{ opacity: 1 , y: 0 , skewX: 0}}
      transition={{ duration: 0.5 , delay: 1.2}}

      className="grid grid-cols-1  py-5 md:grid-cols-2 gap-4 w-[100%] justify-center">
        {cards.map((card, index) => (
        <a
          href={card.link}
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <motion.div
            key={index}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-lg px-8 border cursor-pointer border-white/10
            hover:border-white/40 group
             flex items-center justify-center gap-5"
            style={{ minWidth: "200px" }}
          >
            <div className="flex items-center group-hover:text-blue-500
            transition-all duration-300 ease-in-out
               gap-2">
              {card.icon}
                {card.title}
            </div>
            <div className="group-hover:text-blue-500 group-hover:text-lg ">
              <MdArrowOutward className=" " />
            </div>
          </motion.div>
              </a>
        ))}
      </motion.div>

    </>
  );
};

export default Cards;