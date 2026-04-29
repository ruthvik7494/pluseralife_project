import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../../assets/plusimglogobgremove.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="bg-primary text-white py-2 text-[10px] sm:text-xs">
        <div className="section-container flex justify-center sm:justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+918685888699" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Phone size={10} className="sm:w-3 sm:h-3" />
              <span>+91 86858 88699</span>
            </a>
            <a href="mailto:plusera.life@gmail.com" className="hidden sm:flex items-center space-x-1 hover:text-accent transition-colors">
              <Mail size={10} className="sm:w-3 sm:h-3" />
              <span>plusera.life@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block italic opacity-80">Authentic Ayurveda for a Healthier Humanity</div>
        </div>
      </div>
      <nav className="section-container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="PlusEra Lifesciences" className="h-12 w-auto object-contain" />
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="#contact" className="btn-primary py-2 px-4 rounded-full text-sm">Inquiry Now</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-primary">Home</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-primary">Products</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-primary">About Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-primary">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full btn-primary py-2 rounded-full text-sm text-center block">Inquiry Now</a>
        </div>
      )}
    </header>
  );
};

export default Header;
