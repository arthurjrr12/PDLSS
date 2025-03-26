import { Link } from "wouter";
import { Module } from "../../lib/types";
import { useAuth } from "../../contexts/AuthContext";

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-32 bg-gradient-to-r from-[#3A56E4]/90 to-[#3A56E4]/70 p-6 flex items-center">
        <h3 className="text-xl font-bold text-white font-heading">{module.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-[#6E7687] mb-4">{module.description}</p>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#28C76F] h-2.5 rounded-full" 
              style={{ width: `${module.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-[#6E7687]">
            <span>Progress</span>
            <span>{module.progress}%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#FF9F43] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="text-sm font-semibold">{module.totalSubmodules} Submodules</span>
          </div>
          <button 
            onClick={handleStartLearning}
            className="px-4 py-2 bg-[#3A56E4] text-white text-sm rounded-md hover:bg-[#3A56E4]/90 transition"
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
