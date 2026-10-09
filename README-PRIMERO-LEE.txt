TU WEB - INSTRUCCIONES SENCILLAS

IMPORTANTE
- La web tiene productos de ejemplo y precios ficticios. Cámbialos antes de compartir el enlace.
- No se cobra desde la web. El cliente consulta por WhatsApp; ustedes confirman disponibilidad y envío y luego envían instrucciones de Yape.
- Este paquete no incluye un panel visual. Para esta primera versión se edita el archivo products.js. Más adelante se puede añadir un panel fácil.

ARCHIVOS
- index.html: estructura y textos.
- styles.css: diseño y colores.
- products.js: productos, precios, imágenes, nombre y número de WhatsApp.
- app.js: funcionamiento de filtros, selección y WhatsApp.

ANTES DE PUBLICAR
1. Abre products.js en un editor de texto.
2. Cambia CONFIG.whatsapp por tu número de ventas peruano: 51 + número de celular, sin +, espacios ni guiones. Ejemplo de formato: 51987654321.
3. Cambia CONFIG.nombre por el nombre real de la marca o de tu novia.
4. Cambia los productos de ejemplo por productos reales y precios actuales.
5. Si quieres fotos, pega una URL pública de imagen en el campo imagen. Si lo dejas vacío, aparece un corazón de reemplazo.
6. Guarda todos los archivos juntos en la misma carpeta.

PUBLICACIÓN GRATIS SUGERIDA
GitHub puede guardar el código, pero GitHub Pages no permite usar su alojamiento gratuito para una web cuyo objetivo principal sea el comercio electrónico. Para publicarla, conecta el repositorio a Cloudflare Pages u otro alojamiento estático cuyo uso permitido se ajuste a tu actividad. El plan gratuito de Cloudflare Pages publica sitios estáticos y se conecta con un repositorio Git.

PASOS GENERALES
1. Crea una cuenta en github.com.
2. Crea un repositorio nuevo llamado "web-tienda".
3. Sube los cuatro archivos de esta carpeta al repositorio.
4. Crea una cuenta en Cloudflare y abre Workers & Pages.
5. Crea un proyecto Pages conectado al repositorio "web-tienda".
6. Selecciona la rama principal y publica los archivos estáticos (sin comando de build; carpeta raíz como directorio de salida, si se solicita).
7. Usa la URL de prueba que te asigne Cloudflare y abre en el celular.
8. Prueba añadir productos y el botón de WhatsApp antes de compartir el enlace.

EDICIÓN FUTURA
Cuando quieras cambiar productos, edita products.js desde GitHub, guarda los cambios y espera a que el sitio se vuelva a publicar. No necesitas modificar styles.css ni app.js para actualizar precios o productos.

SEGURIDAD
No pongas contraseñas, datos de clientes ni información privada en los archivos del repositorio público.
