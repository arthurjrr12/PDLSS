import { Link, useLocation } from "wouter";
import { MODULES } from "../lib/constants";
import ModuleCard from "../components/elements/ModuleCard";
import { useLearning } from "../contexts/LearningContext";

const HomePage = () => {
  const [, setLocation] = useLocation();
  const { selectModule } = useLearning();

  const handleModuleSelect = (moduleId: number) => {
    selectModule(moduleId);
  };

  return (
    <section className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A56E4]/95 to-[#3A56E4]/80 text-white py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                Physics Digital Learning Support System
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Master physics concepts through interactive lessons, career-focused applications, and STEM-based activities.
              </p>
              <button 
                onClick={() => setLocation("/careers")} 
                className="px-8 py-3 bg-[#FF9F43] text-[#2C3E50] font-bold rounded-lg hover:bg-[#FF9F43]/90 transition text-lg shadow-lg"
              >
                Get Started
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="Physics Learning" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4">Why Choose Our Learning System?</h2>
          <p className="text-lg text-[#6E7687] max-w-3xl mx-auto">
            Learn physics in a way that connects directly to future career opportunities and real-world applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#3A56E4]/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-graduation-cap text-2xl text-[#3A56E4]"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Career-Focused Learning</h3>
            <p className="text-[#6E7687]">Physics content tailored to specific career paths, making learning relevant to your future goals.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#3A56E4]/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-flask text-2xl text-[#3A56E4]"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">STEM-Based Activities</h3>
            <p className="text-[#6E7687]">Engage with interactive experiments and projects that reinforce physics concepts through practical application.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-[#3A56E4]/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-trophy text-2xl text-[#3A56E4]"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Gamified Approach</h3>
            <p className="text-[#6E7687]">Track progress, earn achievements, and stay motivated with our engaging learning system.</p>
          </div>
        </div>
        
        {/* Call-to-Action Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-[#6E7687] max-w-3xl mx-auto mb-8">
            Select a career path that interests you and discover physics concepts tailored to your professional goals.
          </p>
          <button 
            onClick={() => setLocation("/careers")} 
            className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition text-lg shadow-lg"
          >
            Choose Your Career Path
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
