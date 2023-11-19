import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Weebostore</title>
      </head>
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
