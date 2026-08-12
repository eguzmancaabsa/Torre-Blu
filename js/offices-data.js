/* =========================================================================
   TORRE BLU — DATOS DEL SITIO
   -------------------------------------------------------------------------
   Este archivo concentra toda la información editable del sitio:
   amenidades, oficinas disponibles y galería de imágenes.

   Para AGREGAR, QUITAR o MODIFICAR una oficina, edita el arreglo
   `officesData` de abajo. Cada objeto es una tarjeta independiente:
   duplica un bloque { ... } para agregar una oficina nueva, o elimínalo
   para quitarla del sitio. No se requiere tocar HTML ni CSS.
   ========================================================================= */

/* -------------------------------------------------------------------------
   AMENIDADES DE LA TORRE
   Edita, agrega o quita elementos de este arreglo para actualizar la
   sección "Torre Blu".
   ------------------------------------------------------------------------- */
const amenitiesData = [
  { icon: "lobby",     title: "Motor Lobby",        desc: "Acceso vehicular exclusivo con la misma calidad arquitectónica del lobby principal." },
  { icon: "building",  title: "Lobby corporativo",   desc: "Recepción de doble altura con acabados de primer nivel." },
  { icon: "elevator",  title: "Elevadores inteligentes", desc: "Sistema de destino que optimiza los tiempos de traslado en horas pico." },
  { icon: "elevator2", title: "Elevadores para ejecutivos", desc: "Acceso diferenciado y ágil para directivos y visitas." },
  { icon: "ac",        title: "Aire acondicionado",  desc: "Climatización central en todas las áreas de oficina." },
  { icon: "power",     title: "Plantas eléctricas",  desc: "Respaldo de energía para oficinas y áreas comunes." },
  { icon: "helipad",   title: "Helipuerto",          desc: "Disponible con costo adicional." },
  { icon: "blinds",    title: "Persianas",           desc: "Control de luz natural en todas las oficinas." },
  { icon: "view",      title: "Vistas panorámicas",  desc: "Ventanales de piso a techo con vistas abiertas de Santa Fe." }
];

/* -------------------------------------------------------------------------
   OFICINAS DISPONIBLES
   -------------------------------------------------------------------------
   Campos:
   - id            : identificador único (texto o número), sin espacios.
   - piso          : piso del edificio, ej. "Piso 8".
   - superficie    : superficie rentable en m², solo número.
   - precioM2      : precio por m² en USD/mes (por defecto 22 para todas).
   - estado        : únicamente uno de estos tres valores exactos —
                      "Acondicionada con muebles" | "Acondicionada sin muebles" | "Planta libre".
   - caracteristicas: arreglo de textos cortos (features de esa oficina).
   - fotos         : arreglo de rutas de imagen (assets/images/oficinas/...).
   - plano         : ruta de imagen del plano (assets/images/planos/...).
   - destacada     : true/false — resalta la tarjeta con una etiqueta.
   ------------------------------------------------------------------------- */
const officesData = [
  {
    id: "piso-8",
    piso: "Piso 8 (Con terraza)",
    superficie: 1248,
    precioM2: 22,
    estado: "Acondicionada con muebles",
    caracteristicas: ["55 m² de terraza", "Aire acondicionado", "41 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-8-01.jpg",
      "assets/images/oficinas/piso-8-02.jpg",
      "assets/images/oficinas/piso-8-03.jpg",
      "assets/images/oficinas/piso-8-04.jpg",
      "assets/images/oficinas/piso-8-05.jpg",
      "assets/images/oficinas/piso-8-06.jpg",
      "assets/images/oficinas/piso-8-07.jpg",
      "assets/images/oficinas/piso-8-08.jpg",
      "assets/images/oficinas/piso-8-09.jpg",
      "assets/images/oficinas/piso-8-10.jpg",
      "assets/images/planos/piso-8-14-plano.jpg"
    ],
    plano: "assets/images/planos/piso-8-14-plano.jpg",
    destacada: true
  },
  {
    id: "piso-9",
    piso: "Piso 9",
    superficie: 1248,
    precioM2: 22,
    estado: "Acondicionada con muebles",
    caracteristicas: ["Aire acondicionado", "41 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-9-01.jpg",
      "assets/images/oficinas/piso-9-02.jpg",
      "assets/images/oficinas/piso-9-03.jpg",
      "assets/images/oficinas/piso-9-04.jpg",
      "assets/images/oficinas/piso-9-05.jpg",
      "assets/images/oficinas/piso-9-06.jpg",
      "assets/images/oficinas/piso-9-07.jpg",
      "assets/images/oficinas/piso-9-08.jpg",
      "assets/images/oficinas/piso-9-09.jpg",
      "assets/images/oficinas/piso-9-10.jpg",
      "assets/images/planos/piso-9-11-13-plano.jpg"
    ],
    plano: "assets/images/planos/piso-9-11-13-plano.jpg",
    destacada: false
  },
  {
    id: "piso-11",
    piso: "Piso 11",
    superficie: 1248,
    precioM2: 22,
    estado: "Acondicionada con muebles",
    caracteristicas: ["Aire acondicionado", "41 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-11-01.jpg",
      "assets/images/oficinas/piso-11-02.jpg",
      "assets/images/oficinas/piso-11-03.jpg",
      "assets/images/oficinas/piso-11-04.jpg",
      "assets/images/oficinas/piso-11-05.jpg",
      "assets/images/oficinas/piso-11-06.jpg",
      "assets/images/oficinas/piso-11-07.jpg",
      "assets/images/oficinas/piso-11-08.jpg",
      "assets/images/oficinas/piso-11-09.jpg",
      "assets/images/oficinas/piso-11-10.jpg",
      "assets/images/planos/piso-9-11-13-plano.jpg"
    ],
    plano: "assets/images/planos/piso-9-11-13-plano.jpg",
    destacada: false
  },
  {
    id: "piso-12-7-1",
    piso: "Piso 12 (7.1)",
    superficie: 131.49,
    precioM2: 22,
    estado: "Planta libre",
    caracteristicas: ["Aire acondicionado", "4 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-12-7-1-01.jpg",
      "assets/images/oficinas/piso-12-7-1-02.jpg",
      "assets/images/oficinas/piso-12-7-1-03.jpg",
      "assets/images/oficinas/piso-12-7-1-04.jpg",
      "assets/images/oficinas/piso-12-7-1-05.jpg",
      "assets/images/oficinas/piso-12-7-1-06.jpg"
    ],
    plano: "assets/images/planos/piso-12-7-1-plano.jpg", // TODO: cargar plano real
    destacada: false
  },
  {
    id: "piso-12-7-2",
    piso: "Piso 12 (7.2)",
    superficie: 271.56,
    precioM2: 22,
    estado: "Acondicionada sin muebles",
    caracteristicas: ["Aire acondicionado", "9 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-12-7-2-01.jpg",
      "assets/images/oficinas/piso-12-7-2-02.jpg",
      "assets/images/oficinas/piso-12-7-2-03.jpg",
      "assets/images/oficinas/piso-12-7-2-04.jpg"
    ],
    plano: "assets/images/planos/piso-12-7-2-plano.jpg", // TODO: cargar plano real
    destacada: false
  },
  {
    id: "piso-13",
    piso: "Piso 13",
    superficie: 1248,
    precioM2: 22,
    estado: "Acondicionada sin muebles",
    caracteristicas: ["Aire acondicionado", "41 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-13-01.jpg",
      "assets/images/oficinas/piso-13-02.jpg",
      "assets/images/oficinas/piso-13-03.jpg",
      "assets/images/oficinas/piso-13-04.jpg",
      "assets/images/oficinas/piso-13-05.jpg",
      "assets/images/oficinas/piso-13-06.jpg",
      "assets/images/oficinas/piso-13-07.jpg",
      "assets/images/oficinas/piso-13-08.jpg",
      "assets/images/oficinas/piso-13-09.jpg",
      "assets/images/planos/piso-9-11-13-plano.jpg"
    ],
    plano: "assets/images/planos/piso-9-11-13-plano.jpg",
    destacada: false
  },
  {
    id: "piso-14",
    piso: "Piso 14 (Con terraza)",
    superficie: 1248,
    precioM2: 22,
    estado: "Acondicionada con muebles",
    caracteristicas: ["55 m² de terraza", "Aire acondicionado", "41 cajones de estacionamiento", "Mantenimiento $90 MXN/m²/mes", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/piso-14-01.jpg",
      "assets/images/oficinas/piso-14-02.jpg",
      "assets/images/oficinas/piso-14-03.jpg",
      "assets/images/oficinas/piso-14-04.jpg",
      "assets/images/oficinas/piso-14-05.jpg",
      "assets/images/oficinas/piso-14-06.jpg",
      "assets/images/planos/piso-8-14-plano.jpg"
    ],
    plano: "assets/images/planos/piso-8-14-plano.jpg",
    destacada: false
  }
];

/* -------------------------------------------------------------------------
   GALERÍA
   Agrega o quita imágenes de este arreglo para actualizar la sección
   "Galería". `categoria` se usa solo como etiqueta visible.
   ------------------------------------------------------------------------- */
const galleryData = [
  { src: "assets/images/galeria/fachada-01.jpg", categoria: "Fachada" },
  { src: "assets/images/galeria/fachada-02.jpg", categoria: "Fachada" },
  { src: "assets/images/galeria/lobby-01.jpg", categoria: "Lobby" },
  { src: "assets/images/galeria/lobby-02.jpg", categoria: "Lobby" },
  { src: "assets/images/galeria/lobby-03.jpg", categoria: "Lobby" },
  { src: "assets/images/galeria/motor-lobby-01.jpg", categoria: "Motor Lobby" },
  { src: "assets/images/galeria/vista-01.jpg", categoria: "Vistas" },
  { src: "assets/images/galeria/vista-02.jpg", categoria: "Vistas" }
];

/* -------------------------------------------------------------------------
   DATOS DE CONTACTO
   ------------------------------------------------------------------------- */
const contactData = {
  telefono: "+52 55 4464 7595",
  email: "imagen@ancore.mx",
  whatsapp: "525544647595" // Solo dígitos, con código de país. Actualiza en index.html también.
};
