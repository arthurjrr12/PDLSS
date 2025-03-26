import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import { 
  LearningContextType, 
  Module, 
  Submodule, 
  CareerPath, 
  QuizQuestion,
  LearningView
} from "../lib/types";
import { MODULES, BASIC_SCIENTIFIC_METHOD_QUIZ } from "../lib/constants";
import { apiRequest } from "../lib/queryClient";

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useLocation();
  
  // Career and module state
  const [careerPath, setCareerPath] = useState<CareerPath>("");
  const [modules, setModules] = useState<Module[]>(MODULES);
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentSubmodule, setCurrentSubmodule] = useState<Submodule | null>(null);
  
  // Learning UI state
  const [currentView, setCurrentView] = useState<LearningView>("concept");
  
  // Quiz state
  const [quizInProgress, setQuizInProgress] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Load saved state from localStorage if available
  useEffect(() => {
    const savedCareerPath = localStorage.getItem("careerPath");
    const savedModules = localStorage.getItem("modules");
    
    if (savedCareerPath) {
      setCareerPath(savedCareerPath as CareerPath);
    }
    
    if (savedModules) {
      setModules(JSON.parse(savedModules));
    }
  }, []);

  // Parse moduleId from URL if on learning page with a specific module
  useEffect(() => {
    if (location.startsWith("/learning/")) {
      const moduleId = parseInt(location.split("/learning/")[1]);
      if (!isNaN(moduleId)) {
        const module = modules.find(m => m.id === moduleId);
        if (module) {
          setCurrentModule(module);
          setCurrentSubmodule(module.submodules[0]);
        }
      }
    }
  }, [location, modules]);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("careerPath", careerPath);
    localStorage.setItem("modules", JSON.stringify(modules));
  }, [careerPath, modules]);

  const selectCareerPath = (path: CareerPath) => {
    setCareerPath(path);
    setLocation("/learning");
  };

  const selectModule = (moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      setCurrentModule(module);
      setCurrentSubmodule(module.submodules[0]);
      setCurrentView("concept");
      setLocation(`/learning/${moduleId}`);
    }
  };

  const selectSubmodule = (submoduleId: number) => {
    if (!currentModule) return;
    
    const submodule = currentModule.submodules.find(s => s.id === submoduleId);
    if (submodule) {
      setCurrentSubmodule(submodule);
      setCurrentView("concept");
      resetQuiz();
    }
  };

  const startQuiz = () => {
    // For demo purposes, just load the Basic Scientific Method quiz
    // In a real app, we would fetch the appropriate quiz based on the current module/submodule
    setCurrentQuestions([...BASIC_SCIENTIFIC_METHOD_QUIZ.map(q => ({...q, selectedAnswer: null}))]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizInProgress(true);
    setQuizCompleted(false);
    setShowResults(false);
    setCurrentView("quiz");
  };

  const selectAnswer = (index: number) => {
    if (!quizInProgress || currentQuestions[currentQuestionIndex].selectedAnswer !== null) return;
    
    const updatedQuestions = [...currentQuestions];
    updatedQuestions[currentQuestionIndex].selectedAnswer = index;
    setCurrentQuestions(updatedQuestions);
    
    if (index === currentQuestions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    
    // Wait a moment to show the correct/incorrect styling
    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        completeQuiz();
      }
    }, 1000);
  };

  const completeQuiz = () => {
    setQuizInProgress(false);
    setQuizCompleted(true);
    setShowResults(true);
    
    // Update progress for the current submodule
    if (currentSubmodule) {
      updateSubmoduleProgress(currentSubmodule.id, 25); // 25% progress for completing a quiz
      
      // Show achievement notification if score is good
      if (score >= 3) {
        showAchievement("You completed a quiz with a great score!");
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizInProgress(false);
    setQuizCompleted(false);
    setShowResults(false);
  };

  const updateSubmoduleProgress = (submoduleId: number, progressIncrease: number) => {
    if (!currentModule) return;
    
    const updatedModules = [...modules];
    const moduleIndex = updatedModules.findIndex(m => m.id === currentModule.id);
    
    if (moduleIndex === -1) return;
    
    const submoduleIndex = updatedModules[moduleIndex].submodules.findIndex(s => s.id === submoduleId);
    
    if (submoduleIndex === -1) return;
    
    // Update submodule progress
    let newProgress = updatedModules[moduleIndex].submodules[submoduleIndex].progress + progressIncrease;
    newProgress = Math.min(newProgress, 100); // Cap at 100%
    
    updatedModules[moduleIndex].submodules[submoduleIndex].progress = newProgress;
    
    if (newProgress >= 100) {
      updatedModules[moduleIndex].submodules[submoduleIndex].completed = true;
    }
    
    // Update module progress based on average of submodule progress
    const totalSubmodules = updatedModules[moduleIndex].submodules.length;
    const totalProgress = updatedModules[moduleIndex].submodules.reduce((sum, sm) => sum + sm.progress, 0);
    updatedModules[moduleIndex].progress = Math.round(totalProgress / totalSubmodules);
    
    if (updatedModules[moduleIndex].progress >= 100) {
      updatedModules[moduleIndex].completed = true;
    }
    
    // Update state
    setModules(updatedModules);
    setCurrentModule(updatedModules[moduleIndex]);
    setCurrentSubmodule(updatedModules[moduleIndex].submodules[submoduleIndex]);
  };

  const showAchievement = (message: string) => {
    if (typeof window !== 'undefined' && (window as any).showAchievement) {
      (window as any).showAchievement(message);
    }
  };

  const value: LearningContextType = {
    careerPath,
    modules,
    currentModule,
    currentSubmodule,
    currentView,
    quizInProgress,
    quizCompleted,
    currentQuestions,
    currentQuestionIndex,
    score,
    showResults,
    selectCareerPath,
    selectModule,
    selectSubmodule,
    setCurrentView,
    startQuiz,
    selectAnswer,
    completeQuiz,
    resetQuiz,
    showAchievement
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
};
