import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogHeader from "@/components/CatalogHeader";
import ProductCard from "@/components/ProductCard";
import postreImage from "@/assets/postre_1.jpg";
import postreImage2 from "@/assets/velaframbuesa_1.jpg";
import mugsImage from "@/assets/custom-mugs.jpg";
import cactusImage from "@/assets/velacactus_1.jpg";
import cactuspImage from "@/assets/velapcatus_2.jpg";
import duodImage from "@/assets/veladuo_1.jpg";
import margaritaImage from "@/assets/velamagarita_1.jpg";
import envaseImage from "@/assets/velaenvase_1.jpg";
import flopImage from "@/assets/velaflop_1.jpg";


const CatalogPage = () => {
  const products = [
    {
      id: 1,
      name: "Cactus de 85 ml",
      price: 45,
      image: cactuspImage,
      icon: "🌵",
      description: "Vela aromática en forma de cactus, perfecta para decorar cualquier espacio.",
      imagePosition: "center 40%"
    },
    {
      id: 2,
      name: "Tipo postre de 135 ml",
      price: 70,
      image: postreImage,
      icon: "🧁",
      description: "Vela decorativa con apariencia de postre delicioso y aroma dulce.",
      imagePosition: "right 50%"
    },
    {
      id: 3,
      name: "Cactus grande",
      price: 50,
      image: cactusImage,
      icon: "🌵",
      description: "Versión grande de nuestra popular vela cactus con mayor duración.",
      imagePosition: "center 30%"
    },
    {
      id: 4,
      name: "Vela postre con frambuesas",
      price: 60,
      image: postreImage2,
      icon: "🍓",
      description: "Exquisita vela con aroma a frambuesas y decoración realista."
    },
    {
      id: 5,
      name: "Dúo de peonias",
      price: 75,
      image: duodImage,
      icon: "🌸",
      description: "Set de dos velas con delicado aroma floral de peonias."
    },
    {
      id: 6,
      name: "Margarita arreglada",
      price: 20,
      image: margaritaImage,
      icon: "🌼",
      description: "Pequeña vela decorativa con forma de margarita."
    },
    {
      id: 7,
      name: "Vela en envase 130 ml",
      price: 65,
      image: envaseImage,
      icon: "🕯️",
      description: "Vela clásica en envase de vidrio elegante, larga duración."
    },
    {
      id: 8,
      name: "Flor Peonia",
      price: 40,
      image: flopImage,
      icon: "🌸",
      description: "Vela individual con forma de peonia y aroma suave."
    },
    {
      id: 9,
      name: "Margarita individual",
      price: 12,
      image: mugsImage,
      icon: "🌼",
      description: "Mini vela decorativa perfecta como detalle o regalo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Catalog Header */}
      <CatalogHeader />
      
      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre nuestra colección de velas artesanales, cada una creada con amor y dedicación 
              para llenar tu hogar de aromas únicos y belleza natural.
            </p>
          </div>
          
          <div className="grid gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  icon={product.icon}
                  description={product.description}
                  imagePosition={product.imagePosition}
                />
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              ¿Buscas algo especial?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              También creamos velas personalizadas y diseños únicos para ocasiones especiales. 
              ¡Contáctanos para crear algo especial solo para ti!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-primary hover:bg-gold text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm hover:shadow-md">
                Solicitar Personalización
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                Ver Más Productos
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CatalogPage;