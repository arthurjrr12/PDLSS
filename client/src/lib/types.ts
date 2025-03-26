// User related types
export interface User {
  id: number;
  name: string;
  email: string;
  profilePicture?: string;
}

// Auth context types
export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  showLoginModal: boolean;
  showRegisterModal: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setShowLoginModal: (show: boolean) => void;
  setShowRegisterModal: (show: boolean) => void;
}

// Learning context types
export type CareerPath = "engineering" | "medicine" | "aviation" | "";

export interface Submodule {
  id: number;
  title: string;
  progress: number;
  completed: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  progress: number;
  completed: boolean;
  totalSubmodules: number;
  submodules: Submodule[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer: number | null;
}

export type LearningView = "concept" | "quiz" | "activity";

export interface LearningContextType {
  careerPath: CareerPath;
  modules: Module[];
  currentModule: Module | null;
  currentSubmodule: Submodule | null;
  currentView: LearningView;
  quizInProgress: boolean;
  quizCompleted: boolean;
  currentQuestions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  selectCareerPath: (path: CareerPath) => void;
  selectModule: (moduleId: number) => void;
  selectSubmodule: (submoduleId: number) => void;
  setCurrentView: (view: LearningView) => void;
  startQuiz: () => void;
  selectAnswer: (index: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
  showAchievement: (message: string) => void;
}

// Achievement notification types
export interface AchievementNotificationProps {
  show: boolean;
  message: string;
}

export interface AchievementContextType {
  showAchievement: (message: string) => void;
}

// Resource types
export interface ResourceSubLink {
  label: string;
  url: string;
}

export interface Resource {
  title: string;
  description: string;
  url: string;
  subLinks?: ResourceSubLink[];
}

export interface ResourceCategory {
  title: string;
  icon: string;
  resources: Resource[];
}

// Publication types
export interface Publication {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  journal: string;
  image: string;
  tags: string[];
}
