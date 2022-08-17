import Button from '../Button'
import NavDrawer from '../NavDrawer/NavDrawer'
import NavBar from '../NavDrawer/NavBar'
import HeaderLink from './HeaderLink'

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

    return (
        <nav className=" bg-primaryBackground  py-5 shadow-xl">
            <div className="container min-w-full">
                <div className="relative flex items-center h-16 justify-between px-10 pt-10">
                    <div className="text-primaryHighlight text-4xl ml-5 myfont text-left">
                        DF
                    </div>
                    <NavBar navItems={navItems} />
                </div>
            </div>
        </nav>
    )
}

export default Nav
