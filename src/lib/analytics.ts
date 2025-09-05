import { track } from '@vercel/analytics';

// Función para rastrear clics en botones importantes
export const trackButtonClick = (buttonName: string, location?: string) => {
  track('button_click', {
    button: buttonName,
    location: location || 'unknown'
  });
};

// Función para rastrear navegación a secciones
export const trackSectionView = (sectionName: string) => {
  track('section_view', {
    section: sectionName
  });
};

// Función para rastrear clics en enlaces de WhatsApp
export const trackWhatsAppClick = (context: string) => {
  track('whatsapp_click', {
    context: context
  });
};

// Función para rastrear clics en enlaces de Instagram
export const trackInstagramClick = (context: string) => {
  track('instagram_click', {
    context: context
  });
};

// Función para rastrear visualización de productos
export const trackProductView = (productName: string, category: string) => {
  track('product_view', {
    product: productName,
    category: category
  });
};
