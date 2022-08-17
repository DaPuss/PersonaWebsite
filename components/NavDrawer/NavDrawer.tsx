import React from 'react'
import styles from './NavDrawer.module.css'

const NavItem = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>
}

interface props {
    navItems: React.ReactNode[]
}

const NavDrawer = ({ navItems }: props) => {
    const [open, setOpen] = React.useState(true)

    const toggle = () => {
        console.log(!open)
        setOpen(() => !open)
    }
    return (
        <>
            <div
                className={`${
                    open ? 'bg-primaryBackground opacity-5' : 'opacity-100'
                } absolute top-0 right-0 h-screen w-screen`}
            >
                <div className="flex pr-2 justify-end">
                    <button
                        onClick={() => toggle()}
                        className="text-black text-2xl p-2 font-bold"
                    >
                        &#9776;
                    </button>
                </div>
            </div>

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
                <div>
                    {navItems.map((item, index) => (
                        <NavItem key={index}>{item}</NavItem>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default NavDrawer
