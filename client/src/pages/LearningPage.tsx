import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useLearning } from "../contexts/LearningContext";
import ModuleCard from "../components/elements/ModuleCard";
import ConceptSummary from "../components/modules/ConceptSummary";
import QuizChallenge from "../components/modules/QuizChallenge";
import StemActivities from "../components/modules/StemActivities";

const LearningPage = () => {
  const [location] = useLocation();
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

  // CSS classes for view tabs
  const getTabClass = (view: string) => {
    const baseClass = "px-6 py-3 font-medium flex-1 transition focus:outline-none text-center";
    return currentView === view 
      ? `${baseClass} bg-white text-[#3A56E4] border-b-2 border-[#3A56E4]` 
      : `${baseClass} bg-gray-100 text-[#6E7687] hover:bg-gray-50`;
  };

  return (
    <section className="min-h-[calc(100vh-80px)]">
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
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
              <h1 className="text-3xl font-bold font-heading">
                {currentModule ? currentModule.title : 'Learning Modules'}
              </h1>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                onSelect={selectModule} 
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <h3 className="text-lg font-bold mb-3 font-heading">{currentModule.title}</h3>
                
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
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <i className="fas fa-atom"></i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <i className="fas fa-fire"></i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <i className="fas fa-magnet"></i>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <i className="fas fa-wave-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              {currentSubmodule && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="border-b">
                    <div className="flex">
                      <button 
                        onClick={() => setCurrentView("concept")} 
                        className={getTabClass("concept")}
                      >
                        Concept Summary and Formula
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
                  
                  {/* Content based on selected view */}
                  {currentView === "concept" && <ConceptSummary />}
                  {currentView === "quiz" && <QuizChallenge />}
                  {currentView === "activity" && <StemActivities />}
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
