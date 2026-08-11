# Material gráfico — Torre Blu

Esta carpeta está preparada para recibir el material real de Torre Blu. Mientras
los archivos no existan, el sitio muestra automáticamente un fondo/placeholder
elegante en su lugar (no se rompe ningún diseño).

## Video del Hero

| Archivo esperado | Recomendaciones |
|---|---|
| `assets/video/torre-blu-drone.mp4` | Video de dron de Torre Blu. MP4 (H.264), 1920×1080 o superior, 10–20s, en loop, **sin audio**. Comprimir a &lt;15MB idealmente. |
| `assets/images/hero/hero-poster.jpg` | Imagen fija (poster) que se muestra mientras el video carga. |

## Torre Blu

| Archivo esperado | Uso |
|---|---|
| `assets/images/torre/fachada-01.jpg` | Fachada principal, sección "Torre Blu". |

## Oficinas disponibles

Las rutas de imagen y plano de cada oficina se definen en `js/offices-data.js`,
dentro del arreglo `officesData`. Por cada oficina puedes indicar varias fotos
(`fotos: [...]`) y un plano (`plano: "..."`). Sugerencia de nomenclatura:

```
assets/images/oficinas/[id-oficina]-a.jpg
assets/images/oficinas/[id-oficina]-b.jpg
assets/images/planos/[id-oficina]-plano.jpg
```

## Galería

Editable en `js/offices-data.js` → arreglo `galleryData`. Sugerencia de
nomenclatura:

```
assets/images/galeria/fachada-01.jpg
assets/images/galeria/lobby-01.jpg
assets/images/galeria/motor-lobby-01.jpg
assets/images/galeria/oficina-01.jpg
assets/images/galeria/vista-01.jpg
assets/images/galeria/areas-comunes-01.jpg
```

## Imagen para redes sociales (Open Graph)

| Archivo esperado | Uso |
|---|---|
| `assets/images/og/torre-blu-og.jpg` | Imagen que aparece al compartir el sitio en WhatsApp, Facebook, LinkedIn, etc. Recomendado 1200×630px. |

---

**Nota:** ninguno de estos archivos existe todavía en el repositorio — esta
carpeta solo define la estructura y nombres esperados para que puedas colocar
el material real sin modificar código.
