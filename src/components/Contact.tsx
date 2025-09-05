import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  Send,
  Heart
} from "lucide-react";
import { link } from "fs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "+58 424-9267948",
      subtitle: "Llámanos o escríbenos por WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hola@diart.co",
      subtitle: "Te respondemos en menos de 24 horas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Santa Elena, Venezuela",
      subtitle: "Entregas en todo el pais"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: "Lun - Vie: 9AM - 7PM",
      subtitle: "Sábados: 10AM - 4PM"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@diart.rc" , link: "https://www.instagram.com/diart.rc/" },
    { icon: Facebook, name: "Facebook", handle: "Diart Creaciones", link: "https://www.facebook.com/diart.creaciones" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/50 rounded-full text-primary font-poppins text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contáctanos
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
              Hagamos realidad tu
              <span className="bg-gradient-primary bg-clip-text text-transparent"> idea perfecta</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a crear algo único y especial. Cuéntanos tu idea 
              y trabajaremos juntos para hacerla realidad con el amor y la calidad que nos caracteriza.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-slide-in">
              <div className="bg-background rounded-3xl p-8 shadow-elegant">
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Cuéntanos tu proyecto
                  </h3>
                  <p className="text-muted-foreground font-poppins">
                    Completa el formulario y te contactaremos en menos de 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground font-poppins mb-2">
                        Nombre completo
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="rounded-xl border-primary-light/30 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground font-poppins mb-2">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 300 123 4567"
                        className="rounded-xl border-primary-light/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-poppins mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="rounded-xl border-primary-light/30 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-poppins mb-2">
                      Producto de interés
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-light/30 rounded-xl bg-background text-foreground font-poppins focus:border-primary focus:outline-none"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="candles">Velas aromáticas</option>
                      <option value="resin">Piezas de resina</option>
                      <option value="gifts">Regalos personalizados</option>
                      <option value="custom">Personalización especial</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-poppins mb-2">
                      Cuéntanos tu idea
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu proyecto, colores preferidos, fechas importantes, o cualquier detalle especial que quieras incluir..."
                      className="rounded-xl border-primary-light/30 focus:border-primary min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-background rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-primary font-poppins font-medium">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground font-poppins text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <h4 className="font-playfair font-semibold text-foreground mb-4">
                  Síguenos en redes sociales
                </h4>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-light/30 transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-primary group-hover:text-primary-dark" />
                      <div>
                        <div className="font-poppins font-medium text-foreground">
                          {social.name}
                        </div>
                        <div className="text-muted-foreground font-poppins text-sm">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 bg-gradient-primary rounded-2xl p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-3 text-primary-foreground fill-current animate-glow" />
                <h4 className="font-playfair font-semibold text-primary-foreground mb-2">
                  ¿Necesitas ayuda inmediata?
                </h4>
                <p className="text-primary-foreground/90 font-poppins text-sm mb-4">
                  Escríbenos por WhatsApp y te respondemos al instante
                </p>
                <Button variant="accent" size="default" className="w-full" onClick={() => window.open("https://wa.me/584249267948?text=Hola%20quiero%20más%20información%20Diart")}>
                  <MessageCircle className="h-4 w-4 mr-2"  />
                  Chatear por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;