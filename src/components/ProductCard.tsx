import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  icon: string;
  description?: string;
  imagePosition?: string;
}

const ProductCard = ({ name, price, image, icon, description, imagePosition = "center" }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Product Image */}
        <div className="w-full md:w-48 h-48 flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className={`w-full h-full object-cover rounded-lg shadow-sm`}
            style={{ objectPosition: imagePosition }}
          />
        </div>
        
        {/* Product Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="font-playfair text-xl font-semibold text-foreground">
              {name}
            </h3>
          </div>
          
          {description && (
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <span className="text-2xl font-bold text-primary">
              R$ {price}
            </span>
            
            <Button onClick={() => window.open("https://wa.me/584147678521?text=Hola%20quiero%20más%20información%20Diart")}
              className="bg-primary hover:bg-gold text-white rounded-full px-6 py-2 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;