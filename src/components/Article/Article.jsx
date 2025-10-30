import BackgroundGrid from "../utils/BgGrid";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Prompt Engineering: Crafting Effective Prompts for Chat GPT",
    description: "Unlocking the Power of ChatGPT: Mastering the Art of Prompt Engineering.",
    image: "prompt_engg.png",
    link: "https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt"
  },
  {
    title: "React.js Unleashed: Transforming Web Development One Component at a Time",
    description: "A Comprehensive Guide to Building Modern Web Applications with Reactjs.",
    image: "reactjs.jpg",
    link: "https://techub.hashnode.dev/reactjs-unleashed-transforming-web-development-one-component-at-a-time"
  },
  {
    title: "Understanding JavaScript Closures",
    description: "Deep dive into JavaScript closures and how they work under the hood.",
    image: "prompt_engg.png",
    link: "#"
  },
  {
    title: "Building Scalable Applications with Node.js",
    description: "Best practices for building scalable and maintainable Node.js applications.",
    image: "reactjs.jpg",
    link: "#"
  },
  {
    title: "Introduction to Docker and Containerization",
    description: "Learn how Docker revolutionizes application deployment and development.",
    image: "prompt_engg.png",
    link: "#"
  },
  {
    title: "MongoDB: A NoSQL Database Guide",
    description: "Complete guide to working with MongoDB for modern web applications.",
    image: "reactjs.jpg",
    link: "#"
  }
];

const ArticleCard = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 h-full"
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="overflow-hidden">
      <img className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" src={image} alt={title} />
    </a>
    <div className="p-6 flex flex-col flex-grow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-white line-clamp-2 hover:text-blue-300 transition-colors">
          {title}
        </h5>
      </a>
      <p className="mb-4 font-normal text-gray-300 line-clamp-3 flex-grow">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md bg-white/20 border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-95 mt-auto w-fit"
      >
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Article = () => {
  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10 min-h-screen">
      <BackgroundGrid />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8 mt-10"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Articles & Blog Posts</h1>
        <p className="text-gray-300 text-lg">Sharing knowledge and insights about web development</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  )
}

export default Article
