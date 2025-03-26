import { useState, useEffect } from "react";

const AchievementNotification = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    // Add the showAchievement function to the window object
    (window as any).showAchievement = (msg: string) => {
      setMessage(msg);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    };
    
    // Clean up when component unmounts
    return () => {
      (window as any).showAchievement = undefined;
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs w-full transform transition-transform duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <div className="w-10 h-10 rounded-full bg-[#28C76F]/20 flex items-center justify-center">
            <i className="fas fa-award text-[#28C76F]"></i>
          </div>
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="font-medium text-gray-900">New Achievement!</p>
          <p className="mt-1 text-sm text-gray-600">{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button onClick={() => setShow(false)} className="inline-flex text-gray-400 hover:text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementNotification;
