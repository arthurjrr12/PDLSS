import { useAuth } from "../../contexts/AuthContext";

interface CareerPathCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  onSelect: (path: string) => void;
}

const CareerPathCard = ({ 
  id, 
  title, 
  description, 
  features, 
  imageSrc, 
  onSelect 
}: CareerPathCardProps) => {
  const { isLoggedIn, setShowLoginModal } = useAuth();

  const handlePathSelect = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    
    onSelect(id);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48">
        <img 
          src={imageSrc} 
          alt={`${title} Career`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 font-heading">{title}</h3>
        <p className="text-[#6E7687] mb-5">
          {description}
        </p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-[#28C76F] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handlePathSelect}
          className="w-full py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition"
        >
          Choose This Path
        </button>
      </div>
    </div>
  );
};

export default CareerPathCard;
