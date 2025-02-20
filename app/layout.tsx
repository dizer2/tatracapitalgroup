import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Tatra Capital Group',
  description: 'Tatra Capital Group is inspired by the majestic Tatra Mountains of Slovakia, reflecting strength, stability, and a deep connection to the Central European region. We specialize in three core areas—Food Industry, Manufacturing, and Real Estate—to help drive innovative growth. Our aim is to shape the future of business and investment in Slovakia by integrating local resources, cutting-edge technologies, and responsible practices.',
  
  openGraph: {
    title: 'Tatra Capital Group',
    description:
      'Tatra Capital Group is inspired by the majestic Tatra Mountains of Slovakia, reflecting strength, stability, and a deep connection to the Central European region.',
    url: 'https://tatracapitalgroup.com',
    siteName: 'Tatra Capital Group',
    images: [
      {
        url: '/images/assets/landing/logo.svg',
        width: 800,
        height: 800,
        alt: 'Tatra Capital Group logo',
      },
    ],
  },


  keywords: 'Tatra Capital, Slovakia, business, food industry, manufacturing, real estate, innovative growth, investment, technology',
  robots: 'index, follow', 
  authors: [{ name: 'Tatra Capital Group' }],
  viewport: 'width=device-width, initial-scale=1', 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-avenir'>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
