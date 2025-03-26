import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/assets/stem-logo.png" alt="STEM School Logo" className="h-12 mr-3" />
              <h3 className="text-xl font-bold font-heading">Physics Digital Learning Support System</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing physics education through career-focused, interactive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Career Paths</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition">Learning Resources</Link></li>
              <li><Link href="/publications" className="text-gray-400 hover:text-white transition">STEM Publications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Learning Modules</h3>
            <ul className="space-y-2">
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Introduction to Physics</Link></li>
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Forces & Motion</Link></li>
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Energy, Work and Power</Link></li>
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Thermodynamics</Link></li>
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Electromagnetism</Link></li>
              <li><Link href="/learning" className="text-gray-400 hover:text-white transition">Waves and Optics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-3"></i>
                <span>Mambugan, Antipolo City</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1.5 mr-3"></i>
                <span>daize100@yahoo.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1.5 mr-3"></i>
                <span>+639691786753</span>
              </li>
              <li className="flex items-start mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src="/assets/profile-photo.png" 
                    alt="Profile Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2">Physics Teacher</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Physics Digital Learning Support System. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
