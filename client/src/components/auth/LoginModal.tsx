import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal, setShowRegisterModal, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await login(email, password);
      setEmail("");
      setPassword("");
      setShowLoginModal(false);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={() => setShowLoginModal(false)}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-heading">Log In</h3>
            <button onClick={() => setShowLoginModal(false)} className="text-gray-400 hover:text-gray-500">
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
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]" 
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                id="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A56E4]" 
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-[#3A56E4] focus:ring-[#3A56E4] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="text-[#3A56E4] hover:underline">Forgot your password?</a>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? 
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  setShowLoginModal(false);
                  setShowRegisterModal(true);
                }} 
                href="#" 
                className="text-[#3A56E4] font-medium hover:underline ml-1"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
