import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})


export const metadata: Metadata = {
  title: {
    default: 'Viewline — Digital Security, Simplified',
    template: '%s | Viewline',
  },
  description:
    'Viewline gives businesses and families the visibility they need to stay safe online — without blocking, tracking, or invading privacy.',
  metadataBase: new URL('https://viewline.io'),
  openGraph: {
    type: 'website',
    siteName: 'Viewline',
    title: 'Viewline — Digital Security, Simplified',
    description:
      'Viewline gives businesses and families the visibility they need to stay safe online — without blocking, tracking, or invading privacy.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="home-bg min-h-screen bg-white font-sans text-gray-900 antialiased">
        <div className='bg-tile2'>
        <Navbar />
        <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
