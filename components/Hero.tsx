import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  isMain?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, image, isMain = false }) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax simulated via fixed attachment (desktop) or absolute (mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-maroon-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-parchment mb-4 drop-shadow-lg tracking-wider">
          {title}
        </h1>
        <p className="font-sans text-lg md:text-2xl text-gold-400 font-light tracking-wide max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {isMain && (
          <div className="mt-12 animate-bounce flex justify-center text-parchment/70">
            <ArrowDown size={32} />
          </div>
        )}
      </div>
    </div>
  );
};