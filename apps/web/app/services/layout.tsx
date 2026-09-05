import type { Metadata } from "next";

// /services es un componente cliente ("use client") y no puede exportar
// metadata. Sin este layout heredaría el canonical "/" del layout raíz, es
// decir se declararía a sí misma como duplicado de la home. Aquí fijamos su
// título y canonical propios.
export const metadata: Metadata = {
  title: "Explorar Servicios para Adultos en México",
  description:
    "Explora escorts, masajistas, moteles y sex shops verificados cerca de ti en un mapa interactivo. Filtra por ubicación, categoría y disponibilidad en UZEED.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Explorar Servicios para Adultos en México | UZEED",
    description:
      "Explora escorts, masajistas, moteles y sex shops verificados cerca de ti en un mapa interactivo.",
    url: "https://uzeed.mx/services",
    type: "website",
    images: [{ url: "https://uzeed.mx/brand/isotipo-new.png", width: 720, height: 720, alt: "UZEED Servicios México" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
