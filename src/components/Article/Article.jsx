import React from 'react'
import BackgroundGrid from "../utils/BgGrid";
import { motion } from "framer-motion";


const Article = () => {
  return (
    <div className='flex gap-10 flex-col  '>
      <>
        <BackgroundGrid />
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full flex gap-10"
          >
        <div class="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" target='black'>
            <img class="rounded-t-lg" src="prompt_engg.png" alt="prompt_engg" />
          </a>
          <div class="p-5">
            <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" target='black'>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prompt Engineering: Crafting Effective Prompts for Chat GPT</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Unlocking the Power of ChatGPT: Mastering the Art of Prompt Engineering.</p>
            <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target='black'>
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div class="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://techub.hashnode.dev/reactjs-unleashed-transforming-web-development-one-component-at-a-time" target='black'>
            <img class="rounded-t-lg" src="reactjs.jpg" alt="prompt_engg" />
          </a>
          <div class="p-5">
            <a href="https://techub.hashnode.dev/reactjs-unleashed-transforming-web-development-one-component-at-a-time" target='black'>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React.js Unleashed: Transforming Web Development One Component at a Time</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A Comprehensive Guide to Building Modern Web Applications with Reactjs.</p>
            <a href="https://techub.hashnode.dev/reactjs-unleashed-transforming-web-development-one-component-at-a-time" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target='black'>
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        <div class="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" target='black'>
            <img class="rounded-t-lg" src="prompt_engg.png" alt="prompt_engg" />
          </a>
          <div class="p-5">
            <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" target='black'>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prompt Engineering: Crafting Effective Prompts for Chat GPT</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Unlocking the Power of ChatGPT: Mastering the Art of Prompt Engineering.</p>
            <a href="https://techub.hashnode.dev/prompt-engineering-crafting-effective-prompts-for-chat-gpt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target='black'>
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
  
     

      <div className="w-full flex gap-10">
      </div>
      

      </>

    </div>
  )
}

export default Article
