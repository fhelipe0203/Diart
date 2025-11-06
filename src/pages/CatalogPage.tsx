import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogHeader from "@/components/CatalogHeader";
import ProductCard from "@/components/ProductCard";
import postreImage from "@/assets/postre_1.jpg";
import postreImage2 from "@/assets/velaframbuesa_1.jpg";
import cactusImage from "@/assets/velacactus_1.jpg";
import cactuspImage from "@/assets/velapcatus_2.jpg";
import duodImage from "@/assets/veladuo_1.jpg";
import margaritaImage from "@/assets/velamagarita_1.jpg";
import envaseImage from "@/assets/velaenvase_1.jpg";
import flopImage from "@/assets/velaflop_1.jpg";
import llaveroImage from "@/assets/llavero.jpg";
import imaneImage from "@/assets/imanes.jpg";
import tazaImage from "@/assets/taza_1.png";
import canetImage from "@/assets/caneta.jpg";
import mascotaImage from "@/assets/mascota.jpg";
import mascotaImage1 from "@/assets/mascota1.jpg";
import ceniceroImage from "@/assets/cenicero.jpg";
import sublimacionImage from "@/assets/sublimacion.jpg"
import stickerImage from "@/assets/sticker.jpg"
import corazonesImage from "@/assets/corazosubliminado.jpg"
import camisaImage from "@/assets/camisa.jpg"
import retratoImage from "@/assets/retratoresina.jpg"
import llaveroRedendoImage from "@/assets/llaveroredendo.jpg"
import llaveroLetraImage from "@/assets/llaveroletra.jpg"
import subliImage from "@/assets/subli.jpg"

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
      name: "Taza Personalizada",
      price: 60,
      image: tazaImage,
      icon: "☕",
      description: "Disfruta de tu bebida favorita en una taza única con tu foto o diseño especial. El obsequio ideal para sorprender en cualquier ocasión."
    },
    {
      id: 10,
      name: "Llavero Personalizado con Foto",
      price: 25,
      image: llaveroImage,
      icon: "✨",
      description: "Perfecto como detalle o regalo. Inmortaliza tus recuerdos más preciados y llévalos siempre contigo con nuestros llaveros personalizados.",   
    },
    {
      id: 11,
      name: "Imanes Personalizados",
      price: 22,
      image: imaneImage,
      icon: "🧲",
      description: "Convierte tus fotos favoritas en imanes únicos. Son perfectos para decorar tu nevera y tener tus mejores recuerdos siempre a la vista. Un detalle ideal para regalar.",   
    },
    {
      id: 12,
      name: "Bolígrafo de Resina Personalizado",
      price: 45,
      image: canetImage,
      icon: "🖊️",
      description: "Un detalle único, hecho a mano y personalizado.",   
    },
    {
      id: 13,
      name: "Placa de Identificación para Perro (Resina) Para Razas Grandes ",
      price: 35,
      image: mascotaImage,
      icon: "🐶",
      description: "Convierte tu mascota en un elemento único de tu hogar. Ofrece un toque especial y personalizado a tu compañero de cuatro patas.",   
    },
    {
      id: 14,
      name: "Placa de Identificación Premium para Mascotas Para Razas Pequeñas",
      price: 30,
      image: mascotaImage1,
      icon: "🐱",
      description: "Convierte tu mascota en un elemento único de tu hogar. Ofrece un toque especial y personalizado a tu compañero de cuatro patas.",   
    },
    {
      id: 15,
      name: "Cenicero Personalizado",
      price: 80,
      image: ceniceroImage,
      icon: "🕯️",
      description: "Un cenicero único, hecho a mano y personalizado. Es perfecto para decorar tu hogar con un toque especial.",   
    },
    {
      id: 16,
      name: "Sublimación Personalizada",
      price: 65,
      image: sublimacionImage,
      icon: "🎨",
      description: "Diseña tu propio sublimado. Un toque único y personalizado para cada ocasión.",   
    },
    {
      id: 17,
      name: "Sticker Personalizado",
      price: 10,
      image: stickerImage,
      icon: "📝",
      description: "Diseña tu propio sticker. Valor por cada pagina de diseño.",   
    },
    {
      id: 18,
      name: "Corazones Personalizados",
      price: 65,
      image: corazonesImage,
      icon: "❤️",
      description: "Diseña tu propio set de corazones sublimados.",   
    },
    {
      id: 19,
      name: "Camisa Personalizada",
      image: camisaImage,
      icon: "👕",
      description: "Viste tus ideas. Creamos diseños únicos para ti o tu equipo, estampados con la vibrante técnica de sublimación que garantiza colores vivos y duraderos. Perfecta para eventos, regalos o simplemente para llevar un estilo 100% tuyo. ¡Pregúntanos por tu diseño!",   
    },
    {
      id: 23,
      name: "Personalización con Vinil",
      image: subliImage,
      icon: "🎨",
      description: "Diseña tu propio sublimado. Un toque único y personalizado para cada ocasión.",   
    },
    {
      id: 20,
      name: "Retrato En Resina",
      price: 80,
      image: retratoImage,
      icon: "🖼️",
      description: "Diseña tu propio retrato. Un toque único y personalizado para cada ocasión.",   
    },
    {
      id: 21,
      name: "Llavero Redondo Personalizado",
      price: 30,
      image: llaveroRedendoImage,
      icon: "✨",
      description: "Perfecto como detalle o regalo. Inmortaliza tus recuerdos más preciados y llévalos siempre contigo con nuestros llaveros personalizados.",   
    },
    {
      id: 22,
      name: "Llavero Letra Personalizado",
      price: 40,
      image: llaveroLetraImage,
      icon: "✨",
      description: "Perfecto como detalle o regalo. Inmortaliza tus recuerdos más preciados y llévalos siempre contigo con nuestros llaveros personalizados.",   
    },
    
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
              <button className="bg-primary hover:bg-gold text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
              onClick={() => window.open("https://wa.me/584249267948?text=Hola%20quiero%20más%20información%20Diart")}>
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