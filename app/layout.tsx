import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yatiesh Mehta',
  description: 'Portfolio website of Yatiesh Mehta',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%233b82f6"/><text x="50" y="55" font-size="65" font-family="Georgia" fill="white" text-anchor="middle" dominant-baseline="middle">λ</text></svg>',
  },
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