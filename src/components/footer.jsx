import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* ✅ Logo Only */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img 
                src="/Images/preview.png" // Your logo image path
                alt="Food Empire Logo"
                className="w-28 h-28 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out animate-bounce-subtle"
              />
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6">
              Shaping the future of food delivery through intelligent logistics, trusted sourcing, and unbeatable freshness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-green-500 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/products" className="hover:text-green-500 transition-colors duration-300">Products</Link></li>
              <li><Link to="/careers" className="hover:text-green-500 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>0258-3888-388</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>info@food-empire.net</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="leading-relaxed">
                  Lot NV05-06, Road No. 28, Phuoc Long Urban Area, Phuoc Long Ward, Nha Trang City, Khanh Hoa Province, Vietnam
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Food Empire. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
