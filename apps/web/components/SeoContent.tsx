/**
 * Server-rendered SEO content blocks for directory pages.
 * These provide crawlable text for Google while the client-side
 * DirectoryPage handles the interactive listings.
 */

type SeoContentProps = {
  variant: "escorts" | "masajistas" | "moteles" | "hospedaje" | "establecimientos" | "profesionales" | "sexshop";
};

const SEO_DATA: Record<SeoContentProps["variant"], {
  heading: string;
  intro: string;
  sections: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
}> = {
  escorts: {
    heading: "Escorts y Acompañantes en México — Perfiles Verificados",
    intro:
      "UZEED es el directorio de escorts y acompañantes verificadas en México. Cada perfil cuenta con fotos reales, verificación de identidad y contacto directo por WhatsApp. Explora perfiles disponibles hoy en Ciudad de México, Guadalajara, Monterrey, Cancún y más de 40 ciudades del país.",
    sections: [
      {
        title: "Escorts en CDMX y todo México",
        text: "Encuentra escorts y acompañantes disponibles hoy en Polanco, Condesa, Roma Norte, Santa Fe y toda la Ciudad de México. También hay perfiles activos en Guadalajara, Monterrey, Puebla, Querétaro, Tijuana y Cancún. Usa los filtros de ubicación, servicios y disponibilidad para encontrar lo que buscas.",
      },
      {
        title: "Perfiles verificados con fotos reales",
        text: "Todas las escorts y acompañantes en UZEED pasan por un proceso de verificación de identidad. Solo publicamos perfiles auténticos con fotos reales. Puedes buscar por nacionalidad (mexicanas, colombianas, venezolanas), características físicas o tipo de servicio.",
      },
      {
        title: "Servicios disponibles",
        text: "Cada perfil detalla los servicios que ofrece, tarifas y horarios de atención. Encuentra escorts que ofrecen masajes eróticos, videollamadas, atención a domicilio y más. Contacta directamente por WhatsApp o por el chat interno de UZEED.",
      },
    ],
    faq: [
      {
        question: "¿Cómo encuentro escorts cerca de mí?",
        answer: "Activa tu ubicación en UZEED para ver perfiles cercanos ordenados por distancia. También puedes filtrar por ciudad, alcaldía o colonia específica.",
      },
      {
        question: "¿Las escorts de UZEED son verificadas?",
        answer: "Sí, UZEED verifica la identidad de cada profesional. Los perfiles verificados muestran una insignia que garantiza fotos reales y perfil auténtico.",
      },
      {
        question: "¿Cómo contacto a una escort?",
        answer: "Cada perfil tiene un botón de contacto directo por WhatsApp. También puedes usar el chat interno de UZEED para comunicarte de forma privada.",
      },
      {
        question: "¿Hay escorts disponibles ahora?",
        answer: "Sí, muchas escorts ofrecen disponibilidad 24/7. Filtra por \"disponible ahora\" para ver solo las que atienden en este momento.",
      },
    ],
  },
  masajistas: {
    heading: "Masajistas Eróticas en México — Masajes Sensuales",
    intro:
      "Directorio de masajistas eróticas y sensuales en México. Encuentra profesionales verificadas con experiencia en masajes tántricos, nuru, relajantes y cuerpo a cuerpo en CDMX, Guadalajara, Monterrey y todo el país.",
    sections: [
      {
        title: "Masajes eróticos en CDMX",
        text: "Masajistas verificadas en Polanco, Condesa, Roma Norte, Benito Juárez y más alcaldías de la Ciudad de México. Filtra por ubicación, tipo de masaje y disponibilidad inmediata.",
      },
      {
        title: "Masajistas en Guadalajara y Monterrey",
        text: "Perfiles activos en Zapopan, el centro de Guadalajara, San Pedro Garza García y toda el área metropolitana de Monterrey. Cada perfil indica tipo de masaje, duración y tarifas.",
      },
    ],
    faq: [
      {
        question: "¿Dónde encuentro masajistas eróticas en CDMX?",
        answer: "En UZEED puedes filtrar masajistas verificadas por alcaldía y tipo de masaje. Hay profesionales disponibles en Polanco, Condesa, Roma Norte y toda la Ciudad de México.",
      },
      {
        question: "¿Qué tipos de masaje puedo encontrar?",
        answer: "Masaje tántrico, nuru, relajante, descontracturante y cuerpo a cuerpo. Cada perfil detalla las modalidades que ofrece, la duración de la sesión y el precio.",
      },
    ],
  },
  moteles: {
    heading: "Moteles en México — Reserva y Precios",
    intro:
      "Encuentra los mejores moteles en Ciudad de México, Guadalajara, Monterrey y todo México. Compara precios, servicios, fotos reales y disponibilidad. Moteles discretos y con cochera privada para tu comodidad.",
    sections: [
      {
        title: "Moteles en CDMX y área metropolitana",
        text: "Directorio de moteles por alcaldía y por carretera: Iztapalapa, Gustavo A. Madero, Ecatepec, Naucalpan y Nezahualcóyotl. Consulta tarifas por hora y por noche, servicios de la habitación y cochera privada.",
      },
    ],
    faq: [
      {
        question: "¿Cuáles son los mejores moteles en CDMX?",
        answer: "En UZEED encontrarás un directorio completo de moteles en Ciudad de México con fotos reales, precios actualizados y reseñas de usuarios. Filtra por ubicación, precio y servicios.",
      },
      {
        question: "¿Los moteles tienen cochera privada?",
        answer: "La mayoría sí. Cada ficha indica si el motel cuenta con cochera privada, servicio a la habitación, jacuzzi y tarifas por hora o por noche.",
      },
    ],
  },
  hospedaje: {
    heading: "Hospedajes y Alojamiento para Adultos en México",
    intro:
      "Directorio de hospedajes y alojamientos discretos en México. Encuentra lugares con privacidad, cochera y servicios especiales en CDMX, Guadalajara, Monterrey, Cancún y todo el país.",
    sections: [
      {
        title: "Hospedaje discreto por ciudad",
        text: "Opciones verificadas en Ciudad de México, Guadalajara, Monterrey, Puebla, Querétaro y destinos turísticos como Cancún, Playa del Carmen y Puerto Vallarta. Compara tarifas, ubicación y servicios.",
      },
    ],
    faq: [
      {
        question: "¿Qué diferencia hay entre motel y hospedaje?",
        answer: "El motel se renta habitualmente por hora y prioriza la discreción con cochera privada. El hospedaje está pensado para estancias más largas, por noche o por varios días.",
      },
    ],
  },
  establecimientos: {
    heading: "Establecimientos para Adultos en México",
    intro:
      "Encuentra establecimientos para adultos verificados en México. Table dance, night clubs, saunas, spas eróticos y más con fotos reales, horarios y ubicación exacta en CDMX, Guadalajara y Monterrey.",
    sections: [
      {
        title: "Table dance y night clubs",
        text: "Directorio de establecimientos por ciudad y colonia, con horarios de atención, costo de entrada, servicios disponibles y ubicación en mapa. Perfiles verificados con fotos reales del lugar.",
      },
    ],
    faq: [
      {
        question: "¿Los establecimientos están verificados?",
        answer: "Sí. Cada establecimiento publicado en UZEED pasa por verificación antes de aparecer en el directorio, e incluye dirección, horarios y fotos reales del lugar.",
      },
    ],
  },
  profesionales: {
    heading: "Profesionales y Acompañantes en México",
    intro:
      "Directorio completo de profesionales y acompañantes en México. Perfiles verificados con fotos reales, servicios detallados y contacto directo en CDMX, Guadalajara, Monterrey y más de 40 ciudades.",
    sections: [
      {
        title: "Cobertura en todo el país",
        text: "Perfiles activos en la Ciudad de México y su zona metropolitana, Jalisco, Nuevo León, Puebla, Querétaro, Baja California, Quintana Roo y el resto de los estados. Filtra por ciudad y por tipo de servicio.",
      },
    ],
    faq: [
      {
        question: "¿Cómo sé que un perfil es auténtico?",
        answer: "Los perfiles verificados muestran una insignia. UZEED valida la identidad de cada profesional antes de otorgarla, lo que garantiza que las fotos publicadas son reales.",
      },
    ],
  },
  sexshop: {
    heading: "Sex Shop Online en México — Productos para Adultos",
    intro:
      "Tienda de productos para adultos en México. Encuentra juguetes, lencería, lubricantes y accesorios con envío discreto a toda la República.",
    sections: [
      {
        title: "Envío discreto a toda la República",
        text: "Los pedidos se envían en empaque neutro, sin referencias al contenido ni a la tienda. Cobertura en CDMX, Guadalajara, Monterrey y el resto del país.",
      },
    ],
    faq: [
      {
        question: "¿El envío es discreto?",
        answer: "Sí. Todos los pedidos se despachan en empaque neutro, sin logotipos ni descripciones que revelen el contenido.",
      },
    ],
  },
};

export default function SeoContent({ variant }: SeoContentProps) {
  const data = SEO_DATA[variant];
  if (!data) return null;

  const faqJsonLd = data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://uzeed.mx" },
      { "@type": "ListItem", position: 2, name: data.heading.split("—")[0].trim() },
    ],
  };

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Visually hidden but crawlable SEO text at bottom of page */}
      <section className="max-w-4xl mx-auto px-4 pb-12 pt-8 text-white/60 text-sm leading-relaxed">
        <h1 className="text-xl font-bold text-white/80 mb-3">{data.heading}</h1>
        <p className="mb-4">{data.intro}</p>
        {data.sections.map((s, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-base font-semibold text-white/70 mb-1">{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
        {data.faq.length > 0 && (
          <div className="mt-8">
            <h3 className="text-base font-semibold text-white/70 mb-3">Preguntas Frecuentes</h3>
            {data.faq.map((f, i) => (
              <details key={i} className="mb-3 group">
                <summary className="cursor-pointer font-medium text-white/70 group-open:text-fuchsia-300 transition-colors">
                  {f.question}
                </summary>
                <p className="mt-1 pl-4 text-white/50">{f.answer}</p>
              </details>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
