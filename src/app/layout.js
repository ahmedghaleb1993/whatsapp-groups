import { Tajawal } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Head from 'next/head'

const inter = Tajawal({ subsets: ['arabic'],
weight: ['400', '500', '700'],
})

export const metadata = {
  icon: './favicon.ico', // /public path
  title: 'قروبات',
  description: 'قروبات واتساب ... انضم اليها الان',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9187309347349975"
          crossorigin="anonymous"></script>
        )}

      <meta name="google-site-verification" content="p8gZ86O0dw4ZAySROThlK4k5xK7iVajRYJq2p4yEE94" />

      </head>
      

      <body className={` ${inter.className} bg-[#EEEEEE]`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
