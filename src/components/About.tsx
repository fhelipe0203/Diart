import { Button } from "@/components/ui/button";
import { Heart, Palette, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasión Artesanal",
      description: "Cada producto está hecho con amor y dedicación, usando técnicas tradicionales y materiales de la mejor calidad."
    },
    {
      icon: Palette,
      title: "Diseño Único",
      description: "Creamos piezas originales que reflejan tu personalidad, con colores y aromas que despiertan los sentidos."
    },
    {
      icon: Users,
      title: "Atención Personal",
      description: "Trabajamos contigo para crear el regalo perfecto, escuchando tus ideas y adaptándonos a tus necesidades."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Utilizamos solo los mejores materiales: ceras naturales, fragancias premium y resinas de alta calidad."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Nuestra Historia
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Creando momentos especiales desde el
              <span className="bg-gradient-primary bg-clip-text text-transparent"> corazón</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto leading-relaxed">
              Diart✨ nació de la pasión por crear belleza en cada detalle. Somos un emprendimiento 
              familiar que cree en el poder transformador de los pequeños momentos especiales.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Text Content */}
            <div className="animate-slide-in">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Una historia de amor por lo artesanal
              </h3>
              
              <div className="space-y-4 text-muted-foreground font-poppins leading-relaxed">
                <p>
                  Todo comenzó con una simple vela hecha en casa. La magia de crear algo hermoso 
                  con nuestras propias manos nos enamoró desde el primer momento. Cada fragancia 
                  cuenta una historia, cada color evoca una emoción.
                </p>
                
                <p>
                  Hoy, después de años perfeccionando nuestro arte, nos especializamos en velas 
                  aromáticas únicas, hermosas piezas de resina y regalos completamente personalizados. 
                  Cada producto es una pequeña obra de arte creada especialmente para ti.
                </p>
                
                <p className="font-medium text-primary">
                  "Creemos que los momentos más especiales merecen productos únicos, hechos con 
                  amor y pensados en cada detalle."
                </p>
              </div>

              <div className="mt-8">
                <Button variant="hero" size="lg">
                  Conocer Más
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-scale-in">
              <div className="bg-primary-light/30 rounded-3xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center animate-glow">
                  <Heart className="h-16 w-16 text-primary-foreground" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  Más de 500 familias
                </h4>
                <p className="text-muted-foreground font-poppins">
                  han confiado en nosotros para crear momentos únicos
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;