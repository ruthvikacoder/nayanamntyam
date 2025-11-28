import React from 'react';
import { Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-900 text-parchment py-12 border-t-4 border-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold text-gold-500">NayanamNtyam</h2>
          <p className="text-stone-300 text-sm mt-2">The Grammar of Indian Classical Dance.</p>
        </div>
        
        {/* Creator & Socials */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-stone-300 text-sm font-sans mb-2">
            Created by <span className="text-gold-400 font-bold">Reddem Ruthvika</span>
          </p>
          
          <a 
            href="https://www.youtube.com/@rockruthvika8402" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-300 hover:text-red-500 transition-colors group"
          >
            <Youtube size={20} className="group-hover:fill-current" />
            <span className="text-sm border-b border-transparent group-hover:border-red-500">
              Visit YouTube Channel
            </span>
          </a>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-maroon-800 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} NayanamNtyam. All rights reserved.
      </div>
    </footer>
  );
};