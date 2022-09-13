import Link from './Link/Link'
type variants =
    | 'body'
    | 'body2'
    | 'heading'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'link'

const Typography = ({
    variant = 'body',
    href,
    className,
    children,
    style,
    as,
}: {
    as?: keyof JSX.IntrinsicElements
    variant?: variants
    href?: string
    className?: string
    style?: any
    children: React.ReactNode
}) => {
    const sharedClasses =
        'font-share-tech tracking-tighter leading-tight whitespace-normals'
    const classes = className ? className : ''
    const Tag = as ? as : 'h1'
    switch (variant) {
        case 'body':
            return (
                <p
                    style={style}
                    className={`text-primaryText ${sharedClasses} ${classes}`}
                >
                    {children}
                </p>
            )
        case 'body2':
            return (
                <p
                    style={style}
                    className={`text-primaryHighlight ${sharedClasses} ${classes}`}
                >
                    {children}
                </p>
            )
        case 'heading':
            return (
                <Tag
                    style={style}
                    className={`text-primaryText ${sharedClasses} ${classes}`}
                >
                    {children}
                </Tag>
            )
        case 'heading2':
            return (
                <Tag
                    style={style}
                    className={`text-primaryHighlight ${sharedClasses} ${classes}`}
                >
                    {children}
                </Tag>
            )
        case 'heading3':
            return (
                <Tag
                    style={style}
                    className={`text-primaryHeading ${sharedClasses} ${classes}`}
                >
                    {children}
                </Tag>
            )
        case 'heading4':
            return (
                <h1
                    style={style}
                    className={`text-primaryCream ${sharedClasses} ${classes}`}
                >
                    {children}
                </h1>
            )
        case 'link':
            return (
                <Link
                    href={href || '#'}
                    className={`text-primaryHighlight ${sharedClasses} ${classes}`}
                >
                    {children}
                </Link>
            )
        default:
            return <p className={`${sharedClasses} ${classes}`}>{children}</p>
    }
}

export default Typography
