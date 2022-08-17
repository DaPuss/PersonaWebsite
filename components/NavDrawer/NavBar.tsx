import Button from '../Button'
import NavDrawer from '../NavDrawer/NavDrawer'
import HeaderLink from './HeaderLink'
interface props {
    navItems: React.ReactNode[]
}

const NavBar = ({ navItems }: props) => {
    return (
        <nav className=" bg-primaryBackground  py-5 shadow-xl">
            <div className="container min-w-full">
                <div className="relative flex items-center h-16 justify-between px-10 pt-10">
                    <div className="text-primaryHighlight text-4xl ml-5 myfont text-left">
                        DF
                    </div>
                    <div className="flex items-center text-right">
                        {navItems.map((item, index) => item)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
