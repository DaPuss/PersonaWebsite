import Footer from './sections/Footer'
import Meta from './Meta'
import Header from './sections/Header'
import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
