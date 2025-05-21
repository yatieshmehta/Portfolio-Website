import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yatiesh Mehta',
  description: 'Portfolio website of Yatiesh Mehta',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/icon.svg' },
    { rel: 'icon', url: '/icon.ico', sizes: 'any' },
    ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-primary text-primary dark:text-white`}>
        {children}
      </body>
    </html>
  )
} 