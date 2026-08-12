/* =========================================================================
   TORRE BLU — LÓGICA DEL SITIO
   ========================================================================= */

document.getElementById("year").textContent = new Date().getFullYear();

/* -------------------------------------------------------------------------
   Fallback de imágenes: si una foto real aún no existe en /assets, se
   muestra un placeholder con el nombre esperado en lugar de un ícono roto.
   Se usa vía onerror="handleImgFallback(this, 'Etiqueta')" en el HTML/JS.
   ------------------------------------------------------------------------- */
function handleImgFallback(imgEl, label) {
  imgEl.onerror = null;
  const wrap = document.createElement("div");
  wrap.className = "img-fallback";
  wrap.textContent = label || "Imagen próximamente";
  imgEl.replaceWith(wrap);
}
window.handleImgFallback = handleImgFallback;

/* -------------------------------------------------------------------------
   Fallback de video del hero: si el archivo de video aún no existe,
   se muestra un fondo alternativo en vez de una pantalla negra.
   ------------------------------------------------------------------------- */
(function initHeroVideo() {
  const hero = document.getElementById("hero");
  const video = document.getElementById("heroVideo");
  if (!video || !hero) return;

  const showFallback = () => hero.classList.add("video-fallback");

  video.addEventListener("error", showFallback);
  video.querySelectorAll("source").forEach(s => s.addEventListener("error", showFallback));

  // Si tras un breve intento no hay datos cargados, asumimos que falta el archivo.
  setTimeout(() => {
    if (video.readyState === 0) showFallback();
  }, 1800);
})();

/* -------------------------------------------------------------------------
   Header: fondo sólido al hacer scroll + menú móvil
   ------------------------------------------------------------------------- */
(function initHeader() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* -------------------------------------------------------------------------
   Reveal on scroll
   ------------------------------------------------------------------------- */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  els.forEach(el => observer.observe(el));
})();

/* -------------------------------------------------------------------------
   Íconos de amenidades (línea, minimal, sin dependencias externas)
   ------------------------------------------------------------------------- */
const amenityIcons = {
  lobby: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 42h36M9 42V18l15-9 15 9v24M17 42V24h14v18"/></svg>',
  building: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10 42V8h20v34M30 42V18h8v24M10 42h28M15 14h4M15 22h4M15 30h4M21 14h4M21 22h4M21 30h4"/></svg>',
  elevator: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="10" y="7" width="28" height="34"/><path d="M20 16l4-4 4 4M20 26l4 4 4-4" /></svg>',
  elevator2: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="8" y="7" width="14" height="34"/><rect x="26" y="7" width="14" height="34"/><path d="M12 20l3-3 3 3M32 20l3-3 3 3"/></svg>',
  ac: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="6" y="14" width="36" height="12" rx="2"/><path d="M14 26v6M22 26v9M26 26v6M34 26v9"/></svg>',
  power: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M26 4L12 27h10l-4 17 20-26H26z"/></svg>',
  helipad: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="24" cy="24" r="18"/><path d="M16 15v18M32 15v18M16 24h16M16 15h6M16 33h6M26 15h6M26 33h6"/></svg>',
  blinds: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 8h32M8 15h32M8 22h32M8 29h32M8 36h32"/></svg>',
  view: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 34l12-14 8 8 8-11 12 17"/><path d="M4 40h40"/></svg>'
};

/* -------------------------------------------------------------------------
   Render: Amenidades
   ------------------------------------------------------------------------- */
(function renderAmenities() {
  const grid = document.getElementById("amenitiesGrid");
  if (!grid || typeof amenitiesData === "undefined") return;

  grid.innerHTML = amenitiesData.map(item => `
    <div class="amenity-card">
      <div class="amenity-icon">${amenityIcons[item.icon] || ""}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");
})();

/* -------------------------------------------------------------------------
   Render: Oficinas disponibles
   ------------------------------------------------------------------------- */
function renderOfficeCarousel(office) {
  const fotos = office.fotos && office.fotos.length ? office.fotos : [""];
  const hasMultiple = fotos.length > 1;

  const slides = fotos.map(src => {
    const isPlan = office.plano && src === office.plano;
    const alt = isPlan ? `Plano de la oficina, ${office.piso}, Torre Blu` : `Oficina en renta, ${office.piso}, Torre Blu`;
    return `
    <div class="carousel-slide${isPlan ? " carousel-slide--plan" : ""}">
      <img src="${src}" alt="${alt}"
           onerror="handleImgFallback(this, '${office.piso.replace(/'/g, "")}')" loading="lazy">
    </div>
  `;
  }).join("");

  const arrows = hasMultiple ? `
    <button type="button" class="carousel-arrow carousel-prev" aria-label="Foto anterior">&#8249;</button>
    <button type="button" class="carousel-arrow carousel-next" aria-label="Foto siguiente">&#8250;</button>
  ` : "";

  const dots = hasMultiple ? `
    <div class="carousel-dots">
      ${fotos.map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Ir a foto ${i + 1}"></button>`).join("")}
    </div>
  ` : "";

  return `
    <div class="office-photo" data-carousel>
      ${office.destacada ? '<span class="office-badge">Destacada</span>' : ""}
      <span class="office-status">${office.estado}</span>
      <div class="carousel-track">${slides}</div>
      ${arrows}
      ${dots}
    </div>
  `;
}

function initOfficeCarousels(scope) {
  scope.querySelectorAll("[data-carousel]").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slideCount = carousel.querySelectorAll(".carousel-slide").length;
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const dots = carousel.querySelectorAll(".carousel-dot");
    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    }
    function goTo(i) {
      index = (i + slideCount) % slideCount;
      update();
    }

    prevBtn?.addEventListener("click", (e) => { e.stopPropagation(); goTo(index - 1); });
    nextBtn?.addEventListener("click", (e) => { e.stopPropagation(); goTo(index + 1); });
    dots.forEach((dot, i) => dot.addEventListener("click", (e) => { e.stopPropagation(); goTo(i); }));
  });
}

(function renderOffices() {
  const grid = document.getElementById("oficinasGrid");
  if (!grid || typeof officesData === "undefined") return;

  grid.innerHTML = officesData.map(office => `
      <article class="office-card" data-office-id="${office.id}">
        ${renderOfficeCarousel(office)}
        <div class="office-body">
          <div class="office-title-row">
            <h3>${office.piso}</h3>
            <span class="office-surface">${office.superficie} m²</span>
          </div>
          <div class="office-price">
            <span class="price-value">USD $${office.precioM2}</span>
            <span class="price-unit">/ m² / mes</span>
          </div>
          <div class="office-features">
            ${office.caracteristicas.map(f => `<span>${f}</span>`).join("")}
          </div>
          <div class="office-actions">
            <button class="btn btn--primary btn--sm" data-open-office="${office.id}">Solicitar información</button>
          </div>
        </div>
      </article>
    `).join("");

  initOfficeCarousels(grid);

  grid.querySelectorAll("[data-open-office]").forEach(btn => {
    btn.addEventListener("click", () => openOfficeModal(btn.getAttribute("data-open-office")));
  });
})();

/* -------------------------------------------------------------------------
   Modal de oficina
   ------------------------------------------------------------------------- */
function openOfficeModal(officeId) {
  const office = officesData.find(o => String(o.id) === String(officeId));
  if (!office) return;

  const modal = document.getElementById("officeModal");
  const body = document.getElementById("modalBody");
  const cover = office.fotos && office.fotos[0] ? office.fotos[0] : "";

  body.innerHTML = `
    <div class="modal-gallery">
      <img src="${cover}" alt="Oficina en renta, ${office.piso}, Torre Blu"
           onerror="handleImgFallback(this, '${office.piso.replace(/'/g, "")}')">
    </div>
    <div class="modal-info">
      <p class="eyebrow" style="margin-bottom:0;">${office.estado}</p>
      <h3 id="modalTitle">${office.piso}</h3>
      <div class="office-price">
        <span class="price-value">USD $${office.precioM2}</span>
        <span class="price-unit">/ m² / mes</span>
      </div>
      <p class="section-lead" style="font-size:0.95rem;">
        Superficie: <strong>${office.superficie} m²</strong> · ${office.estado === "Acondicionada con muebles" ? "Se conserva mobiliario y distribución actual." : office.estado === "Planta libre" ? "Se entrega en planta libre." : "Se entrega acondicionada, sin mobiliario."}
      </p>
      <div class="office-features">
        ${office.caracteristicas.map(f => `<span>${f}</span>`).join("")}
      </div>
      ${office.plano ? `<a class="modal-plan-link" href="${office.plano}" target="_blank" rel="noopener">Ver plano de la oficina &rarr;</a>` : ""}
      <button class="btn btn--primary btn--full" id="modalRequestBtn">Solicitar información</button>
    </div>
  `;

  document.getElementById("modalRequestBtn").addEventListener("click", () => {
    closeOfficeModal();
    document.getElementById("oficinaInteres").value = office.piso;
    document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("nombre")?.focus(), 500);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeOfficeModal() {
  const modal = document.getElementById("officeModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeOfficeModal);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOfficeModal();
});

/* -------------------------------------------------------------------------
   Render: Galería + Lightbox
   ------------------------------------------------------------------------- */
let galleryImages = [];
let lightboxIndex = 0;

(function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid || typeof galleryData === "undefined") return;

  galleryImages = galleryData;

  grid.innerHTML = galleryData.map((item, i) => `
    <div class="gallery-item${item.esPlano ? " gallery-item--plan" : ""}" data-index="${i}">
      <img src="${item.src}" alt="Torre Blu — ${item.categoria}"
           onerror="handleImgFallback(this, '${item.categoria}')" loading="lazy">
      <span class="gallery-tag">${item.categoria}</span>
    </div>
  `).join("");

  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(Number(el.getAttribute("data-index"))));
  });
})();

function openLightbox(index) {
  lightboxIndex = index;
  updateLightboxImage();
  const lb = document.getElementById("lightbox");
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function updateLightboxImage() {
  const item = galleryImages[lightboxIndex];
  const img = document.getElementById("lightboxImg");
  img.src = item.src;
  img.alt = `Torre Blu — ${item.categoria}`;
  img.onerror = () => handleImgFallbackInline(img, item.categoria);
}
function handleImgFallbackInline(img, label) {
  img.onerror = null;
  img.src = "";
  img.alt = label;
}

document.getElementById("lightboxNext").addEventListener("click", () => {
  lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
  updateLightboxImage();
});
document.getElementById("lightboxPrev").addEventListener("click", () => {
  lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
});
document.querySelectorAll("[data-close-lightbox]").forEach(el => {
  el.addEventListener("click", closeLightbox);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (!document.getElementById("lightbox").classList.contains("is-open")) return;
  if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
});

/* -------------------------------------------------------------------------
   Datos de contacto (teléfono / correo) desde offices-data.js
   ------------------------------------------------------------------------- */
(function fillContactDetails() {
  if (typeof contactData === "undefined") return;
  const phoneEl = document.querySelector('[data-fill="phone"]');
  const emailEl = document.querySelector('[data-fill="email"]');
  if (phoneEl && contactData.telefono) phoneEl.textContent = contactData.telefono;
  if (emailEl && contactData.email) emailEl.textContent = contactData.email;
})();

/* -------------------------------------------------------------------------
   Formulario de contacto
   -------------------------------------------------------------------------
   El formulario valida los campos en el cliente y está listo para
   conectarse a un backend o servicio de formularios (p. ej. Formspree,
   un endpoint propio, etc.). Sustituye el bloque marcado abajo por el
   envío real (fetch a tu API) cuando tengas el endpoint definido.
   ------------------------------------------------------------------------- */
(function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const note = document.getElementById("formNote");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    note.textContent = "";
    note.className = "form-note";

    const requiredFields = form.querySelectorAll("[required]");
    let valid = true;
    requiredFields.forEach(field => {
      const isValid = field.checkValidity();
      field.classList.toggle("invalid", !isValid);
      if (!isValid) valid = false;
    });

    if (!valid) {
      note.textContent = "Por favor completa los campos obligatorios correctamente.";
      note.classList.add("error");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    /* ---- Punto de integración con backend / servicio de formularios ----
       Ejemplo con Formspree:

       await fetch("https://formspree.io/f/TU_ID", {
         method: "POST",
         headers: { "Accept": "application/json" },
         body: new FormData(form)
       });
    ------------------------------------------------------------------- */

    console.log("Solicitud de información — Torre Blu:", data);

    note.textContent = "¡Gracias! Hemos recibido tu solicitud, un asesor te contactará muy pronto.";
    note.classList.add("success");
    form.reset();
  });
})();
