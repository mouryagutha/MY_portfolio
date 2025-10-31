import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";
import { IoWarning, IoClose } from "react-icons/io5";
import { ScrollParallax } from "react-just-parallax";
import UserGreeting from "../../firebase/UserGreet";

// Cybersecurity Quiz Questions Bank
const securityQuestions = [
  {
    question: "What does 'phishing' refer to in cybersecurity?",
    options: [
      "Catching fish online",
      "Fraudulent attempt to obtain sensitive information",
      "A type of firewall",
      "Encrypting data"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      "To cool down the system",
      "To block unauthorized access",
      "To speed up internet",
      "To store passwords"
    ],
    correct: 1
  },
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Very Personal Network",
      "Virtual Public Network",
      "Verified Private Node"
    ],
    correct: 0
  },
  {
    question: "What is malware?",
    options: [
      "A software development tool",
      "Malicious software designed to harm",
      "A type of hardware",
      "A programming language"
    ],
    correct: 1
  },
  {
    question: "What does SQL injection attack target?",
    options: [
      "Network routers",
      "Email servers",
      "Databases",
      "Printers"
    ],
    correct: 2
  },
  {
    question: "What is two-factor authentication?",
    options: [
      "Using two passwords",
      "Two security layers for verification",
      "Having two user accounts",
      "Two different browsers"
    ],
    correct: 1
  },
  {
    question: "What does HTTPS ensure?",
    options: [
      "Faster loading speed",
      "Encrypted communication",
      "Better SEO ranking",
      "More storage space"
    ],
    correct: 1
  },
  {
    question: "What is a DDoS attack?",
    options: [
      "Data deletion attack",
      "Distributed Denial of Service",
      "Direct Download Service",
      "Digital Data Operation System"
    ],
    correct: 1
  }
];

const Hero = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Get random question
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * securityQuestions.length);
    setCurrentQuestion(securityQuestions[randomIndex]);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleQuizOpen = (e) => {
    e.preventDefault();
    getRandomQuestion();
    setShowQuiz(true);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === currentQuestion.correct;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setTimeout(() => {
        window.open("https://cypher-portfolio-topaz.vercel.app/", "_blank");
        setShowQuiz(false);
      }, 1500);
    }
  };

  const handleRetry = () => {
    getRandomQuestion();
  };

  const handleClose = () => {
    setShowQuiz(false);
  };
  return (
    <>
    <div className="relative w-full items-center justify-center min-h-screen">
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
        className="absolute inset-0 flex flex-col justify-center text-white px-4 md:px-8 lg:px-16 py-8"
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
        <div className="flex flex-col lg:flex-row items-center justify-between mt-4 lg:mt-8">
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

            {/* Cybersecurity Portfolio - Simple & Unique */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {/* Tooltip on Hover - Enhanced Visibility */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
              transition-all duration-300 pointer-events-none z-20 group-hover:scale-110">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl 
                shadow-2xl shadow-cyan-500/50 border-2 border-cyan-300/50 whitespace-nowrap">
                  <span className="font-bold text-sm flex items-center gap-2">
                    <MdSecurity className="text-lg animate-pulse" />
                    🔒 Cybersecurity Portfolio
                  </span>
                  {/* Arrow pointer */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45 border-r-2 border-b-2 border-cyan-300/50"></div>
                </div>
              </div>

              {/* Clean Security Button */}
              <button
                onClick={handleQuizOpen}
                className="relative overflow-hidden backdrop-blur-md bg-white/5 
                border border-orange-400/40 hover:border-orange-400/70 transition-all duration-300 hover:scale-105
                px-5 py-3 rounded-xl shadow-lg hover:shadow-orange-500/20 flex items-center gap-3 cursor-pointer group"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <MdSecurity className="text-2xl text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  <span className="text-sm font-medium text-white/90 flex items-center gap-1.5">
                    Security Check Required
                    <IoWarning className="text-xs text-orange-400" />
                  </span>
                  <span className="text-xs text-white/60">Click to verify access</span>
                </div>
                
                {/* Arrow Icon */}
                <div className="relative z-10 ml-auto">
                  <HiShieldCheck className="text-xl text-green-400/70 group-hover:text-green-400 transition-colors duration-300" />
                </div>
              </button>
            </motion.div>
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

      {/* Security Quiz Modal */}
      <AnimatePresence>
        {showQuiz && currentQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
              border-2 border-red-500/50 rounded-2xl shadow-2xl shadow-red-500/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors"
              >
                <IoClose className="text-2xl" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 p-6 border-b border-red-500/30">
                <div className="flex items-center justify-center gap-3">
                  <MdSecurity className="text-3xl text-red-400 animate-pulse" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                    Security Clearance Check
                  </h2>
                  <HiShieldCheck className="text-3xl text-yellow-400" />
                </div>
                <p className="text-center text-sm text-white/80 mt-2">
                  🔒 Answer this question correctly to access the 
                  <span className="font-bold text-cyan-300"> Cybersecurity Portfolio</span>
                </p>
              </div>

              {/* Question Section */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-500/20 border border-red-500/50 rounded-full 
                    flex items-center justify-center text-red-400 font-bold">?</span>
                    <p className="text-lg text-white font-medium leading-relaxed">
                      {currentQuestion.question}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 
                      ${selectedAnswer === index
                        ? 'bg-blue-500/30 border-blue-400 shadow-lg shadow-blue-500/20'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }
                      ${showResult && index === currentQuestion.correct
                        ? '!bg-green-500/30 !border-green-400'
                        : ''
                      }
                      ${showResult && selectedAnswer === index && index !== currentQuestion.correct
                        ? '!bg-red-500/30 !border-red-400'
                        : ''
                      }
                      ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center 
                        text-white font-semibold text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-white">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Result Message */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border-2 mb-4 ${
                      isCorrect
                        ? 'bg-green-500/20 border-green-400/50 text-green-300'
                        : 'bg-red-500/20 border-red-400/50 text-red-300'
                    }`}
                  >
                    <p className="font-semibold text-center">
                      {isCorrect
                        ? '✅ Correct! Access Granted. Redirecting...'
                        : '❌ Incorrect! Access Denied.'}
                    </p>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {!showResult ? (
                    <button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 
                      ${selectedAnswer !== null
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-green-500/50'
                        : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    !isCorrect && (
                      <button
                        onClick={handleRetry}
                        className="flex-1 py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 
                        hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                      >
                        Try Another Question
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Footer Warning */}
              <div className="bg-red-900/20 border-t border-red-500/30 p-4">
                <p className="text-center text-xs text-white/60">
                  <IoWarning className="inline mr-1" />
                  Only authorized personnel with correct security clearance may proceed
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <div className="">
              <UserGreeting />
            </div>
    </>
  );
};

export default Hero;
