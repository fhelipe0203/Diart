import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    productos: [
      { name: "Velas Aromáticas", href: "#catalog" },
      { name: "Piezas de Resina", href: "#catalog" },
      { name: "Regalos Personalizados", href: "#catalog" },
      { name: "Catálogo Completo", href: "#catalog" }
    ],
    empresa: [
      { name: "Nuestra Historia", href: "#about" },
      { name: "Galería", href: "#gallery" },
      { name: "Testimonios", href: "#testimonials" },
      { name: "Blog", href: "#" }
    ],
    ayuda: [
      { name: "Preguntas Frecuentes", href: "#" },
      { name: "Guía de Cuidado", href: "#" },
      
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/diart.rc/", name: "Instagram"  },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Mail, href: "mailto:hola@diart.co", name: "Email" }
  ];

  return (
    <footer className="bg-surface border-t border-primary-light/20">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary fill-current animate-glow" />
                <span className="font-playfair text-2xl font-bold text-primary">
                  Diart✨
                </span>
              </div>
              
              <p className="text-muted-foreground font-poppins leading-relaxed mb-6">
                Creando momentos especiales con velas aromáticas, piezas de resina únicas 
                y regalos personalizados hechos con amor y dedicación artesanal.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-light/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="font-playfair font-semibold text-foreground mb-4">
                Productos
              </h4>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground font-poppins hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-playfair font-semibold text-foreground mb-4">
                Empresa
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground font-poppins hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Help */}
            <div>
              <h4 className="font-playfair font-semibold text-foreground mb-4">
                Contacto
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-poppins text-sm">+58 424-9267948</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-poppins text-sm">hola@diart.co</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-poppins text-sm">Santa elena, Venezuela</span>
                </div>
              </div>

              <div>
                <h5 className="font-poppins font-medium text-foreground text-sm mb-3">
                  Ayuda
                </h5>
                <ul className="space-y-2">
                  {footerLinks.ayuda.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground font-poppins text-sm hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-light/20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-muted-foreground font-poppins text-sm">
                <Heart className="h-4 w-4 text-primary fill-current" />
                <span>
                  © {currentYear} Diart✨. Hecho con amor. Todos los derechos reservados.
                </span>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a 
                  href="#" 
                  className="text-muted-foreground font-poppins hover:text-primary transition-colors duration-300"
                >
                  Términos y Condiciones
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground font-poppins hover:text-primary transition-colors duration-300"
                >
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;