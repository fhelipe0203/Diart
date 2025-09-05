import { useState } from "react";
import { Camera, Heart, Sparkles, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery data - in a real app, this would come from an API or CMS
  const galleryItems = [
    {
      id: 1,
      type: "candle",
      caption: "Vela aromática de vainilla y canela 🕯️✨",
      likes: 42,
      category: "Velas"
    },
    {
      id: 2,
      type: "resin",
      caption: "Posavasos con flores preservadas 🌸",
      likes: 38,
      category: "Resinas"
    },
    {
      id: 3,
      type: "mug",
      caption: "Taza personalizada para mamá 💕",
      likes: 51,
      category: "Regalos"
    },
    {
      id: 4,
      type: "candle",
      caption: "Set de velas para relajación 🧘‍♀️",
      likes: 29,
      category: "Velas"
    },
    {
      id: 5,
      type: "resin",
      caption: "Llavero con mariposa dorada 🦋",
      likes: 33,
      category: "Resinas"
    },
    {
      id: 6,
      type: "mug",
      caption: "Tazas de pareja personalizadas 👫",
      likes: 47,
      category: "Regalos"
    },
    {
      id: 7,
      type: "candle",
      caption: "Vela de soja con lavanda 💜",
      likes: 35,
      category: "Velas"
    },
    {
      id: 8,
      type: "resin",
      caption: "Bandeja decorativa con flores 🌺",
      likes: 28,
      category: "Resinas"
    }
  ];

  const getImagePlaceholder = (type: string) => {
    const colors = {
      candle: "from-primary-light to-primary",
      resin: "from-accent-light to-accent", 
      mug: "from-primary to-primary-dark"
    };
    
    return `bg-gradient-to-br ${colors[type as keyof typeof colors] || colors.candle}`;
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
              <Camera className="h-4 w-4 mr-2" />
              Momentos Especiales
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Galería de
              <span className="bg-gradient-primary bg-clip-text text-transparent"> creaciones únicas</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto leading-relaxed mb-8">
              Descubre las hermosas creaciones que hemos realizado para nuestros clientes. 
              Cada pieza cuenta una historia especial y refleja momentos únicos.
            </p>

            <Button 
              variant="outline" 
              size="lg" 
              className="mb-12"
              onClick={() => window.open("https://www.instagram.com/diart.rc/", "_blank")}
            >
              <Instagram className="h-4 w-4 mr-2" />
              Síguenos en Instagram
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12 hidden">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative aspect-square bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(`gallery-${item.id}`)}
              >
                {/* Placeholder for actual images */}
                <div className={`w-full h-full ${getImagePlaceholder(item.type)} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  <div className="text-center text-primary-foreground/80">
                    <Camera className="h-12 w-12 mx-auto mb-2" />
                    <span className="text-sm font-poppins">{item.category}</span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-background font-poppins text-sm mb-2 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs font-poppins text-background">
                        {item.category}
                      </span>
                      <div className="flex items-center text-background text-xs">
                        <Heart className="h-4 w-4 mr-1 fill-current" />
                        {item.likes}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner sparkle */}
                <div className="absolute top-2 right-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Feed CTA */}
          <div className="text-center bg-background rounded-3xl p-8 shadow-elegant animate-fade-in hidden">
            <div className="max-w-2xl mx-auto">
              <Instagram className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-4">
                ¡Síguenos para ver más creaciones!
              </h3>
              <p className="text-muted-foreground font-poppins mb-6 leading-relaxed">
                Compartimos el proceso de creación, tips de decoración y las últimas 
                creaciones directamente en nuestras redes sociales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open("https://www.instagram.com/diart.rc/", "_blank")}
                >
                  @diart.rc
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("https://www.instagram.com/diart.rc/", "_blank")}
                >
                  Ver Más Fotos
                </Button>
              </div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="text-center mt-8 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-2">
              {["#DiartCreaciones", "#VelasArtesanales", "#ResinaArt", "#RegalosPersonalizados", "#HechoConAmor"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary-light/30 text-primary rounded-full text-sm font-poppins">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;