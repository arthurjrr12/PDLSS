import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, AuthContextType } from "../lib/types";
import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "../components/auth/RegisterModal";
import { apiRequest } from "../lib/queryClient";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would make an API call to authenticate
      // Simulating API call for mock auth
      //const response = await apiRequest('POST', '/api/auth/login', { email, password });
      //const userData = await response.json();

      // For demo, create a mock user
      const userData: User = {
        id: 1,
        name: email.split('@')[0],
        email: email
      };

      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // In a real app, this would make an API call to register
      // Simulating API call for mock auth
      //const response = await apiRequest('POST', '/api/auth/register', { name, email, password });
      //const userData = await response.json();

      // For demo, create a mock user
      const userData: User = {
        id: 1,
        name: name,
        email: email
      };

      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.error("Registration failed:", error);
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isLoggedIn,
    showLoginModal,
    showRegisterModal,
    login,
    register,
    logout,
    setShowLoginModal,
    setShowRegisterModal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <LoginModal />
      <RegisterModal />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
