import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DanceCard } from './components/DanceCard';
import { Footer } from './components/Footer';
import { CATEGORIES, getItemsByCategory, getItemById, getRelatedItems } from './services/content';
// import { CategoryId, DanceItem } from './types';
import { Play } from 'lucide-react';

// --- Page Components Defined Internally to keep structure clean in XML ---

// 1. Home Page
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment">
      <Hero 
        title="NayanamNtyam" 
        subtitle="The Grammar of Indian Dance" 
        image="https://picsum.photos/id/453/1920/1080"
        isMain={true}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-6">Explore the Art Form</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover the intricate language of mudras, expressions, and movements that form the foundation of Indian Classical Dance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(CATEGORIES).map((cat) => (
            <div key={cat.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <a href={`#/category/${cat.id}`} className="block h-64">
                <img src={cat.heroImage} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-maroon-900/60 flex flex-col items-center justify-center p-4 text-center group-hover:bg-maroon-900/70 transition-colors">
                  <h3 className="font-serif text-2xl text-parchment font-bold mb-2">{cat.title}</h3>
                  <p className="text-gold-400 font-sans text-sm">{cat.subtitle}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Category Gallery Page
const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Validate Category
  const categoryInfo = Object.values(CATEGORIES).find(c => c.id === categoryId);
  const items = categoryId ? getItemsByCategory(categoryId as CategoryId) : [];

  if (!categoryInfo) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-stone-50">
      <Hero 
        title={categoryInfo.title} 
        subtitle={categoryInfo.subtitle} 
        image={categoryInfo.heroImage} 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-xl text-stone-700 max-w-4xl mx-auto text-center mb-12 font-light">
          {categoryInfo.description}
        </p>

        {items.length === 0 ? (
          <div className="text-center py-20 text-stone-500">
            <p>Content for this category is currently being curated.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[20rem]">
            {items.map(item => (
              <DanceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Individual Detail Page
const DetailPage: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const item = itemId ? getItemById(itemId) : undefined;
  
  if (!item) return <Navigate to="/" />;
  
  const relatedItems = getRelatedItems(item.relatedIds);

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Top Detail Section */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 min-h-[60vh]">
          
          {/* Left: Image */}
          <div className="relative h-[50vh] lg:h-auto bg-stone-100 overflow-hidden">
             <img 
               src={item.imageUrl} 
               alt={item.name} 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent lg:hidden">
               <h1 className="text-3xl text-white font-serif font-bold">{item.name}</h1>
             </div>
          </div>

          {/* Right: Content */}
          <div className="p-8 lg:py-20 lg:pr-12 flex flex-col justify-center">
            <div className="mb-8 hidden lg:block">
              <span className="text-gold-600 font-sans font-bold tracking-widest text-sm uppercase mb-2 block">
                {CATEGORIES[item.categoryId].title}
              </span>
              <h1 className="text-5xl lg:text-6xl text-maroon-900 font-serif font-bold mb-2">
                {item.name}
              </h1>
              {item.sanskritName && (
                <h2 className="text-3xl text-stone-400 font-serif mb-6">{item.sanskritName}</h2>
              )}
            </div>

            {/* Mobile Title duplicate for better layout flow */}
            <div className="lg:hidden mb-6">
               <span className="text-gold-600 font-sans font-bold tracking-widest text-xs uppercase">
                {CATEGORIES[item.categoryId].title}
              </span>
               {item.sanskritName && (
                <h2 className="text-2xl text-stone-400 font-serif mt-1">{item.sanskritName}</h2>
              )}
            </div>
            
            <div className="prose prose-stone prose-lg">
              <p className="text-stone-700 leading-relaxed font-light text-lg">
                {item.description}
              </p>
            </div>

            {/* Video Section */}
            <div className="mt-12">
               <div className="flex items-center gap-2 mb-4 text-maroon-900 font-bold font-serif border-b border-gold-200 pb-2">
                 <Play size={20} className="fill-current" />
                 <span>Demonstration Video</span>
               </div>
               <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg border border-stone-800">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${item.youtubeId}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="font-serif text-2xl text-maroon-900 mb-8 pb-2 border-b border-stone-300">
            Related Gestures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map(related => (
              <DanceCard key={related.id} item={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main App Layout
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-parchment text-stone-800 selection:bg-maroon-900 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/item/:itemId" element={<DetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
