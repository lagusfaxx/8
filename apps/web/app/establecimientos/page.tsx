import { Suspense } from "react";
import type { Metadata } from "next";
import EstablishmentsClient from "./EstablishmentsClient";
import SeoContent from "../../components/SeoContent";

export const metadata: Metadata = {
  title: "Establecimientos para Adultos en México",
  description:
    "Encuentra establecimientos para adultos en CDMX, Guadalajara, Monterrey y todo México. Table dance, moteles, saunas y más con fotos y ubicación en UZEED.",
  alternates: { canonical: "/establecimientos" },
  openGraph: {
    title: "Establecimientos para Adultos en México | UZEED",
    description: "Establecimientos para adultos en CDMX y todo México. Table dance, moteles, saunas y más.",
    url: "https://uzeed.mx/establecimientos",
    type: "website",
    images: [{ url: "https://uzeed.mx/brand/isotipo-new.png", width: 720, height: 720, alt: "UZEED Establecimientos" }],
  },
};

export default function EstablishmentsPage() {
  return (
    <>
      <Suspense fallback={<div className="text-white/60">Cargando establecimientos...</div>}>
        <EstablishmentsClient />
      </Suspense>
      <SeoContent variant="establecimientos" />
    </>
  );
}
