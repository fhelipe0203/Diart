import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-surface">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center animate-glow">
          <Heart className="h-12 w-12 text-primary-foreground fill-current" />
        </div>
        
        <h1 className="font-playfair text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground font-poppins mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe. Quizás fue movida o el enlace es incorrecto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Volver al Inicio
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <Search className="h-4 w-4 mr-2" />
            Buscar Productos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
