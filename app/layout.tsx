import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Ing. Natálie Jurdová - Odhadkyně nemovitostí",
  description: "Oceňuji byty, domy a pozemky – odborné posudky pro dědictví i prodej. Rychle, profesionálně, i online. Získejte odhad zdarma!",
  keywords: [
    "oceňování nemovitostí",
    "odhad ceny nemovitosti",
    "znalecký posudek nemovitosti",
    "odhad tržní ceny bytu",
    "ocenění domu pro dědictví",
    "odhad ceny pozemku",
    "znalecký posudek pro banku",
    "tržní ocenění nemovitosti",
    "online odhad nemovitosti",
    "kolik stojí ocenění nemovitosti",
    "jak zjistit cenu nemovitosti zdarma",
    "kdo dělá odhad ceny nemovitosti",
    "co je potřeba pro znalecký posudek",
    "cena odhadu nemovitosti pro dědictví",
    "online ocenění bytu podle adresy"
  ],
  authors: [{ name: "Jana Jurdová" }],
  creator: "Jana Jurdová",
  publisher: "Jana Jurdová",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ing. Natálie Jurdová - Odhadkyně nemovitostí",
    description: "Oceňuji byty, domy a pozemky – odborné posudky pro dědictví i prodej. Rychle, profesionálně, i online.",
    url: "https://vase-domena.cz",
    siteName: "Oceňování nemovitostí",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon_io/favicon.ico',
      },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
