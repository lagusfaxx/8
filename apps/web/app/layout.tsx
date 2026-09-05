import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import "./globals.css";
import AppShell from '../components/AppShell';
import AgeGate from '../components/AgeGate';
import DiscreetProvider from '../components/DiscreetProvider';

export const metadata: Metadata = {
  title: {
    default: 'UZEED: Escorts y experiencias únicas para adultos',
    template: '%s | UZEED',
  },
  applicationName: 'UZEED: Escorts y experiencias únicas para adultos',
  description: 'Encuentra escorts, acompañantes y profesionales verificados en Ciudad de México, Polanco, Guadalajara y Monterrey. Fotos reales, contacto directo por WhatsApp y disponibilidad hoy en UZEED México.',
  keywords: [
    'escorts mexico', 'acompañantes mexico', 'escorts cdmx', 'acompañantes cdmx',
    'escorts polanco', 'escorts condesa', 'escorts guadalajara', 'escorts monterrey',
    'putas cdmx', 'putas mexico', 'servicios para adultos mexico', 'escorts verificadas',
    'masajistas mexico', 'moteles mexico', 'sexshop mexico',
    'escorts colombianas cdmx', 'escorts venezolanas cdmx',
    'escorts cerca de mi', 'acompañantes cerca de mi',
    'escorts disponibles hoy', 'putas verificadas',
  ],
  manifest: '/manifest.webmanifest',
  metadataBase: new URL('https://uzeed.mx'),
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': 'https://uzeed.mx',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://uzeed.mx',
    siteName: 'UZEED: Escorts y experiencias únicas para adultos',
    title: 'UZEED: Escorts, Acompañantes y Profesionales en México',
    description: 'Encuentra escorts, acompañantes y profesionales verificados en Ciudad de México, Polanco, Guadalajara y Monterrey. Fotos reales, contacto directo y disponibilidad hoy.',
    images: [
      {
        url: '/brand/isotipo-new.png',
        width: 720,
        height: 720,
        alt: 'UZEED - Escorts y Profesionales Verificados en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UZEED: Escorts y Acompañantes Verificadas en México',
    description: 'Encuentra escorts, acompañantes y profesionales verificados en Ciudad de México y todo México. Fotos reales y disponibilidad hoy.',
    images: ['/brand/isotipo-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'UZEED: Escorts y experiencias únicas para adultos'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/isotipo-new.png', sizes: '720x720', type: 'image/png' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/brand/isotipo-new.png', sizes: '720x720', type: 'image/png' }]
  },
  other: {
    'google-site-verification': 'google73ed8440237def39',
    // Clasificación explícita para contenido adulto: coherente con SafeSearch
    // y recomendada por Google para este tipo de sitios.
    rating: 'adult',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  // Permitir zoom por accesibilidad/UX móvil (antes bloqueado con
  // maximumScale:1 / userScalable:false).
  maximumScale: 5,
  userScalable: true,
  // Con el teclado abierto el viewport se encoge en vez de quedar tapado: es
  // lo que mantiene fijo el campo de escritura del chat en el teléfono.
  interactiveWidget: 'resizes-content',
  themeColor: '#111827'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://uzeed.mx/#website',
      url: 'https://uzeed.mx',
      name: 'UZEED: Escorts y experiencias únicas para adultos',
      alternateName: 'UZEED',
      description: 'Directorio N°1 de escorts, acompañantes y profesionales verificados en México. Perfiles con fotos reales, contacto directo y disponibilidad hoy.',
      inLanguage: 'es-MX',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://uzeed.mx/escorts?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://uzeed.mx/#organization',
      name: 'UZEED',
      url: 'https://uzeed.mx',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uzeed.mx/brand/isotipo-new.png',
        width: 720,
        height: 720,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://uzeed.mx/contacto',
        availableLanguage: 'Spanish',
        areaServed: 'MX',
      },
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
      sameAs: [],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        {/* Preconnect to third-party origins to reduce DNS+TLS latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://api.uzeed.mx" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.uzeed.mx" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        {/* Preload critical background image so browser fetches it early (LCP improvement) */}
        <link rel="preload" as="image" href="/brand/bg.webp" type="image/webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Anti-flash modo discreto: aplica clase al <html> antes del primer paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('uzeed:discreet')==='1'){document.documentElement.classList.add('discreet');}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen text-white antialiased">
        <AgeGate />
        <DiscreetProvider>
          <AppShell>{children}</AppShell>
        </DiscreetProvider>
        {/* Google tag (gtag.js) — deferred with afterInteractive to avoid blocking FCP/LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18052031619"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18052031619');`}
        </Script>
      </body>
    </html>
  );
}
