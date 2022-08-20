import Footer from './sections/Footer'
import Meta from './Meta'
import Nav from './Nav/Nav'
import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-primaryBackground">
            <Meta />
            <Nav />
            <main className="max-w-screen-2xl min-h-screen mx-auto px-40">
                {children}
            </main>
        </div>
    )
}

export default Layout
