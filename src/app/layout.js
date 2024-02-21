import AuthProvider from '@/providers/AuthProvider'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="https://seeklogo.com/images/G/google-surveys-logo-99C8B79BA5-seeklogo.com.png"/>
      </head>
      <body className={inter.className} >
        <AuthProvider>
          <Toaster position="top-center" />
          {children}
        </AuthProvider>
      </body>
    </html>

  )
}
