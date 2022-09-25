import Button from '../Button/Button'
import NavDrawer from './NavDrawer'
import HeaderLink from './HeaderLink'
import useMediaQuery from '../../hooks/useMediaQuery'
import Typography from '../Typography'
import useScrollDirection from '../../hooks/useScrollDirection'
import Animation from '../Animation'
import styles from './NavDrawer.module.css'

const Nav = () => {
    const duration = 0.2
    const navItems: React.ReactNode[] = [
        <Animation key={'header-link-01'} delay={0} duration={duration}>
            <HeaderLink index={'01'} sectionName="About" href="about" />
        </Animation>,
        <Animation
            key={'header-link-02'}
            delay={duration * 2}
            duration={duration}
        >
            <HeaderLink
                index={'02'}
                sectionName="Experience"
                href="experience"
            />
        </Animation>,
        <Animation
            key={'header-link-03'}
            delay={duration * 3}
            duration={duration}
        >
            <HeaderLink index={'03'} sectionName="Projects" href="projects" />
        </Animation>,
        <Animation
            key={'header-link-04'}
            delay={duration * 4}
            duration={duration}
        >
            <HeaderLink index={'04'} sectionName="Contact" href="contact" />
        </Animation>,

        <Animation
            key={'header-link-05'}
            delay={duration * 5}
            duration={duration}
        >
            <Button
                className="mx-5"
                onClick={() => {
                    console.log('todo')
                }}
            >
                Resume
            </Button>
        </Animation>,
    ]
    const mobileBreakpoint = useMediaQuery('lg')
    const { scrollDir, scrollPosition } = useScrollDirection()

    return (
        <nav
            className={`fixed min-w-full transition duration-150 ease-out z-50 ${
                scrollDir == 'up' ? '' : 'hidden '
            }`}
        >
            <div
                className={`container ${
                    scrollPosition > 80 ? 'bg-primaryBackground/80' : ''
                } min-w-full`}
            >
                <div className="relative flex items-center selection:h-[80px] justify-between px-10 py-10 mr-auto">
                    <div className="text-primaryHighlight text-4xl ml-5 share-tech text-left">
                        <Typography
                            variant="link"
                            href="#top"
                            className="text-5xl"
                        >
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
