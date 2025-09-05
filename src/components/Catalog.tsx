import { Button } from "@/components/ui/button";
import { ShoppingBag, Flame, Gem, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackButtonClick, trackWhatsAppClick } from "@/lib/analytics";
import candlesImage from "@/assets/inicio-1.jpg";
import resinImage from "@/assets/resina_1.jpg";
import mugsImage from "@/assets/taza_1.png";

const Catalog = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: "candles",
      title: "Velas Aromáticas",
      subtitle: "Ilumina y perfuma tus espacios",
      description: "Velas artesanales con fragancias únicas. Ceras naturales, mechas de algodón y aromas que transforman cualquier ambiente en un lugar especial.",
      image: candlesImage,
      icon: Flame,
      features: ["Ceras naturales", "Fragancias premium", "Mechas de algodón", "Diseños personalizados"],
      color: "primary"
    },
    {
      id: "resin",
      title: "Piezas de Resina",
      subtitle: "Arte decorativo único",
      description: "Hermosas creaciones en resina con flores preservadas, mariposas y elementos naturales. Cada pieza es una obra de arte funcional.",
      image: resinImage,
      icon: Gem,
      features: ["Flores preservadas", "Diseños únicos", "Resina de calidad", "Acabados brillantes"],
      color: "accent"
    },
    {
      id: "gifts",
      title: "Regalos Personalizados",
      subtitle: "Momentos únicos e irrepetibles",
      description: "Tazas, llaveros y accesorios completamente personalizados. Perfectos para regalar o crear recuerdos especiales que durarán para siempre.",
      image: mugsImage,
      icon: Coffee,
      features: ["100% personalizables", "Materiales premium", "Diseños exclusivos", "Entrega rápida"],
      color: "primary"
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Nuestros Productos
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Descubre nuestra colección
              <span className="bg-gradient-primary bg-clip-text text-transparent"> artesanal</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto leading-relaxed">
              Cada producto está cuidadosamente diseñado y elaborado a mano, 
              pensado para crear momentos especiales y llenar de belleza tu hogar.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-golden transition-all duration-300 group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-6 right-6 w-12 h-12 bg-${category.color}/90 backdrop-blur-sm rounded-full flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-light/30 rounded-full text-primary font-poppins text-sm font-medium mb-4">
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.subtitle}
                  </div>
                  
                  <h3 className="font-playfair text-2xl md:text-4xl font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-poppins leading-relaxed mb-6 text-lg">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm font-poppins">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => navigate('/catalog')}
                    >
                      Ver Colección
                    </Button>
                    <Button variant="outline" size="lg"onClick={() => window.open("https://wa.me/584249267948?text=Hola%20quiero%20más%20información%20Diart")}>
                      Personalizar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-primary rounded-3xl p-8 md:p-12 animate-scale-in">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Tienes una idea especial en mente?
            </h3>
            <p className="text-primary-foreground/90 font-poppins mb-8 max-w-2xl mx-auto">
              Trabajamos contigo para crear productos completamente personalizados. 
              ¡Cuéntanos tu idea y la hacemos realidad!
            </p>
            <Button 
              variant="accent" 
              size="xl" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium"
              onClick={() => {
                trackButtonClick('solicitar_personalizacion', 'catalog_cta');
                trackWhatsAppClick('catalog_cta');
                window.open("https://wa.me/584249267948?text=Hola%20quiero%20más%20información%20Diart");
              }}
            >
              Solicitar Personalización
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;