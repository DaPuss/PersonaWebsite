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
                    variant="heading2"
                    className="text-2xl font-bold mx-2"
                >
                    {index}.{' '}
                </Typography>
                <Typography
                    variant="heading"
                    className="text-2xl font-bold myfont mx-5 hover:text-primaryHighlight"
                >
                    {sectionName}
                </Typography>
            </div>
        </Link>
    )
}

export default HeaderLink
