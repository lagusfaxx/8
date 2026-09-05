import type { Metadata } from "next";
import LodgingClient from "./LodgingClient";
import SeoContent from "../../components/SeoContent";

export const metadata: Metadata = {
  title: "Hospedajes y Alojamientos en México",
  description:
    "Encuentra hospedajes y alojamientos discretos en CDMX, Guadalajara, Cancún y todo México. Precios, fotos reales y disponibilidad en UZEED.",
  alternates: { canonical: "/hospedaje" },
  openGraph: {
    title: "Hospedajes y Alojamientos en México | UZEED",
    description: "Hospedajes y alojamientos discretos en CDMX y todo México.",
    url: "https://uzeed.mx/hospedaje",
    type: "website",
    images: [{ url: "https://uzeed.mx/brand/isotipo-new.png", width: 720, height: 720, alt: "UZEED Hospedajes" }],
  },
};

export default function HospedajePage() {
  return (
    <>
      <LodgingClient />
      <SeoContent variant="hospedaje" />
    </>
  );
}
