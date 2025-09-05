# Despliegue en Vercel con Analytics

## Pasos para desplegar el proyecto Diart con Vercel Web Analytics

### 1. Preparar el proyecto
```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build
```

### 2. Desplegar en Vercel
```bash
# Iniciar sesión en Vercel
vercel login

# Desplegar el proyecto
vercel

# Para producción
vercel --prod
```

### 3. Habilitar Analytics en Vercel Dashboard
1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto "diart-lila-glow"
3. Ve a la pestaña "Analytics"
4. Haz clic en "Enable" para habilitar Web Analytics

### 4. Verificar Analytics
Una vez desplegado, puedes verificar que Analytics funciona:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Busca una petición a `/_vercel/insights/view`

### 5. Eventos personalizados configurados
El proyecto incluye tracking para:
- ✅ Clics en botones de WhatsApp
- ✅ Clics en enlaces de Instagram
- ✅ Navegación a secciones
- ✅ Visualización de productos
- ✅ Botones de "Solicitar Personalización"

### 6. Ver datos en Dashboard
Después de unos días con visitantes, podrás ver:
- Número de visitantes únicos
- Páginas más visitadas
- Eventos personalizados
- Datos de rendimiento

## Archivos de configuración
- `vercel.json` - Configuración de Vercel
- `src/lib/analytics.ts` - Funciones de tracking personalizado
- `src/main.tsx` - Integración de Analytics
