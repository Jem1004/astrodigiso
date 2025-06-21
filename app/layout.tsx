import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astro Digital Solution - Solusi Digital Terdepan',
  description: 'Kami menghadirkan inovasi teknologi terdepan untuk mengembangkan bisnis Anda dengan solusi digital yang komprehensif dan modern.',
  keywords: 'web development, mobile app, digital marketing, UI/UX design, teknologi, Indonesia',
  authors: [{ name: 'Astro Digital Solution' }],
  openGraph: {
    title: 'Astro Digital Solution - Solusi Digital Terdepan',
    description: 'Partner terpercaya untuk transformasi digital bisnis Anda',
    url: 'https://astrodigital.com',
    siteName: 'Astro Digital Solution',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Astro Digital Solution',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astro Digital Solution - Solusi Digital Terdepan',
    description: 'Partner terpercaya untuk transformasi digital bisnis Anda',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}