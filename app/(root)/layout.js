import Footer from '@/components/root/Footer'
import Navbar from '@/components/root/Navbar'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout