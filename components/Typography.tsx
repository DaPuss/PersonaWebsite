type variants = 'body' | 'heading' | 'link'

const Typography = ({
    variant = 'body',
    href,
    className,
    children,
}: {
    variant?: variants
    href?: string
    className?: string
    children: React.ReactNode
}) => {
    const sharedClasses =
        'text-primaryText font-share-tech tracking-tighter leading-tight'
    const classes = className ? className : ''
    switch (variant) {
        case 'body':
            return <p className={`${sharedClasses} ${classes}`}>{children}</p>
        case 'heading':
            return <h1 className={`${sharedClasses} ${classes}`}>{children}</h1>
        case 'link':
            return (
                <a
                    className={`${sharedClasses} ${classes} hover:text-primaryHighlight`}
                    href={href}
                >
                    {children}
                </a>
            )
        default:
            return <p className={`${sharedClasses} ${classes}`}>{children}</p>
    }
}

export default Typography
