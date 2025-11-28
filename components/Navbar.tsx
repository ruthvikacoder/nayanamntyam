import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../services/content';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', fullName: 'Home', path: '/' },
    ...Object.values(CATEGORIES).map(cat => ({
      name: cat.title.split(' ')[0], // Shorten name for navbar
      fullName: cat.title,
      path: `/category/${cat.id}`
    }))
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed w-full z-50 bg-parchment/95 backdrop-blur-md border-b border-gold-400/30 shadow-sm transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section - Added margin-right for spacing */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group mr-12 lg:mr-20">
            <div className="w-12 h-12 bg-maroon-900 rounded-full flex items-center justify-center border-2 border-gold-500 shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="text-gold-400 font-serif text-2xl font-bold pt-1">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-maroon-900 leading-none tracking-wide">
                NayanamNtyam
              </span>
              <span className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mt-1">
                The Grammar of Dance
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Dispersed Evenly with justify-between style spacing */}
          <div className="hidden lg:flex flex-grow items-center justify-end gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative py-2
                  ${isActive(link.path) 
                    ? 'text-maroon-900' 
                    : 'text-stone-500 hover:text-maroon-800'
                  }`}
              >
                {link.fullName || link.name}
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-maroon-900 transform transition-transform duration-300 origin-left ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-maroon-900 hover:text-maroon-800 p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden bg-parchment border-b border-gold-400 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[80vh] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors ${
                isActive(link.path)
                  ? 'bg-maroon-900 text-white shadow-md'
                  : 'text-stone-600 hover:bg-gold-500/10 hover:text-maroon-900'
              }`}
            >
              {link.fullName || link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};