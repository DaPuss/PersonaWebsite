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
    as,
}: {
    as?: keyof JSX.IntrinsicElements
    variant?: variants
    href?: string
    className?: string
    children: React.ReactNode
}) => {
    const sharedClasses = 'font-share-tech tracking-tighter leading-tight'
    const classes = className ? className : ''
    const Tag = as ? as : 'h1'
    switch (variant) {
        case 'body':
            return (
                <p
                    className={`text-primaryText text-xl ${sharedClasses} ${classes}`}
                >
                    {children}
                </p>
            )
        case 'body2':
            return (
                <p
                    className={`text-primaryHighlight text-xl ${sharedClasses} ${classes}`}
                >
                    {children}
                </p>
            )
        case 'heading':
            return (
                <Tag className={`text-primaryText ${sharedClasses} ${classes}`}>
                    {children}
                </Tag>
            )
        case 'heading2':
            return (
                <Tag
                    className={`text-primaryHighlight ${sharedClasses} ${classes}`}
                >
                    {children}
                </Tag>
            )
        case 'heading3':
            return (
                <Tag
                    className={`text-primaryGreen3 ${sharedClasses} ${classes}`}
                >
                    {children}
                </Tag>
            )
        case 'heading4':
            return (
                <h1 className={`text-primaryCream ${sharedClasses} ${classes}`}>
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
            console.log('default')
            return <p className={`${sharedClasses} ${classes}`}>{children}</p>
    }
}

export default Typography
