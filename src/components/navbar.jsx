import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ease-out ${
      scrollY > 50 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 transform translate-y-0' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 animate-fade-in">
          {/* ✅ Logo only */}
          <Link to="/" className="group">
  <img 
    src="/Images/preview.png" // <-- Make sure this is your logo path
    alt="Food Empire Logo"
    className="w-24 h-24 rounded-2xl shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ease-out animate-bounce-subtle"
  />
</Link>

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-500 relative group hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-600 transform transition-all duration-500 ease-out ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-out flex items-center space-x-2 animate-pulse-subtle"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 animate-spin-slow" /> : 
              <Menu className="w-6 h-6 hover:rotate-180 transition-transform duration-500" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
       <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 p-4 flex flex-col items-center space-y-4">
  <div className="flex space-x-4 text-sm font-medium">
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setIsMenuOpen(false)}
        className={`relative transition-all duration-300 ${
          isActive(item.path) ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'
        }`}
      >
        {item.name}
        <span
          className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-600 transform transition-all duration-300 ${
            isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        ></span>
      </Link>
    ))}
  </div>

  <Link
    to="/contact"
    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300"
    onClick={() => setIsMenuOpen(false)}
  >
    Order Now
  </Link>
</div>

      )}
    </nav>
  );
};

export default Navbar;
