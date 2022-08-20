import Button from '../Button'
import NavDrawer from './NavDrawer'
import HeaderLink from './HeaderLink'
import Logo from '../Logo'
import useMediaQuery from '../../hooks/useMediaQuery'
const NavItem = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>
}
const Nav = () => {
    const navItems: React.ReactNode[] = [
        <HeaderLink index={'01'} sectionName="About" href="about-section" />,
        <HeaderLink
            index={'02'}
            sectionName="Experience"
            href="experience-section"
        />,
        <HeaderLink index={'03'} sectionName="Work" href="work-section" />,
        <HeaderLink
            index={'04'}
            sectionName="Contact"
            href="contact-section"
        />,
        <Button onClick={() => {}}>Resume</Button>,
    ]
    const mobileBreakpoint = useMediaQuery('lg')

    return (
        <nav className="py-5 shadow-xl">
            <div className="container min-w-full">
                <div className="relative flex items-center h-16 justify-between px-10 py-10">
                    <div className="text-primaryHighlight text-4xl ml-5 share-tech text-left"></div>
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
