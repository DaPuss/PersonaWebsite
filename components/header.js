import Link from 'next/link'
import Container from './container';


const HeaderLink = ({index, sectionName, href}) => {
  return (
    <Link href={`#${href}`}>
      <div className="cursor-pointer text-red-800">
        {index}. <a class="Vwhite-text text-xl myfont mx-5 text-slate-400 hover:text-red-800">{sectionName}</a>
      </div>
    </Link>
  )
}

const Header = () => {
  return (
    <nav class="Vdark-2 shadow-xl">
      <div class="container min-w-full">
        <div class="relative flex items-center h-16 justify-between">
          <div class="Vwhite-text text-4xl ml-5 myfont text-left">DF</div>
          <div class="flex text-right">
            <HeaderLink index="1" sectionName="About" href="about-section"/>
            <HeaderLink index="2" sectionName="Experience" href="experience-section"/>
            <HeaderLink index="3" sectionName="Work" href="work-section"/>
            <HeaderLink index="4" sectionName="Contact" href="contact-section"/>
            <button className="mx-5 p-1  border-solid border-2 border-slate-500 rounded-md" >Resume</button>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header;