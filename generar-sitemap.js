const fs = require('fs');
const path = require('path');

// --- CONFIGURACIÓN ---
const DOMINIO = 'https://gi2t.org'; // Tu dominio real
const ROUTES_FILE = './routes.txt';
// En Angular 21, la carpeta pública es 'public/' en la raíz
const OUTPUT_FILE = './public/sitemap.xml';

// --- LÓGICA ---
try {
    // 1. Leer las rutas
    const data = fs.readFileSync(ROUTES_FILE, 'utf8');
    const rutas = data.split('\n').map(r => r.trim()).filter(r => r !== '');

    // 2. Encabezado del XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // 3. Generar cada URL
    const fechaHoy = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    rutas.forEach(ruta => {
        // Asegurar que la ruta empiece con /
        const rutaClean = ruta.startsWith('/') ? ruta : `/${ruta}`;

        // Prioridad: 1.0 para el home, 0.8 para el resto
        const prioridad = rutaClean === '/' ? '1.0' : '0.8';

        xml += `  <url>
    <loc>${DOMINIO}${rutaClean}</loc>
    <lastmod>${fechaHoy}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${prioridad}</priority>
  </url>\n`;
    });

    // 4. Cierre del XML
    xml += `</urlset>`;

    // 5. Guardar el archivo
    // Asegurar que el directorio existe
    const dir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, xml);
    console.log(`✅ Sitemap generado correctamente en: ${OUTPUT_FILE}`);
    console.log(`   Total de URLs incluidas: ${rutas.length}`);

} catch (err) {
    console.error('❌ Error generando el sitemap:', err.message);
    console.error('   Asegúrate de tener el archivo routes.txt en la raíz.');
}
