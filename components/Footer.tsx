import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-lobster text-yellow-400 mb-4">Arya Higher Secondary School</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students with knowledge, integrity, and the skills to navigate the future.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
          <div className="flex items-center gap-2 text-sm hover:text-yellow-400 transition cursor-pointer">
            <MapPin size={16} className="text-yellow-500" />
            <span>Sandalpur Kanpur Dehat, 209125</span>
          </div>
          <div className="flex items-center gap-2 text-sm hover:text-yellow-400 transition cursor-pointer">
            <Phone size={16} className="text-yellow-500" />
            <span>+91 8604711419</span>
          </div>
          <div className="flex items-center gap-2 text-sm hover:text-yellow-400 transition cursor-pointer">
            <Mail size={16} className="text-yellow-500" />
            <span>arya09331126801@gmail.com</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="text-lg font-bold text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@aumv1293" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition transform hover:-translate-y-1">
              <Youtube size={20} className="text-white" />
            </a>
            <a href="https://www.instagram.com/aumv1293/" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-600 rounded-full hover:bg-pink-700 transition transform hover:-translate-y-1">
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-900 pt-6">
        &copy; {new Date().getFullYear()} Arya Higher Secondary School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;