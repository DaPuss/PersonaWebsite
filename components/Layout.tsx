import Footer from './sections/Footer'
import Meta from './Meta'
import Header from './sections/Header'
import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="bg-primaryBackground min-w-full min-h-screen">
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout
