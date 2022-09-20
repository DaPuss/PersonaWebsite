import Meta from './Meta'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import React, { useEffect, useState } from 'react'
import LeftFloater from './LeftFloater'
import RightFloater from './RightFloater'
import Loader from './Loader'
const Layout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])

    return (
        <div
            id="top"
            className="bg-gradient-to-r from-primaryBackground via-[#242b36] to-primaryBackground min-h-[100vh]"
        >
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Meta />
                    <Nav />
                    <LeftFloater />
                    <RightFloater />
                    <main className="max-w-screen-2xl min-h-screen mx-auto px-10 sm:px-20 md:px-30 lg:px-40">
                        {children}
                    </main>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Layout
