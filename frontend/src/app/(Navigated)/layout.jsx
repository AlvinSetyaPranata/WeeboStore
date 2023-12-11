import Footer from '@/components/Footer'
import Navbar from '@/components/Organisms/Navbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

