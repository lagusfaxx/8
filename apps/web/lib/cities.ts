/**
 * Fuente única de ciudades/alcaldías para landing pages geo-segmentadas.
 * Usada por la ruta /escorts/[tag] (para renderizar la landing de ciudad con
 * canonical propio y resultados filtrados) y por el sitemap (para emitir URLs
 * limpias /escorts/{slug} en lugar de parámetros ?city= que Google trata como
 * duplicados de /escorts).
 */
export type CityGeo = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  /** Estado, para el texto SEO de la landing. */
  region?: string;
};

export const CITY_LANDINGS: CityGeo[] = [
  // ── Zona metropolitana del Valle de México ──
  { slug: "ciudad-de-mexico", name: "Ciudad de México", lat: 19.43, lng: -99.13, region: "CDMX" },
  { slug: "polanco", name: "Polanco", lat: 19.43, lng: -99.19, region: "CDMX" },
  { slug: "condesa", name: "Condesa", lat: 19.41, lng: -99.17, region: "CDMX" },
  { slug: "roma-norte", name: "Roma Norte", lat: 19.42, lng: -99.16, region: "CDMX" },
  { slug: "santa-fe", name: "Santa Fe", lat: 19.36, lng: -99.26, region: "CDMX" },
  { slug: "coyoacan", name: "Coyoacán", lat: 19.35, lng: -99.16, region: "CDMX" },
  { slug: "benito-juarez", name: "Benito Juárez", lat: 19.37, lng: -99.16, region: "CDMX" },
  { slug: "iztapalapa", name: "Iztapalapa", lat: 19.36, lng: -99.06, region: "CDMX" },
  { slug: "gustavo-a-madero", name: "Gustavo A. Madero", lat: 19.48, lng: -99.11, region: "CDMX" },
  { slug: "naucalpan", name: "Naucalpan", lat: 19.48, lng: -99.24, region: "Estado de México" },
  { slug: "ecatepec", name: "Ecatepec", lat: 19.6, lng: -99.06, region: "Estado de México" },
  { slug: "nezahualcoyotl", name: "Nezahualcóyotl", lat: 19.4, lng: -99.01, region: "Estado de México" },
  { slug: "tlalnepantla", name: "Tlalnepantla", lat: 19.54, lng: -99.19, region: "Estado de México" },
  { slug: "toluca", name: "Toluca", lat: 19.29, lng: -99.66, region: "Estado de México" },

  // ── Principales ciudades del país ──
  { slug: "guadalajara", name: "Guadalajara", lat: 20.67, lng: -103.35, region: "Jalisco" },
  { slug: "zapopan", name: "Zapopan", lat: 20.72, lng: -103.39, region: "Jalisco" },
  { slug: "monterrey", name: "Monterrey", lat: 25.69, lng: -100.32, region: "Nuevo León" },
  { slug: "san-pedro-garza-garcia", name: "San Pedro Garza García", lat: 25.66, lng: -100.4, region: "Nuevo León" },
  { slug: "puebla", name: "Puebla", lat: 19.04, lng: -98.2, region: "Puebla" },
  { slug: "queretaro", name: "Querétaro", lat: 20.59, lng: -100.39, region: "Querétaro" },
  { slug: "leon", name: "León", lat: 21.12, lng: -101.68, region: "Guanajuato" },
  { slug: "tijuana", name: "Tijuana", lat: 32.51, lng: -117.04, region: "Baja California" },
  { slug: "mexicali", name: "Mexicali", lat: 32.65, lng: -115.47, region: "Baja California" },
  { slug: "ciudad-juarez", name: "Ciudad Juárez", lat: 31.74, lng: -106.49, region: "Chihuahua" },
  { slug: "chihuahua", name: "Chihuahua", lat: 28.63, lng: -106.08, region: "Chihuahua" },
  { slug: "hermosillo", name: "Hermosillo", lat: 29.07, lng: -110.96, region: "Sonora" },
  { slug: "culiacan", name: "Culiacán", lat: 24.81, lng: -107.39, region: "Sinaloa" },
  { slug: "saltillo", name: "Saltillo", lat: 25.42, lng: -101.0, region: "Coahuila" },
  { slug: "torreon", name: "Torreón", lat: 25.54, lng: -103.42, region: "Coahuila" },
  { slug: "aguascalientes", name: "Aguascalientes", lat: 21.88, lng: -102.29, region: "Aguascalientes" },
  { slug: "san-luis-potosi", name: "San Luis Potosí", lat: 22.16, lng: -100.98, region: "San Luis Potosí" },
  { slug: "morelia", name: "Morelia", lat: 19.71, lng: -101.19, region: "Michoacán" },
  { slug: "veracruz", name: "Veracruz", lat: 19.17, lng: -96.13, region: "Veracruz" },
  { slug: "merida", name: "Mérida", lat: 20.97, lng: -89.62, region: "Yucatán" },
  { slug: "cancun", name: "Cancún", lat: 21.16, lng: -86.85, region: "Quintana Roo" },
  { slug: "playa-del-carmen", name: "Playa del Carmen", lat: 20.63, lng: -87.07, region: "Quintana Roo" },
  { slug: "puerto-vallarta", name: "Puerto Vallarta", lat: 20.65, lng: -105.22, region: "Jalisco" },
  { slug: "acapulco", name: "Acapulco", lat: 16.86, lng: -99.88, region: "Guerrero" },
  { slug: "los-cabos", name: "Los Cabos", lat: 22.89, lng: -109.92, region: "Baja California Sur" },
  { slug: "cuernavaca", name: "Cuernavaca", lat: 18.92, lng: -99.23, region: "Morelos" },
  { slug: "tuxtla-gutierrez", name: "Tuxtla Gutiérrez", lat: 16.75, lng: -93.12, region: "Chiapas" },
  { slug: "oaxaca", name: "Oaxaca", lat: 17.07, lng: -96.72, region: "Oaxaca" },
  { slug: "villahermosa", name: "Villahermosa", lat: 17.99, lng: -92.93, region: "Tabasco" },
  { slug: "tampico", name: "Tampico", lat: 22.25, lng: -97.87, region: "Tamaulipas" },
  { slug: "pachuca", name: "Pachuca", lat: 20.12, lng: -98.73, region: "Hidalgo" },
];

const CITY_BY_SLUG = new Map(CITY_LANDINGS.map((c) => [c.slug, c]));

export function getCity(slug: string): CityGeo | undefined {
  return CITY_BY_SLUG.get(slug.toLowerCase());
}

export function isCitySlug(slug: string): boolean {
  return CITY_BY_SLUG.has(slug.toLowerCase());
}
