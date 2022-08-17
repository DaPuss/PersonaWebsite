import Link from 'next/link'

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

export default HeaderLink
