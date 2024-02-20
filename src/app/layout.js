import AuthProvider from '@/providers/AuthProvider'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Universal Survey',
  description: 'made by Team WebD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AuthProvider>
          <Toaster position="top-center" />
          {children}
        </AuthProvider>
      </body>
    </html>

  )
}
