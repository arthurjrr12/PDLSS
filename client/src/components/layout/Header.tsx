import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [location, setLocation] = useLocation();
  const { isLoggedIn, user, logout, setShowLoginModal } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Career Paths", path: "/careers" },
    { label: "Physics Learning Resources", path: "/resources" },
    { label: "STEM Publications", path: "/publications" },
  ];

  const navigateTo = (path: string) => {
    setLocation(path);
    setShowMobileMenu(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-[#B8A6D9] font-bold text-xl md:text-2xl font-heading">
            <i className="fas fa-atom mr-2"></i>PhysEdu
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.path);
              }}
              href={item.path}
              className={`font-medium ${location === item.path ? 'text-[#B8A6D9]' : 'text-gray-600 hover:text-[#B8A6D9]'} transition`}
            >
              {item.label}
            </a>
          ))}
          
          {!isLoggedIn ? (
            <button 
              onClick={() => setShowLoginModal(true)} 
              className="ml-4 px-4 py-2 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition"
            >
              Login
            </button>
          ) : (
            <div className="relative" onMouseLeave={() => setShowDropdown(false)}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)} 
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-[#3A56E4] text-white flex items-center justify-center">
                  <span>{user?.name.charAt(0).toUpperCase()}</span>
                </div>
                <span className="hidden lg:inline">{user?.name}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Progress</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      setShowDropdown(false);
                    }} 
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)} 
          className="md:hidden text-gray-500 hover:text-[#3A56E4] focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.path);
                  }}
                  href={item.path}
                  className={`font-medium py-2 ${location === item.path ? 'text-[#3A56E4]' : 'text-gray-600 hover:text-[#3A56E4]'} transition`}
                >
                  {item.label}
                </a>
              ))}
              
              {!isLoggedIn ? (
                <button 
                  onClick={() => {
                    setShowLoginModal(true);
                    setShowMobileMenu(false);
                  }} 
                  className="w-full mt-3 px-4 py-2 bg-[#3A56E4] text-white rounded-md font-medium hover:bg-[#3A56E4]/90 transition"
                >
                  Login
                </button>
              ) : (
                <div className="border-t pt-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#3A56E4] text-white flex items-center justify-center">
                      <span>{user?.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <span>{user?.name}</span>
                  </div>
                  <a href="#" className="block py-2 text-sm text-gray-700">My Profile</a>
                  <a href="#" className="block py-2 text-sm text-gray-700">My Progress</a>
                  <a href="#" className="block py-2 text-sm text-gray-700">Settings</a>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      setShowMobileMenu(false);
                    }} 
                    className="block py-2 text-sm text-red-600"
                  >
                    Logout
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
