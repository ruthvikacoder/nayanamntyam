import React from 'react';
import { Link } from 'react-router-dom';
import { DanceItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface DanceCardProps {
  item: DanceItem;
}

export const DanceCard: React.FC<DanceCardProps> = ({ item }) => {
  return (
    <Link 
      to={`/item/${item.id}`}
      className="group relative block w-full h-80 overflow-hidden rounded-xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-2xl text-parchment font-bold mb-1">
              {item.name}
            </h3>
            {item.sanskritName && (
              <p className="text-gold-400 font-serif text-lg opacity-90 mb-2">
                {item.sanskritName}
              </p>
            )}
            <p className="text-stone-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              {item.description}
            </p>
          </div>
          <div className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
             <ArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};