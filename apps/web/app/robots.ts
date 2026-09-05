import type { MetadataRoute } from "next";

// Mismo origen que usa el sitemap: así robots.txt apunta al sitemap correcto
// en cualquier entorno sin tocar código.
const WEB_URL = (
  process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || "https://uzeed.mx"
)
  .trim()
  .replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/dashboard",
        "/chat",
        "/chats",
        "/wallet",
        "/marketplace/compras",
        "/marketplace/vender",
        "/videocall",
        "/cuenta",
        "/favoritos",
        "/pago",
        "/ui",
        "/login",
        "/forgot-password",
        "/api/",
        "/_next/",
        "/calificar",
        "/perfil",
        "/live/studio",
        "/*?sort=*",
      ],
    },
    sitemap: `${WEB_URL}/sitemap.xml`,
  };
}
