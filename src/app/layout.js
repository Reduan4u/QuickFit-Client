import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Home/footer/Footer'
import Navbar from '@/components/Home/navbar/Navbar'

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
          {children}
        </div>
      </body>

    </html>
  )
}
