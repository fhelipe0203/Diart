import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Gift } from "lucide-react";
import heroImage from "@/assets/hero-diart.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-primary/20 animate-float">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute bottom-32 right-32 text-accent/30 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="h-8 w-8" />
      </div>
      <div className="absolute top-40 left-20 text-primary-light/40 animate-float" style={{ animationDelay: '2s' }}>
        <Gift className="h-10 w-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            
            {/* Text Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Productos hechos con amor
              </div>
              
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Ilumina tu hogar con
                <span className="bg-gradient-primary bg-clip-text text-transparent"> magia artesanal</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 font-poppins leading-relaxed">
                En <strong className="text-primary">Diart✨</strong> creamos velas aromáticas únicas, 
                hermosas piezas de resina y regalos personalizados que llenan cada momento de 
                calidez y belleza especial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/catalog">
                  <Button variant="hero" size="lg" className="animate-scale-in">
                    Explorar Catálogo
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  Nuestra Historia
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-light/30">
                <div className="text-center animate-slide-in">
                  <div className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground font-poppins">Clientes Felices</div>
                </div>
                <div className="text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
                  <div className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground font-poppins">Artesanal</div>
                </div>
                <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  <div className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-poppins">Atención Personal</div>
                </div>
              </div>
            </div>

            {/* Visual Element - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-primary rounded-full opacity-20 animate-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;