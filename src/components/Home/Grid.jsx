import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50">
      <h1 className="text-center text-2xl font-bold -mt-10 py-20">
        Contact Me
      </h1>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        {/* <AboutBlock /> */}
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700  p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12  relative row-span-2 md:col-span-6 select-none bg-black overflow-hidden ">
    <img
      className=" absolute z-[1]  top-20  skew-x-12 -rotate-12 w-full h-full object-cover  select-none opacity-40 blur-3xl  scale-125 "
      src="/texture.png"
    />
    <div className=" select-none z-[3] backdrop-blur-2xl  ">
      <img
        src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hey there! 👋 I'm mourya kumar,
        <span className="text-zinc-400">
          <br />a developer who loves turning coffee into code.
        </span>
      </h1>
      <a
        href="mailto:pavan.patchikarla@yahoo.com"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Drop me a line <FiArrowRight />
      </a>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6  relative overflow-hidden group cursor-pointer  opacity-5 backdrop-blur-3xl md:col-span-3"
    >
   
        <a
          href="https://www.linkedin.com/in/mourya-kumar/"
          target="_blank"
          className="grid h-full z-[50] place-content-center text-3xl text-blue-500"
        >
          <BsLinkedin />
        </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-500/10 md:col-span-3"
    >
      
      <a
        href="https://github.com/mouryagutha"
        target="_blank"
        className="grid h-full place-content-center text-3xl  text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1, 
      }}
      className="col-span-6 bg-gray-500/10 md:col-span-3"
    >
      <a
        href="mailto:kmouryap@gmail.com"
        className="grid h-full place-content-center text-3xl text-orange-500"
      >
        <MdOutlineAlternateEmail />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://x.com/mouryakuma81062"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaXTwitter />
      </a>
    </Block>
  </>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        9-tail User
        <a
          target="_blank"
          href="https://www.github.com/mouryagutha"
          className="text-red-300 hover:underline"
        >
          @mouryakumar
        </a>
      </p>
    </footer>
  );
};
