import Meta from './Meta'
import Nav from './Nav/Nav'
import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gradient-to-r from-primaryBackground via-[#242b36] to-primaryBackground">
            <Meta />
            <Nav />
            <main className="max-w-screen-2xl min-h-screen mx-auto px-10 sm:px-20 md:px-30 lg:px-40">
                {children}
            </main>
        </div>
    )
}

export default Layout
