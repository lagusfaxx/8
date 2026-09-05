import { Suspense } from "react";
import type { Metadata } from "next";
import DirectoryPage from "../../components/DirectoryPage";
import SeoContent from "../../components/SeoContent";

export const metadata: Metadata = {
  title: "Masajistas Eróticas en México - Masajes Sensuales",
  description:
    "Encuentra masajistas eróticas y sensuales en Ciudad de México, Polanco y Guadalajara. Masajes tántricos, nuru y relajantes con profesionales verificadas en UZEED.",
  keywords: ["masajistas chile", "masajes eróticos santiago", "masajistas sensuales", "masaje tántrico chile", "masajistas las condes", "masaje nuru santiago"],
  alternates: { canonical: "/masajistas" },
  openGraph: {
    title: "Masajistas Eróticas en México | UZEED",
    description: "Masajistas eróticas verificadas en CDMX, Guadalajara, Monterrey y todo México. Masajes tántricos, nuru y sensuales.",
    url: "https://uzeed.mx/masajistas",
    type: "website",
    images: [{ url: "https://uzeed.mx/brand/isotipo-new.png", width: 720, height: 720, alt: "UZEED Masajistas México" }],
  },
};

export default function MasajistasPage() {
  return (
    <>
      <Suspense>
        <DirectoryPage
          key="masajes"
          entityType="professional"
          categorySlug="masajes"
          title="Masajistas"
        />
      </Suspense>
      <SeoContent variant="masajistas" />
    </>
  );
}
