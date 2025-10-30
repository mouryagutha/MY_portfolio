import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";
import { ScrollParallax } from "react-just-parallax";
import UserGreeting from "../../firebase/UserGreet";

const Hero = () => {
  return (
    <>
    <div className="relative lg:w-[88%] lg:mx-auto lg:mt-1 items-center justify-center min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 p-28 lg:p-1 flex flex-col justify-center text-white px-4 lg:px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* User Greeting Component */}




        {/* Text Content - Glassmorphism Card */}
        <div className="p-10 lg:p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          <ScrollParallax speed={3}>
           <div className="flex gap-4 justify-between w-full items-center">
           <div className="flex-1">
           <motion.h1
              className="text-3xl md:text-6xl mb-2  font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              mourya kumar
            </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src="/mourya.png"
                alt="Mourya Kumar"
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/20 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
           </div>
            <motion.p
              className="text-base md:text-lg pb-1 lg:pb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hello World, mourya kumar
            </motion.p>
            <motion.p
              className="text-sm md:text-base pb-1 lg:pb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Software engineer, full-stack developer and a tech enthusiast.
            </motion.p>
            <motion.p
              className="text-sm md:text-base pb-1 lg:pb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              >
              I enjoy building web apps and solving complex problems. My focus is React.js, Tailwind CSS, Node.js, and Java. <br />
              Active hackathon participant with experience in competitive programming and building innovative solutions under tight deadlines.
            </motion.p>

          </ScrollParallax>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-8 mt-4 lg:mt-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-4 lg:mb-0">
            <motion.button
              className="backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-95
              px-6 py-3 rounded-full text-base font-light shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Contact Me
            </motion.button>

            {/* Cybersecurity Portfolio Button */}
            <motion.a
              href="https://cypher-portfolio-topaz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden backdrop-blur-md bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 
              border-2 border-green-400/50 hover:border-green-300/80 transition-all duration-300 hover:scale-105
              px-6 py-3 rounded-full text-base font-medium shadow-xl hover:shadow-green-500/50 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-400/30 to-green-600/0 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              {/* Matrix-style scanning line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-300/20 to-transparent 
              translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-500"></div>
              
              <HiShieldCheck className="text-xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide">Cybersecurity Portfolio</span>
              <MdSecurity className="text-xl relative z-10 group-hover:animate-pulse" />
            </motion.a>
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <a
              href="https://github.com/mouryagutha"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/10 p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-95 transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mourya-kumar/-"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/10 p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-95 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://x.com/mouryakuma81062"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-white/10 p-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-95 transition-all duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </motion.div>

    </div>
    <div className="">
              <UserGreeting />
            </div>
    </>
  );
};

export default Hero;
