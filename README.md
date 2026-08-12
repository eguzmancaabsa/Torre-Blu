# Torre Blu

Sitio web para renta de oficinas corporativas en Torre Blu, Santa Fe, CDMX.

Sitio estático (HTML + CSS + JS, sin dependencias ni build) diseñado para
generar prospectos de empresas interesadas en rentar oficinas en Torre Blu,
Av. Salvador Agraz, Santa Fe.

## Estructura

```
index.html            Página principal (todas las secciones)
css/styles.css         Estilos del sitio
js/offices-data.js      Datos editables: amenidades, oficinas, galería, contacto
js/main.js              Lógica del sitio (render, animaciones, formulario, modal, lightbox)
assets/                 Video, fotografías y planos (ver assets/README.md)
robots.txt, sitemap.xml SEO técnico
```

## Editar oficinas disponibles

Toda la disponibilidad se administra desde **`js/offices-data.js`**, en el
arreglo `officesData`. Para agregar una oficina, copia un bloque `{ ... }` y
edítalo; para quitarla, elimina su bloque. No es necesario tocar HTML ni CSS.

Los tres registros incluidos actualmente están marcados como **EJEMPLO** y
usan datos de muestra — sustitúyelos por la información real (piso,
superficie, estado, fotos, plano) antes de publicar el sitio.

## Cargar material gráfico real

El video del hero, fotografías y planos aún no están incluidos. Revisa
`assets/README.md` para ver las rutas y nombres de archivo exactos que el
sitio espera. Mientras no se agreguen, el sitio muestra automáticamente
marcadores de posición (placeholders) en vez de romperse.

## Formulario de contacto

El formulario (`#contactForm` en `index.html`, lógica en `js/main.js`) valida
los campos en el cliente. Falta conectarlo a un backend o servicio de envío
de formularios (por ejemplo Formspree o un endpoint propio) — el punto de
integración está señalado con un comentario dentro de `initContactForm()` en
`js/main.js`.

También falta configurar:
- Número de WhatsApp real (`index.html`, botón flotante, y `whatsapp` en
  `js/offices-data.js` → `contactData`).
- Teléfono y correo de contacto (`js/offices-data.js` → `contactData`).

## Uso local

Al ser un sitio estático, basta con abrir `index.html` en un navegador o
servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```
