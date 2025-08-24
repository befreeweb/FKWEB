import React, { useState, useEffect } from 'react';
import { Menu, X, Coins, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Coins className="h-10 w-10 text-white pulse-glow" />
              <div className="absolute inset-0 h-10 w-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">Fankoin</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">Features</a>
              <a href="#roadmap" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">Roadmap</a>
              <a href="#ecosystem" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">Ecosystem</a>
              <div className="relative group">
                <button className="text-white/90 hover:text-white transition-all duration-300 font-medium flex items-center space-x-1">
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Connect Wallet
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-effect border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#features" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">Features</a>
            <a href="#roadmap" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">Roadmap</a>
            <a href="#ecosystem" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors">Ecosystem</a>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mt-4">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};