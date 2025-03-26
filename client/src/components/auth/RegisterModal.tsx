import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const RegisterModal = () => {
  const { showRegisterModal, setShowRegisterModal, setShowLoginModal, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await register(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      setAgreeTerms(false);
      setShowRegisterModal(false);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showRegisterModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={() => setShowRegisterModal(false)}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-heading">Register</h3>
            <button onClick={() => setShowRegisterModal(false)} className="text-gray-400 hover:text-gray-500">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]" 
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="register-email">Email Address</label>
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                id="register-email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]" 
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="register-password">Password</label>
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                id="register-password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]" 
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="h-4 w-4 text-[#3A56E4] focus:ring-[#3A56E4] border-gray-300 rounded" 
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-[#3A56E4] hover:underline">Terms of Service</a> and <a href="#" className="text-[#3A56E4] hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? 
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegisterModal(false);
                  setShowLoginModal(true);
                }} 
                href="#" 
                className="text-[#3A56E4] font-medium hover:underline ml-1"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
