const PLACES = [
  {
    slug: "pacaya",
    name: "Volcan de Pacaya",
    subtitle: "Una ruta intensa y accesible con terreno volcánico activo.",
    summary: "Ideal para quienes quieren una experiencia de aventura en un solo día, con vistas abiertas, senderos de ceniza y un ambiente perfecto para grupos.",
    duration: "2 a 4 horas",
    distance: "6 km aprox.",
    altitude: "2,552 msnm",
    difficulty: "Moderado",
    activities: ["Senderismo", "Fotografia", "Atardecer", "Tour privado"],
    season: "Octubre a mayo",
    location: "San Vicente Pacaya, Escuintla",
    heroImage: "images/pacaya.jpeg",
    gallery: ["images/pacaya.jpeg", "images/community-1.jpeg", "images/community-2.jpeg"],
    highlights: [
      "Ascenso rápido con alta recompensa visual.",
      "Terreno volcánico perfecto para fotografía dramática.",
      "Buena opción para grupos que quieren aventura sin pernoctar."
    ],
    itinerary: [
      "Encuentro y salida hacia el parque nacional.",
      "Ascenso progresivo entre bosque seco y zonas de roca volcánica.",
      "Tiempo en miradores para fotos y descanso.",
      "Descenso y cierre de la experiencia."
    ],
    story: [
      "Pacaya transmite adrenalina desde el primer tramo. El paisaje cambia rápido y la sensación de caminar sobre un volcán vivo domina toda la ruta.",
      "Es una experiencia recomendable para viajeros con condición física básica a intermedia que quieren una introducción potente al montañismo guatemalteco."
    ],
    caution: "La actividad volcánica y las restricciones de acceso pueden variar. El recorrido final depende de las condiciones del día."
  },
  {
    slug: "acatenango",
    name: "Volcan de Acatenango",
    subtitle: "Campamento de altura frente al espectáculo del Volcán de Fuego.",
    summary: "La ruta emblemática para quienes buscan amanecer, frío de alta montaña y una experiencia de comunidad alrededor del campamento.",
    duration: "8 a 10 horas de ascenso total",
    distance: "12 a 14 km aprox.",
    altitude: "3,976 msnm",
    difficulty: "Alto",
    activities: ["Camping", "Senderismo", "Amanecer", "Fotografia nocturna"],
    season: "Noviembre a abril",
    location: "Acatenango, Chimaltenango",
    heroImage: "images/acatenango.jpeg",
    gallery: ["images/acatenango.jpeg", "images/fuego-1.jpeg", "images/fuego-2.jpeg"],
    highlights: [
      "Una de las postales más famosas de Guatemala.",
      "Campamento con vista directa a las erupciones del Volcán de Fuego.",
      "Experiencia de comunidad fuerte por el esfuerzo compartido."
    ],
    itinerary: [
      "Salida hacia el punto de registro y revisión de equipo.",
      "Ascenso por bosque, tramos expuestos y cambio de clima progresivo.",
      "Llegada al campamento base y vista al cono de Fuego.",
      "Opción de cumbre al amanecer y descenso."
    ],
    story: [
      "Acatenango no solo se camina; se conquista en equipo. El cansancio, el frío y la emoción de ver a Fuego activo convierten la noche en una experiencia memorable.",
      "Es una ruta exigente que recompensa con una de las mejores vistas de alta montaña del país."
    ],
    caution: "La aclimatación, el clima y el equipo térmico hacen una diferencia real en esta ruta."
  },
  {
    slug: "fuego",
    name: "Volcan de Fuego",
    subtitle: "Miradores cercanos a uno de los volcanes más activos de Centroamérica.",
    summary: "Una experiencia para quienes buscan máxima intensidad visual y un encuentro cercano con el dinamismo del paisaje volcánico.",
    duration: "10 a 12 horas",
    distance: "14 a 16 km aprox.",
    altitude: "3,763 msnm",
    difficulty: "Muy alto",
    activities: ["Senderismo avanzado", "Miradores eruptivos", "Fotografia", "Campamento tecnico"],
    season: "Noviembre a abril",
    location: "Sacatepequez y Chimaltenango",
    heroImage: "images/fuego-1.jpeg",
    gallery: ["images/fuego-1.jpeg", "images/fuego-2.jpeg", "images/acatenango.jpeg"],
    highlights: [
      "Volcán activo con visuales espectaculares.",
      "Ruta reservada para grupos preparados y condiciones favorables.",
      "Paisaje extremo y una narrativa de aventura total."
    ],
    itinerary: [
      "Ingreso por ruta autorizada y revisión de seguridad.",
      "Ascenso fuerte con progresión en altura.",
      "Tramo de observación hacia el cono activo según condiciones.",
      "Retorno con ventanas de parada para hidratación y fotografía."
    ],
    story: [
      "Fuego demanda respeto. Más que una caminata, es una experiencia de montaña avanzada que depende por completo del comportamiento del volcán y de la logística del día.",
      "Cuando las condiciones acompañan, pocas rutas en Guatemala igualan su impacto visual."
    ],
    caution: "El acceso puede cerrarse sin previo aviso por seguridad. Debe realizarse con operadores y guías autorizados."
  },
  {
    slug: "zunil",
    name: "Volcan Zunil",
    subtitle: "Bosque nuboso, vapor termal y una ruta menos masiva con gran carácter.",
    summary: "Una opción atractiva para quienes buscan vegetación densa, clima cambiante y sensación de exploración fuera de los circuitos más saturados.",
    duration: "5 a 7 horas",
    distance: "8 a 10 km aprox.",
    altitude: "3,542 msnm",
    difficulty: "Alto",
    activities: ["Senderismo", "Bosque nuboso", "Fotografia", "Aves y naturaleza"],
    season: "Octubre a febrero",
    location: "Zunil, Quetzaltenango",
    heroImage: "images/zunil-2.jpeg",
    gallery: ["images/zunil-2.jpeg", "images/zunil-1.jpeg", "images/community-2.jpeg"],
    highlights: [
      "Entorno verde y atmósfera húmeda con mucho contraste visual.",
      "Ruta ideal para quienes prefieren montaña con vegetación y niebla.",
      "Experiencia más íntima y menos turística."
    ],
    itinerary: [
      "Ingreso temprano para aprovechar mejores ventanas de visibilidad.",
      "Ascenso en sendero boscoso con cambios de pendiente.",
      "Paradas en miradores naturales y zonas de descanso.",
      "Descenso controlado en terreno húmedo."
    ],
    story: [
      "Zunil combina montaña y misticismo. La niebla, el bosque y la humedad crean una experiencia distinta a la ceniza abierta de otros volcanes del país.",
      "Es una gran ruta para senderistas que disfrutan del contacto largo con la naturaleza y el paisaje de altiplano."
    ],
    caution: "El terreno puede estar resbaloso. El calzado con buena tracción es clave."
  },
  {
    slug: "pecul",
    name: "Volcan Pecul",
    subtitle: "Cumbre menos conocida para quienes quieren salir del radar turístico clásico.",
    summary: "Una experiencia de exploración con vistas amplias y sensación de ruta local, adecuada para aventureros que quieren descubrir perfiles nuevos de Guatemala.",
    duration: "5 a 6 horas",
    distance: "9 km aprox.",
    altitude: "3,500 msnm aprox.",
    difficulty: "Moderado a alto",
    activities: ["Senderismo", "Camping ligero", "Fotografia panoramica", "Exploracion"],
    season: "Noviembre a abril",
    location: "Occidente de Guatemala",
    heroImage: "images/pecul.jpeg",
    gallery: ["images/pecul.jpeg", "images/zunil-1.jpeg", "images/community-1.jpeg"],
    highlights: [
      "Ruta menos conocida, con identidad más local.",
      "Panorámicas ideales para fotografía de paisaje.",
      "Buen balance entre desafío y sensación de descubrimiento."
    ],
    itinerary: [
      "Encuentro y aproximación al punto de salida.",
      "Ascenso sostenido con secciones de descanso y observación.",
      "Tiempo en cumbre para fotos, snacks y contemplación.",
      "Descenso hacia el punto de retorno."
    ],
    story: [
      "Pecul funciona muy bien para viajeros que ya conocen los clásicos y quieren una ruta nueva. El valor aquí está en la sensación de hallazgo y en el menor flujo de personas.",
      "La experiencia combina trekking, miradores y una narrativa de montaña más reservada."
    ],
    caution: "Los datos de distancia y altitud pueden variar según el acceso específico elegido para la salida."
  },
  {
    slug: "chicabal",
    name: "Chicabal",
    subtitle: "Volcán y laguna sagrada entre bosque y neblina.",
    summary: "Una ruta contemplativa que mezcla senderismo, espiritualidad del lugar y una de las lagunas volcánicas más fotogénicas del altiplano.",
    duration: "3 a 5 horas",
    distance: "5 a 7 km aprox.",
    altitude: "2,712 msnm",
    difficulty: "Moderado",
    activities: ["Senderismo", "Fotografia", "Observacion de naturaleza", "Ruta cultural"],
    season: "Todo el año",
    location: "San Martin Sacatepequez, Quetzaltenango",
    heroImage: "images/chicabal-1.jpeg",
    gallery: ["images/chicabal-1.jpeg", "images/chicabal-2.jpeg", "images/community-2.jpeg"],
    highlights: [
      "Laguna de cráter con ambiente místico.",
      "Buen destino para grupos mixtos y fotografía.",
      "Terreno amable comparado con rutas de alta exigencia."
    ],
    itinerary: [
      "Ingreso al área natural y caminata inicial.",
      "Descenso o aproximación hacia la laguna según circuito elegido.",
      "Tiempo de contemplación, fotografía y descanso.",
      "Regreso por sendero boscoso."
    ],
    story: [
      "Chicabal ofrece una aventura más serena, centrada en el paisaje, la energía del bosque y la belleza de la laguna.",
      "Es una opción muy fuerte para quienes quieren naturaleza con esfuerzo moderado y alto valor escénico."
    ],
    caution: "En temporada húmeda la visibilidad cambia rápido; conviene salir temprano."
  },
  {
    slug: "ipala",
    name: "Volcan y laguna de Ipala",
    subtitle: "Una ruta panorámica con final en laguna de cráter.",
    summary: "Destino perfecto para un día de aventura con buen equilibrio entre caminata, picnic, naturaleza y fotografías con agua en altura.",
    duration: "3 a 5 horas",
    distance: "6 a 8 km aprox.",
    altitude: "1,650 msnm aprox.",
    difficulty: "Moderado",
    activities: ["Senderismo", "Picnic", "Fotografia", "Avistamiento de paisaje"],
    season: "Noviembre a mayo",
    location: "Ipala, Chiquimula",
    heroImage: "images/ipala-2.jpeg",
    gallery: ["images/ipala-2.jpeg", "images/ipala-1.jpeg", "images/community-1.jpeg"],
    highlights: [
      "Laguna en la cumbre con gran atractivo visual.",
      "Excelente opción para salidas de un día.",
      "Ruta versátil para parejas, amigos y grupos pequeños."
    ],
    itinerary: [
      "Llegada al acceso y preparación del ascenso.",
      "Sendero con segmentos de pendiente media y vistas progresivas.",
      "Tiempo libre en la laguna para fotos y descanso.",
      "Descenso y retorno."
    ],
    story: [
      "Ipala combina el lenguaje de volcán con la calma del agua. Esa mezcla la vuelve una experiencia distinta y muy atractiva para públicos amplios.",
      "Funciona bien para grupos que priorizan paisaje, conexión y una caminata retadora pero manejable."
    ],
    caution: "La altura mostrada es referencial; el desnivel percibido depende del acceso de inicio."
  }
];

const METRIC_ICONS = {
  duration: "fa-regular fa-clock",
  distance: "fa-solid fa-route",
  altitude: "fa-solid fa-mountain",
  difficulty: "fa-solid fa-signal"
};

const ACTIVITY_ICONS = {
  Senderismo: "fa-solid fa-person-hiking",
  Fotografia: "fa-solid fa-camera",
  Atardecer: "fa-regular fa-sun",
  "Tour privado": "fa-solid fa-user-group",
  Camping: "fa-solid fa-campground",
  Amanecer: "fa-solid fa-sun",
  "Fotografia nocturna": "fa-solid fa-moon",
  "Senderismo avanzado": "fa-solid fa-person-hiking",
  "Miradores eruptivos": "fa-solid fa-fire",
  "Campamento tecnico": "fa-solid fa-tents",
  "Bosque nuboso": "fa-solid fa-tree",
  "Aves y naturaleza": "fa-solid fa-feather-pointed",
  "Camping ligero": "fa-solid fa-campground",
  Exploracion: "fa-solid fa-compass",
  "Observacion de naturaleza": "fa-solid fa-binoculars",
  "Ruta cultural": "fa-solid fa-mountain-city",
  Picnic: "fa-solid fa-basket-shopping",
  "Avistamiento de paisaje": "fa-solid fa-eye"
};

function getPlace(slug) {
  return PLACES.find((place) => place.slug === slug);
}

function populateDestinationSelect(select) {
  if (!select) return;
  select.innerHTML = PLACES.map(
    (place) => `<option value="${place.name}">${place.name}</option>`
  ).join("");
}

function createCard(place) {
  return `
    <a class="place-card reveal" href="lugar.html?destino=${place.slug}" aria-label="Ver detalle de ${place.name}">
      <div class="card-image">
        <span class="card-level">${place.difficulty}</span>
        <img src="${place.heroImage}" alt="${place.name}">
      </div>
      <div class="card-copy">
        <h3>${place.name}</h3>
        <p>${place.summary}</p>
        <div class="spec-list">
          <div class="spec-item">
            <span class="spec-icon" aria-hidden="true"><i class="${METRIC_ICONS.duration}"></i></span>
            <span class="sr-only">Tiempo</span>
            <span>${place.duration}</span>
          </div>
          <div class="spec-item">
            <span class="spec-icon" aria-hidden="true"><i class="${METRIC_ICONS.distance}"></i></span>
            <span class="sr-only">Distancia</span>
            <span>${place.distance}</span>
          </div>
          <div class="spec-item">
            <span class="spec-icon" aria-hidden="true"><i class="${METRIC_ICONS.altitude}"></i></span>
            <span class="sr-only">Altura</span>
            <span>${place.altitude}</span>
          </div>
          <div class="spec-item">
            <span class="spec-icon" aria-hidden="true"><i class="${METRIC_ICONS.difficulty}"></i></span>
            <span class="sr-only">Exigencia</span>
            <span>${place.difficulty}</span>
          </div>
        </div>
        <div class="card-meta">
          <div class="activities" aria-label="Actividades incluidas">
            ${place.activities.map((activity) => `
              <span class="activity-pill icon-tooltip" title="${activity}" aria-label="${activity}" tabindex="0">
                <i class="${ACTIVITY_ICONS[activity] || "fa-solid fa-star"}" aria-hidden="true"></i>
              </span>
            `).join("")}
          </div>
          <span class="card-link">Ver detalle completo</span>
        </div>
      </div>
    </a>
  `;
}

function renderHomePage() {
  const grid = document.querySelector("#places-grid");
  if (grid) {
    grid.innerHTML = PLACES.map(createCard).join("");
  }

  populateDestinationSelect(document.querySelector("#destination-select"));

  const form = document.querySelector("#whatsapp-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const destination = data.get("destination") || "";
      const date = data.get("date") || "por definir";
      const people = data.get("people") || "por definir";
      const message = data.get("message") || "";
      const text = [
        `Hola, soy ${name}.`,
        `Me interesa el destino: ${destination}.`,
        `Fecha ideal: ${date}.`,
        `Personas: ${people}.`,
        message ? `Mensaje adicional: ${message}` : ""
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/50251927924?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  }
}

function relatedPlaces(currentSlug) {
  return PLACES.filter((place) => place.slug !== currentSlug).slice(0, 3);
}

function updateMeta(place) {
  document.title = `${place.name} | Runaway GT`;
  const description = `${place.name}: ${place.summary} Tiempo ${place.duration}, distancia ${place.distance}, altura ${place.altitude}.`;
  const descriptionTag = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (descriptionTag) descriptionTag.setAttribute("content", description);
  if (ogTitle) ogTitle.setAttribute("content", `${place.name} | Runaway GT`);
  if (ogDescription) ogDescription.setAttribute("content", description);
  if (ogImage) ogImage.setAttribute("content", place.heroImage);
}

function renderDetailPage() {
  const target = document.querySelector("#place-detail");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("destino") || "pacaya";
  const place = getPlace(slug) || PLACES[0];
  updateMeta(place);

  target.innerHTML = `
    <section class="detail-page">
      <article class="detail-hero">
        <div class="detail-hero-media parallax" data-speed="0.14">
          <img src="${place.heroImage}" alt="${place.name}">
        </div>
        <div class="detail-hero-inner">
          <div class="detail-intro reveal">
            <p class="eyebrow">${place.location}</p>
            <h1>${place.name}</h1>
            <p>${place.subtitle}</p>
            <div class="detail-stats">
              <span class="pill"><i class="${METRIC_ICONS.duration}" aria-hidden="true"></i>${place.duration}</span>
              <span class="pill"><i class="${METRIC_ICONS.distance}" aria-hidden="true"></i>${place.distance}</span>
              <span class="pill"><i class="${METRIC_ICONS.altitude}" aria-hidden="true"></i>${place.altitude}</span>
              <span class="pill"><i class="${METRIC_ICONS.difficulty}" aria-hidden="true"></i>${place.difficulty}</span>
            </div>
            <div class="detail-hero-actions">
              <a class="button button-primary" href="https://wa.me/50251927924?text=${encodeURIComponent(`Hola, me interesa el tour a ${place.name}.`) }" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i>Consultar por WhatsApp</a>
              <a class="button button-secondary" href="index.html#destinos"><i class="fa-solid fa-compass" aria-hidden="true"></i>Ver más destinos</a>
            </div>
          </div>
        </div>
      </article>

      <section class="detail-layout">
        <div class="detail-stack">
          <article class="detail-content reveal">
            <div class="detail-story">
              <h3>Descripcion de la experiencia</h3>
              ${place.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
          </article>

          <article class="detail-content reveal">
            <h3>Galeria del lugar</h3>
            <div class="detail-gallery">
              ${place.gallery.map((image, index) => `
                <figure class="detail-gallery-card">
                  <img src="${image}" alt="${place.name} vista ${index + 1}">
                </figure>
              `).join("")}
            </div>
          </article>

          <article class="detail-content reveal">
            <div class="detail-itinerary">
              <h3>Itinerario sugerido</h3>
              <ol class="detail-list">
                ${place.itinerary.map((item) => `<li>${item}</li>`).join("")}
              </ol>
            </div>
          </article>
        </div>

        <aside class="detail-sidebar reveal">
          <h3>Ficha rapida</h3>
          <div class="sidebar-specs">
            <div>
              <strong>Resumen</strong>
              <p>${place.summary}</p>
            </div>
            <div>
              <strong>Temporada ideal</strong>
              <p>${place.season}</p>
            </div>
            <div>
              <strong>Actividades</strong>
              <div class="activities">
                ${place.activities.map((activity) => `<span class="activity-pill">${activity}</span>`).join("")}
              </div>
            </div>
            <div>
              <strong>Puntos destacados</strong>
              <ul class="detail-list">
                ${place.highlights.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div>
              <strong>Nota importante</strong>
              <p>${place.caution}</p>
            </div>
          </div>
        </aside>
      </section>
    </section>

    <section class="detail-related">
      <div class="section-heading reveal">
        <p class="eyebrow">Mas rutas</p>
        <h2>Descubre otros destinos de Runaway GT.</h2>
      </div>
      <div class="related-grid">
        ${relatedPlaces(place.slug).map((item) => `
          <a class="related-card reveal" href="lugar.html?destino=${item.slug}">
            <img src="${item.heroImage}" alt="${item.name}">
            <div class="card-copy">
              <h3>${item.name}</h3>
              <p>${item.subtitle}</p>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  elements.forEach((element) => observer.observe(element));
}

function initParallax() {
  const items = [...document.querySelectorAll(".parallax")];
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const onScroll = () => {
    const scroll = window.scrollY;
    items.forEach((item) => {
      const speed = Number(item.dataset.speed || 0.12);
      item.style.transform = `translate3d(0, ${scroll * speed}px, 0) scale(1.05)`;
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function init() {
  const page = document.body.dataset.page;
  if (page === "home") renderHomePage();
  if (page === "detail") renderDetailPage();
  initReveal();
  initParallax();
}

init();
