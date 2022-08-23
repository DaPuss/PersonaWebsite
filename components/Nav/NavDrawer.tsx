import React from 'react'
import styles from './NavDrawer.module.css'

const NavItem = ({ children }: { children: React.ReactNode }) => {
    return <div className="text-4xl my-2 py-2">{children}</div>
}

interface props {
    navItems: React.ReactNode[]
}

const NavDrawer = ({ navItems }: props) => {
    const [open, setOpen] = React.useState(false)

    const toggle = () => {
        console.log(!open)
        setOpen(() => !open)
    }
    return (
        <>
            <div
                className={`${
                    open
                        ? 'bg-primaryBackground opacity-5'
                        : 'opacity-100 -z-10'
                } absolute top-0 right-0 h-screen w-screen`}
            ></div>
            <button
                onClick={() => toggle()}
                className="text-primaryHighlight text-4xl ml-5 myfont z-0"
            >
                &#9776;
            </button>
            <nav
                className={`${open ? styles.navbarOpen : styles.navbarClose} ${
                    styles.navbar
                } absolute w-64 overflow-x-scroll bg-primaryBackground top-0 right-0 h-screen`}
            >
                <button
                    onClick={() => toggle()}
                    className="p-2 text-white text-xl font-bold"
                >
                    &#9747;
                </button>
                <div className="flex flex-col items-left">
                    {navItems.map((item, index) => (
                        <NavItem key={index}>{item}</NavItem>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default NavDrawer
