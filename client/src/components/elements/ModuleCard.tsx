import { Link } from "wouter";
import { Module } from "../../lib/types";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";

interface ModuleCardProps {
  module: Module;
  onSelect: (moduleId: number) => void;
}

const ModuleCard = ({ module, onSelect }: ModuleCardProps) => {
  const { isLoggedIn, setShowLoginModal } = useAuth();

  const handleStartLearning = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    
    onSelect(module.id);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="h-32 bg-gradient-to-r from-[#3A56E4]/90 to-[#3A56E4]/70 p-6 flex items-center"
        whileHover={{ backgroundColor: "#4a66f4" }}
      >
        <motion.h3 
          className="text-xl font-bold text-white font-heading"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {module.title}
        </motion.h3>
      </motion.div>
      <div className="p-6">
        <motion.p 
          className="text-[#6E7687] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {module.description}
        </motion.p>
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className="bg-[#28C76F] h-2.5 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: `${module.progress}%` }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-[#6E7687]">
            <span>Progress</span>
            <span>{module.progress}%</span>
          </div>
        </motion.div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.svg 
              className="w-5 h-5 text-[#FF9F43] mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </motion.svg>
            <span className="text-sm font-semibold">{module.totalSubmodules} Submodules</span>
          </div>
          <motion.button 
            onClick={handleStartLearning}
            className="px-4 py-2 bg-[#3A56E4] text-white text-sm rounded-md hover:bg-[#3A56E4]/90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
