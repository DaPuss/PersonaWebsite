import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import NavDrawer from './NavDrawer'
import HeaderLink from './HeaderLink'
import Logo from '../Logo'
import useMediaQuery from '../../hooks/useMediaQuery'
import Typography from '../Typography'
import useScrollDirection from '../../hooks/useScrollDirection'
const Nav = () => {
    const navItems: React.ReactNode[] = [
        <HeaderLink index={'01'} sectionName="About" href="about" />,
        <HeaderLink index={'02'} sectionName="Experience" href="experience" />,
        <HeaderLink index={'03'} sectionName="Work" href="work" />,
        <HeaderLink index={'04'} sectionName="Contact" href="contact" />,
        <Button onClick={() => {}}>Resume</Button>,
    ]
    const mobileBreakpoint = useMediaQuery('lg')
    const { scrollDir, scrollPosition } = useScrollDirection()

    return (
        <nav
            className={`fixed min-w-full transition duration-150 ease-out ${
                scrollDir == 'up' ? '' : 'hidden '
            }`}
        >
            <div
                className={`container ${
                    scrollPosition > 80 ? 'bg-primaryBackground/80' : ''
                } min-w-full`}
            >
                <div className="relative flex items-center h-[80px] justify-between px-10 py-10">
                    <div className="text-primaryHighlight text-4xl ml-5 share-tech text-left">
                        <Typography variant="heading2" className="text-5xl">
                            DF
                        </Typography>
                    </div>
                    {mobileBreakpoint ? (
                        <div className="relative flex items-center justify-between">
                            {navItems}
                        </div>
                    ) : (
                        <NavDrawer navItems={navItems} />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav
