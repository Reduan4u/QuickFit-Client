import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/Provider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuickFit',
  description: 'Stay Healthy, Stay Fit',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <body className={inter.className}>
        <div className=''>
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body>

    </html>
  )
}
