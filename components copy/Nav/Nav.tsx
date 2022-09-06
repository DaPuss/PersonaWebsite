import Button from '../Button/Button'
import NavDrawer from './NavDrawer'
import HeaderLink from './HeaderLink'
import useMediaQuery from '../../hooks/useMediaQuery'
import Typography from '../Typography'
import useScrollDirection from '../../hooks/useScrollDirection'
const Nav = () => {
    const navItems: React.ReactNode[] = [
        <HeaderLink
            key={'header-link-01'}
            index={'01'}
            sectionName="About"
            href="about"
        />,
        <HeaderLink
            key={'header-link-02'}
            index={'02'}
            sectionName="Experience"
            href="experience"
        />,
        <HeaderLink
            key={'header-link-03'}
            index={'03'}
            sectionName="Work"
            href="projects"
        />,
        <HeaderLink
            key={'header-link-04'}
            index={'04'}
            sectionName="Contact"
            href="contact"
        />,
        <Button
            className="mx-5"
            key={'header-link-05'}
            onClick={() => {
                console.log('todo')
            }}
        >
            Resume
        </Button>,
    ]
    const mobileBreakpoint = useMediaQuery('lg')
    const { scrollDir, scrollPosition } = useScrollDirection()

    return (
        <nav
            className={`fixed min-w-full transition duration-150 ease-out z-10 ${
                scrollDir == 'up' ? '' : 'hidden '
            }`}
        >
            <div
                className={`container ${
                    scrollPosition > 80 ? 'bg-primaryBackground/80' : ''
                } min-w-full`}
            >
                <div className="relative flex items-center h-[80px] justify-between px-10 py-10 mr-auto">
                    <div className="text-primaryHighlight text-4xl ml-5 share-tech text-left">
                        <Typography variant="heading2" className="text-5xl">
                            DF
                        </Typography>
                    </div>
                    {mobileBreakpoint ? (
                        <div className="ml-auto relative flex items-center justify-between">
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
