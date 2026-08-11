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
   ⚠️ Los registros marcados como EJEMPLO abajo usan datos de muestra para
   ilustrar el diseño de la tarjeta. Sustitúyelos por la información real
   de cada oficina (piso, superficie, estado, fotos y plano) antes de
   publicar el sitio.

   Campos:
   - id            : identificador único (texto o número), sin espacios.
   - piso          : piso del edificio, ej. "Piso 8".
   - superficie    : superficie rentable en m², solo número.
   - precioM2      : precio por m² en USD/mes (por defecto 22 para todas).
   - estado        : "Acondicionada" | "Planta libre" | "Próximamente", etc.
   - amueblada     : true/false — conserva mobiliario actual.
   - caracteristicas: arreglo de textos cortos (features de esa oficina).
   - fotos         : arreglo de rutas de imagen (assets/images/oficinas/...).
   - plano         : ruta de imagen del plano (assets/images/planos/...).
   - destacada     : true/false — resalta la tarjeta con una etiqueta.
   ------------------------------------------------------------------------- */
const officesData = [
  {
    id: "piso-8",
    piso: "Piso 8",
    superficie: 180, // TODO: confirmar superficie real
    precioM2: 22,
    estado: "Acondicionada", // TODO: confirmar estado real
    amueblada: true,
    caracteristicas: ["Sala de juntas", "Recepción", "Cubículos", "Vista panorámica"], // TODO: confirmar características reales
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
      "assets/images/oficinas/piso-8-10.jpg"
    ],
    plano: "assets/images/planos/piso-8-plano.jpg", // TODO: cargar plano real
    destacada: true
  },
  {
    id: "ejemplo-02",
    piso: "Piso 12 (EJEMPLO)",
    superficie: 260,
    precioM2: 22,
    estado: "Planta libre",
    amueblada: false,
    caracteristicas: ["Planta libre", "Lista para personalizar", "Vista panorámica"],
    fotos: [
      "assets/images/oficinas/ejemplo-02-a.jpg"
    ],
    plano: "assets/images/planos/ejemplo-02-plano.jpg",
    destacada: false
  },
  {
    id: "ejemplo-03",
    piso: "Piso 15 (EJEMPLO)",
    superficie: 95,
    precioM2: 22,
    estado: "Acondicionada",
    amueblada: true,
    caracteristicas: ["Oficina privada", "Sala de espera", "Cocineta"],
    fotos: [
      "assets/images/oficinas/ejemplo-03-a.jpg"
    ],
    plano: "assets/images/planos/ejemplo-03-plano.jpg",
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
  { src: "assets/images/galeria/lobby-01.jpg", categoria: "Lobby" },
  { src: "assets/images/galeria/motor-lobby-01.jpg", categoria: "Motor Lobby" },
  { src: "assets/images/galeria/oficina-01.jpg", categoria: "Oficinas" },
  { src: "assets/images/galeria/vista-01.jpg", categoria: "Vistas" },
  { src: "assets/images/galeria/areas-comunes-01.jpg", categoria: "Áreas comunes" },
  { src: "assets/images/galeria/fachada-02.jpg", categoria: "Fachada" },
  { src: "assets/images/galeria/oficina-02.jpg", categoria: "Oficinas" }
];

/* -------------------------------------------------------------------------
   DATOS DE CONTACTO
   ------------------------------------------------------------------------- */
const contactData = {
  telefono: "+52 55 4464 7595",
  email: "imagen@ancore.mx",
  whatsapp: "525544647595" // Solo dígitos, con código de país. Actualiza en index.html también.
};
