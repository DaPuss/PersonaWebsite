import Link from 'next/link'

const HeaderLink = ({index, sectionName, href}: {index: number, sectionName: string, href: string}) => {
  return (
    <Link href={`#${href}`}>
      <div className="cursor-pointer text-red-800">
        {index}. <a className="Vwhite-text text-xl myfont mx-5 text-slate-400 hover:text-red-800">{sectionName}</a>
      </div>
    </Link>
  )
}

const Header = () => {
  return (
    <nav className="Vdark-2 shadow-xl">
      <div className="container min-w-full">
        <div className="relative flex items-center h-16 justify-between">
          <div className="Vwhite-text text-4xl ml-5 myfont text-left">DF</div>
          <div className="flex text-right">
            <HeaderLink index={1} sectionName="About" href="about-section"/>
            <HeaderLink index={2} sectionName="Experience" href="experience-section"/>
            <HeaderLink index={3} sectionName="Work" href="work-section"/>
            <HeaderLink index={4} sectionName="Contact" href="contact-section"/>
            <button className="mx-5 p-1  border-solid border-2 border-slate-500 rounded-md" >Resume</button>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header;