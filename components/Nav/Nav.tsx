import Button from '../Button/Button'
import NavDrawer from './NavDrawer'
import HeaderLink from './HeaderLink'
import useMediaQuery from '../../hooks/useMediaQuery'
import useScrollDirection from '../../hooks/useScrollDirection'
import Animation from '../Animation'
import Image from 'next/image'

const Nav = () => {
    const duration = 0.4
    const delay = 0.2
    const navItems: React.ReactNode[] = [
        <Animation key={'header-link-01'} delay={delay * 1} duration={duration}>
            <HeaderLink index={'01'} sectionName="About" href="about" />
        </Animation>,
        <Animation key={'header-link-02'} delay={delay * 2} duration={duration}>
            <HeaderLink
                index={'02'}
                sectionName="Experience"
                href="experience"
            />
        </Animation>,
        <Animation key={'header-link-03'} delay={delay * 3} duration={duration}>
            <HeaderLink index={'03'} sectionName="Projects" href="projects" />
        </Animation>,
        <Animation key={'header-link-04'} delay={delay * 4} duration={duration}>
            <HeaderLink index={'04'} sectionName="Contact" href="contact" />
        </Animation>,

        <Animation key={'header-link-05'} delay={delay * 5} duration={duration}>
            <Button
                className="mx-5"
                onClick={() => {
                    fetch('DylanFrewenResume.pdf').then((response) => {
                        response.blob().then((blob) => {
                            const fileURL = window.URL.createObjectURL(blob)
                            const alink = document.createElement('a')
                            alink.href = fileURL
                            alink.download = 'DylanFrewenResume.pdf'
                            alink.click()
                        })
                    })
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
                <div className="relative flex items-center selection:h-[80px] justify-between px-10 py-5 mr-auto">
                    <a
                        href="#top"
                        className="text-primaryHighlight text-4xl ml-5 share-tech text-left"
                    >
                        <Image
                            src={'logo.png'}
                            loader={() => 'logo.png'}
                            alt="Picture of the sexy man"
                            layout="fixed" // required
                            width={60}
                            height={60}
                            objectFit="cover" // change to suit your needs
                            className="hover:cursor-pointer  " // just an example
                        />
                    </a>
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
