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
            <div className="cursor-pointer flex text-xl font-bold hover:text-2xl transition-all duration-100">
                <Typography variant="heading2" className="mx-2">
                    {index}.{' '}
                </Typography>
                <Typography
                    variant="heading"
                    className="myfont mx-5 hover:text-primaryHighlight"
                >
                    {sectionName}
                </Typography>
            </div>
        </Link>
    )
}

export default HeaderLink
