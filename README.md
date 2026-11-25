# Gestor documental interno
Aplicación estática para generar registros no oficiales en PDF y DOCX. No incluye documentos de terceros, sellos, QR de acceso ni datos de ejemplo reales.

## Ejecutar
1. Extraer el ZIP.
2. Abrir index.html en un navegador moderno con conexión a Internet para cargar jsPDF y DOCX.js. Alternativamente, ejecutar `python -m http.server 8000` desde esta carpeta y abrir http://localhost:8000.
3. Elegir categoría, completar nombre y fecha, revisar y descargar.

## GitHub Pages
Crear un repositorio, subir todos los archivos de esta carpeta a la raíz de la rama main. En Settings > Pages seleccionar Deploy from a branch, main y / (root), guardar. Abrir la URL que GitHub muestre.

## Archivos
- index.html: interfaz
- styles.css: diseño
- templates.js: categorías y campos
- app.js: formulario, vista previa y exportación
- .gitignore: exclusiones

## Privacidad y límites
No se guarda historial ni se envían los campos a un backend. Las bibliotecas se descargan desde CDN; para producción conviene alojarlas localmente y auditar dependencias. No subir datos personales ni documentos generados al repositorio. PDF usa fuentes estándar; caracteres fuera del alfabeto latino pueden requerir fuentes adicionales. Los registros no verifican información externa ni constituyen documentos oficiales.

## Pruebas manuales
Seleccionar cada categoría, probar campos obligatorios vacíos, completar nombre y fecha, probar observaciones largas, descargar PDF y DOCX, verificar contenido y encabezado no oficial.
