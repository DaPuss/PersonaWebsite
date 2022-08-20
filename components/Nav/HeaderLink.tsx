import Link from 'next/link'
import Typography from '../Typography'
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
            <div className="cursor-pointer flex ">
                <Typography
                    variant="heading"
                    className="text-primaryHighlight text-2xl font-bold mx-2"
                >
                    {index}.{' '}
                </Typography>
                <Typography
                    variant="link"
                    className="Vwhite-text text-2xl font-bold myfont mx-5"
                    href={href}
                >
                    {sectionName}
                </Typography>
            </div>
        </Link>
    )
}

export default HeaderLink
