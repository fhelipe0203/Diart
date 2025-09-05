import { Moon, Stars } from "lucide-react";

const CatalogHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-light to-accent min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 opacity-30">
        <Moon className="w-12 h-12 text-gold animate-float" />
      </div>
      <div className="absolute top-16 right-16 opacity-40">
        <Stars className="w-8 h-8 text-gold animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-12 left-16 opacity-25">
        <Stars className="w-6 h-6 text-gold animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 px-4">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gold mb-4 animate-fade-in">
          Diart
          <span className="text-2xl md:text-3xl align-super ml-2">✨</span>
        </h1>
        <p className="font-playfair text-xl md:text-2xl text-primary-dark/80 italic animate-slide-in">
          Velas aromáticas artesanales
        </p>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default CatalogHeader;