import { motion } from "framer-motion";
import Cards from "./Cards";
import { ScrollParallax } from 'react-just-parallax';

const About = () => {
  return (
    <>
      <div className="text-white lg:mx-14 h-screen">
        <motion.div
          initial={{ opacity: 0, skewX: 50 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:mx-10 mx-4 pb-6 lg:pb-10 font-light text-base"
        >
          <h1 className="text-slate-400 border px-1 lg:px-3 border-slate-700
           py-1 text-sm rounded-full w-fit">
            ABOUT
          </h1>
        </motion.div>

        <div className="lg:mx-10 mx-5 mt-3 flex  flex-col md:flex-row  gap-5 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="md:flex-1 lg:w-8/12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="-mt-8"
            >
              <h1
                className="text-3xl font-medium
           text-slate-300 border-white/30 uppercase  p-4  border-b "
              >
                More about me...
              </h1>
            </motion.div>
            <div className="text-white/80 leading-7 tracking-wide  mt-4 font-light">
              <p className=" py-2">
                I am a full-stack Developer with a passion for web development.
                I have experience in building web applications using JavaScript,
                Reactjs  and MongoDB, as well as  git. As
                a self-taught developer, I am always eager to learn new
                technologies and improve my skills. I thrive on solving complex
                problems and am constantly seeking new challenges.
              </p>
              <p className="  py-2">
                I am currently pursuing a Bachelor of Technology in Computer
                Science and Engineering at Lovely Professional University.
                Originally from madanapalle, I have a deep love for anything
                related to computers, especially web development.
              </p>
              <p className="  py-2">
                My journey into the world of coding started with a fascination
                for how web applications work. This curiosity led me to explore
                various technologies and ultimately fall in love with full-stack
                development. Currently, I am learning Go to further expand my
                backend development skills.
              </p>
              <p className="  py-2">
                I love computers and web development more than anything, except
                for my passion for fiction, whether it's movies or novels. Anime
                holds a special place in my heart, with favorites like Mangekyo
                Sharingan, Bankai, and Aizen. Yokoso watashino soul society
                encapsulates my enthusiasm for creating innovative solutions.
              </p>
              <p className="  py-2">
                I believe in having fun and enjoying movies, while maintaining a
                rational outlook on life. I am currently looking for
                opportunities to work as a Full Stack Developer where I can
                contribute to innovative projects and continue to grow
                professionally. I am excited to bring my expertise and passion
                for web development to a dynamic team.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:flex-1 sticky top-0   h-96 md:h-auto mt-10 lg:w-4/12"
          >
          <ScrollParallax >
            <img
              src="/mourya.png"
              className="rounded-lg rotate-1
              hover:-rotate-1 transition-all
               duration-500 cursor-grab object-cover
              grayscale hover:grayscale-1   opacity-85
              h-full w-full md:h-96 md:w-auto"
              alt="Profile"
            />
            <div>
              <Cards />
            </div>
          </ScrollParallax>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;