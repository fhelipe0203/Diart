import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Cliente frecuente",
      rating: 5,
      text: "Las velas de Diart han transformado completamente mi hogar. Los aromas son increíbles y duran muchísimo. ¡Cada vez que las enciendo siento una paz inmensa!",
      product: "Velas aromáticas"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Regalo de aniversario",
      rating: 5,
      text: "Pedí una pieza de resina personalizada para mi esposa y quedó absolutamente hermosa. La atención al detalle es impresionante. ¡Ella lloró de la emoción!",
      product: "Resina personalizada"
    },
    {
      id: 3,
      name: "Ana Sofía",
      role: "Emprendedora",
      rating: 5,
      text: "Las tazas personalizadas para mi equipo fueron un éxito total. La calidad es excelente y el diseño quedó perfecto. ¡Todos las usan a diario!",
      product: "Tazas personalizadas"
    },
    {
      id: 4,
      name: "Roberto Silva",
      role: "Papá orgulloso",
      rating: 5,
      text: "Encargué un set completo para el baby shower de mi hija. Todo llegó perfecto y a tiempo. La dedicación y el cariño se nota en cada detalle.",
      product: "Set personalizado"
    },
    {
      id: 5,
      name: "Valentina Torres",
      role: "Novia feliz",
      rating: 5,
      text: "Los detalles para mi boda fueron un sueño hecho realidad. Cada invitado se llevó algo único y hermoso. ¡Diart hizo que nuestro día fuera aún más especial!",
      product: "Detalles de boda"
    },
    {
      id: 6,
      name: "Luis Ramírez",
      role: "Cliente satisfecho",
      rating: 5,
      text: "La atención personalizada es increíble. Me ayudaron a crear el regalo perfecto para mi mamá. Desde el primer mensaje hasta la entrega, todo fue perfecto.",
      product: "Regalo personalizado"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Testimonios
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Lo que dicen nuestros
              <span className="bg-gradient-primary bg-clip-text text-transparent"> clientes felices</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto leading-relaxed">
              Cada testimonio representa una historia especial, un momento único que tuvimos 
              el honor de acompañar con nuestras creaciones artesanales.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="h-10 w-10 text-primary-foreground fill-current" />
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground font-poppins">Calificación promedio</div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-accent-foreground fill-current" />
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-poppins">Clientes satisfechos</div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Quote className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground font-poppins">Recomendarían Diart</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-surface-variant rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-accent fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-foreground font-poppins leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="border-t border-primary-light/30 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-playfair font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground font-poppins">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-primary font-poppins font-medium">
                        {testimonial.product}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-primary rounded-3xl p-8 md:p-12 animate-scale-in">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary-foreground fill-current animate-glow" />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Quieres ser nuestro próximo cliente feliz?
            </h3>
            <p className="text-primary-foreground/90 font-poppins mb-8 max-w-2xl mx-auto">
              Únete a nuestra familia de más de 500 clientes satisfechos y descubre 
              por qué Diart es sinónimo de calidad, belleza y momentos especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.open("https://wa.me/584147678521?text=Hola%20quiero%20más%20información%20Diart")} className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-poppins font-semibold hover:bg-accent-light transition-all duration-300 transform hover:scale-105 shadow-golden ">
                Hacer mi Pedido
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;