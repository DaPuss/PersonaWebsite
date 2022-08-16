import Link from 'next/link'
import React from 'react'
import Button from './Button'
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

const NavItem = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

interface props {
  navItems: React.ReactNode[]
}

const NavDrawer = ({ navItems }: props) => {
  return (
    <nav className="navbar w-64 absolute overflow-x-scroll top-0 right-6 min-h-full bg-primaryBackground">
      {navItems.map((item, index) => (
        <NavItem key={index}>{item}</NavItem>
      ))}
    </nav>
  )
}

export default NavDrawer
