import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Frontend Mentor | QR code component',
  icons: {
    icon: '/favicon-32x32.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
