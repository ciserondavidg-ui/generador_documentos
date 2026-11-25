# Gestor documental interno
Aplicación estática en español, sin dependencias ni servidor. Doce fichas de trabajo inspiradas en las categorías de los documentos de referencia, sin replicar formatos oficiales ni incluir datos personales originales.

## Local
Abre `index.html` directamente o ejecuta `python -m http.server 8000` desde esta carpeta y visita `http://localhost:8000`.

## GitHub Pages
Crea un repositorio vacío, sube los archivos de esta carpeta a la raíz de la rama `main`. En Settings > Pages, selecciona Deploy from a branch, main, /(root), Save. La dirección aparecerá en Pages. No subas expedientes ni documentos reales al repositorio. Una web pública no ofrece autenticación.

## Uso
Selecciona la ficha, captura datos desde una fuente comprobada, confirma revisión y prepara la vista previa. Descarga Word o selecciona Imprimir / guardar PDF y elige Guardar como PDF en el diálogo del navegador. Desactiva encabezados y pies del navegador para impresión. La exportación PDF depende del navegador. Cambiar un campo invalida la vista previa. No se guarda historial ni se envía información a servidores. Cerrar o recargar elimina la captura (salvo posibles mecanismos propios del navegador).

## Archivos
- index.html: interfaz
- style.css: pantalla e impresión
- templates.js: catálogo y esquema de campos
- app.js: validación, vista previa y descarga
- docx.js: generador OOXML y ZIP

## Límites
No es un portal judicial y no valida expedientes, firmas, QR ni fuentes. No emite actos de autoridad ni consulta registros públicos. Los datos capturados deben revisarse. Utiliza los documentos auténticos sin alterarlos, por los canales autorizados. La revisión jurídica y las pruebas en el navegador objetivo son necesarias antes del uso operativo. No incorpora los originales ni datos de terceros.
