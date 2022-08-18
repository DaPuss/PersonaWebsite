import Link from 'next/link'
import Button from '../Button'
import NavDrawer from '../Nav/NavDrawer'
const HeaderLink = ({
    index,
    sectionName,
    href,
}: {
    index: string
    sectionName: string
    href: string
}) => {
    return (
        <Link href={`#${href}`}>
            <div className="cursor-pointer text-primaryHighlight font-bold mx-2">
                {index}.{' '}
                <a className="Vwhite-text text-xl font-bold myfont mx-5 text-primaryText hover:text-primaryHighlight">
                    {sectionName}
                </a>
            </div>
        </Link>
    )
}

const Header = () => {
    return (
        <nav className=" bg-primaryBackground  py-5 shadow-xl">
            <div className="container min-w-full">
                <div className="relative flex items-center h-16 justify-between px-10 pt-10">
                    <div className="text-primaryHighlight text-4xl ml-5 myfont text-left">
                        DF
                    </div>
                    <div className="flex items-center text-right"></div>
                </div>
            </div>
        </nav>
    )
}

export default Header
