import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { useLearning } from "../contexts/LearningContext";
import ModuleCard from "../components/elements/ModuleCard";
import ConceptSummary from "../components/modules/ConceptSummary";
import QuizChallenge from "../components/modules/QuizChallenge";
import StemActivities from "../components/modules/StemActivities";
import { motion, AnimatePresence } from "framer-motion";
import { RESOURCE_CATEGORIES } from "../lib/constants";

const LearningPage = () => {
  const [location] = useLocation();
  const [resourceCategory, setResourceCategory] = useState(0);
  const { 
    careerPath,
    modules,
    currentModule,
    currentSubmodule,
    currentView,
    selectModule,
    selectSubmodule,
    setCurrentView,
    startQuiz
  } = useLearning();

  // Animation variants for transitions
  const pageTransitions = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 10,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  // CSS classes for view tabs
  const getTabClass = (view: string) => {
    const baseClass = "px-6 py-3 font-medium flex-1 transition focus:outline-none text-center";
    return currentView === view 
      ? `${baseClass} bg-white text-[#3A56E4] border-b-2 border-[#3A56E4]` 
      : `${baseClass} bg-gray-100 text-[#6E7687] hover:bg-gray-50`;
  };

  return (
    <section className="min-h-[calc(100vh-80px)]">
      <div className="bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <Link href="/careers" className="mr-2 text-[#3A56E4] hover:text-[#3A56E4]/80 transition">
                  <i className="fas fa-arrow-left"></i>
                </Link>
                {careerPath && (
                  <span className="text-sm uppercase tracking-wide text-[#3A56E4] font-semibold">
                    {careerPath.charAt(0).toUpperCase() + careerPath.slice(1)}
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold font-heading">
                {careerPath === "engineering" ? "Physics for Engineers" : 
                 careerPath === "medicine" ? "Physics for Medical Professionals" : 
                 careerPath === "aviation" ? "Physics for Pilots" : 
                 "Physics Learning Modules"}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {careerPath === "engineering" ? "Master the physics principles essential for engineering careers" : 
                 careerPath === "medicine" ? "Learn the physics foundations critical for medical practice" : 
                 careerPath === "aviation" ? "Understand the physics concepts vital for aviation professions" : 
                 "Select a career path to begin your physics learning journey"}
              </p>
            </div>
            
            {currentModule && (
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#28C76F] mr-2" viewBox="0 0 100 100">
                    <circle className="opacity-20" cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10"></circle>
                    <circle 
                      className="transform -rotate-90" 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="10" 
                      strokeDasharray="283" 
                      strokeDashoffset={283 - (283 * currentModule.progress / 100)}
                    ></circle>
                  </svg>
                  <span className="text-sm font-medium mr-1">{currentModule.progress}%</span>
                  <span className="text-xs text-[#6E7687]">Complete</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8">
        {!currentModule ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {modules.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                onSelect={selectModule} 
              />
            ))}
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <h3 className="text-lg font-bold mb-3 font-heading">Learning Modules</h3>
                
                <div className="space-y-1">
                  {currentModule.submodules.map((submodule, index) => {
                    const isActive = currentSubmodule?.id === submodule.id;
                    const borderClass = isActive 
                      ? "bg-[#3A56E4]/10 border-l-4 border-[#3A56E4]" 
                      : "border-l-4 border-transparent hover:bg-gray-100";
                      
                    return (
                      <div 
                        key={index}
                        onClick={() => selectSubmodule(submodule.id)} 
                        className={`${borderClass} pl-3 py-2 cursor-pointer rounded-r-md transition flex items-center justify-between`}
                      >
                        <div className="flex items-center">
                          <span className="text-sm">{submodule.title}</span>
                        </div>
                        {submodule.completed && (
                          <svg className="w-5 h-5 text-[#28C76F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {!currentSubmodule && (
                  <div className="mt-4 pt-4 border-t">
                    <button 
                      onClick={() => currentModule.submodules.length > 0 && selectSubmodule(currentModule.submodules[0].id)}
                      className="w-full py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition"
                    >
                      Start Learning
                    </button>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-bold mb-3 font-heading">Your Progress</h3>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-[#28C76F] h-2.5 rounded-full" 
                      style={{ width: `${currentModule.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-[#6E7687]">
                    <span>Module Progress</span>
                    <span>{currentModule.progress}%</span>
                  </div>
                </div>
                
                {currentSubmodule && (
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-[#3A56E4] h-2.5 rounded-full" 
                        style={{ width: `${currentSubmodule.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-[#6E7687]">
                      <span>Current Topic</span>
                      <span>{currentSubmodule.progress}%</span>
                    </div>
                  </div>
                )}
                
                <div className="border-t pt-3 mt-3">
                  <h4 className="font-semibold text-sm mb-2">Achievement Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center text-purple-500 shadow-sm cursor-pointer"
                      title="Curious Mind: Completed your first module"
                    >
                      <i className="fas fa-atom"></i>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-500 shadow-sm cursor-pointer"
                      title="Lightning Fast: Completed quiz in record time"
                    >
                      <i className="fas fa-bolt"></i>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-orange-100 border-2 border-orange-200 flex items-center justify-center text-orange-500 shadow-sm cursor-pointer"
                      title="On Fire: 3-day learning streak"
                    >
                      <i className="fas fa-fire"></i>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center text-pink-500 shadow-sm cursor-pointer"
                      title="Attractive Force: Completed Electromagnetism module"
                    >
                      <i className="fas fa-magnet"></i>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center text-green-500 shadow-sm cursor-pointer"
                      title="Wave Master: Completed Waves & Optics module"
                    >
                      <i className="fas fa-wave-square"></i>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              {!currentSubmodule ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold mb-4 font-heading">Module Overview</h2>
                      <p className="mb-6">
                        This module covers the fundamental concepts of introduction to physics, providing a solid foundation for {
                          careerPath === "engineering" ? "engineering applications" : 
                          careerPath === "medicine" ? "medical practice" : 
                          careerPath === "aviation" ? "aviation professions" : "physics applications"
                        }.
                      </p>
                      
                      <h3 className="text-lg font-bold mb-3 font-heading">Key Topics</h3>
                      <ul className="list-disc pl-5 space-y-1 mb-6">
                        <li>Basic Scientific Method</li>
                        <li>Advanced Scientific Method</li>
                        <li>Basic Measurement</li>
                        <li>Advanced Measurement</li>
                        <li>Basic Vectors Calculation</li>
                        <li>Advanced Vectors Calculation</li>
                      </ul>
                      
                      <h3 className="text-lg font-bold mb-3 font-heading">Key Formulas</h3>
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="font-mono mb-2">Vector Addition: C = A + B</p>
                        <p className="font-mono mb-2">Vector Magnitude: |A| = √(Ax² + Ay² + Az²)</p>
                        <p className="font-mono">Unit Conversion: value₁ = value₂ × conversion factor</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold mb-4 font-heading">Recommended Resources</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-[#3A56E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium">Engineering Physics Textbook</h3>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-[#3A56E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium">Interactive Simulations</h3>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-[#3A56E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium">Problem-Solving Exercises</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="border-b">
                        <div className="flex">
                          <button 
                            onClick={() => setCurrentView("concept")} 
                            className={getTabClass("concept")}
                          >
                            Concept Summary
                          </button>
                          <button 
                            onClick={() => startQuiz()} 
                            className={getTabClass("quiz")}
                          >
                            Quiz Challenge
                          </button>
                          <button 
                            onClick={() => setCurrentView("activity")} 
                            className={getTabClass("activity")}
                          >
                            STEM Activities
                          </button>
                        </div>
                      </div>
                      
                      {/* Content based on selected view with animations */}
                      <AnimatePresence mode="wait">
                        {currentView === "concept" && (
                          <motion.div
                            key="concept"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={pageTransitions}
                          >
                            <ConceptSummary />
                          </motion.div>
                        )}
                        {currentView === "quiz" && (
                          <motion.div
                            key="quiz"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={pageTransitions}
                          >
                            <QuizChallenge />
                          </motion.div>
                        )}
                        {currentView === "activity" && (
                          <motion.div
                            key="activity"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={pageTransitions}
                          >
                            <StemActivities />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Recommended Resources Panel */}
                  <div className="md:col-span-1">
                    <motion.div 
                      className="bg-white rounded-xl shadow-md p-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold font-heading">Recommended Resources</h2>
                        <motion.div 
                          className="text-purple-500 cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex space-x-2 mb-3 overflow-x-auto pb-2">
                          {RESOURCE_CATEGORIES.slice(0, 2).map((category, index) => (
                            <button
                              key={index}
                              onClick={() => setResourceCategory(index)}
                              className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                                resourceCategory === index
                                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              {category.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {RESOURCE_CATEGORIES[resourceCategory]?.resources.slice(0, 3).map((resource, index) => (
                          <motion.a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <h3 className="text-sm font-medium mb-1">{resource.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2">{resource.description}</p>
                          </motion.a>
                        ))}
                        
                        <button className="w-full text-center text-purple-600 text-sm py-2 hover:text-purple-800 transition">
                          View More Resources
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LearningPage;
