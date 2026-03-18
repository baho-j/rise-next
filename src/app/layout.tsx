import type {Metadata} from 'next'
import Script from 'next/script'
import {GoogleAnalytics} from '@/lib/analytics'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rise-next.org'

export const metadata: Metadata = {
  title: {
    default: 'RiseNext — Empowering Displaced Students Through Education',
    template: '%s | RiseNext',
  },
  description:
    'RiseNext is a mentoring program bridging the knowledge gap for forcibly displaced high school and university students to access higher education opportunities in Rwanda and beyond.',
  keywords: [
    'RiseNext',
    'refugee education',
    'displaced students',
    'mentoring',
    'Rwanda',
    'higher education',
    'UNHCR',
    'CIEE',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'RiseNext',
    title: 'RiseNext — Empowering Displaced Students Through Education',
    description:
      'RiseNext is a mentoring program bridging the knowledge gap for forcibly displaced high school and university students to access higher education opportunities in Rwanda and beyond.',
    images: [
      {
        url: '/Workshop-1.JPG',
        width: 1200,
        height: 630,
        alt: 'RiseNext — Empowering Displaced Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@risenext',
    creator: '@risenext',
    title: 'RiseNext — Empowering Displaced Students Through Education',
    description:
      'RiseNext is a mentoring program bridging the knowledge gap for forcibly displaced high school and university students to access higher education opportunities.',
    images: ['/Workshop-1.JPG'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en"  suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}

        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/counterup/counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
