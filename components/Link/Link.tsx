import React from 'react'
import styles from './Link.module.css'

const Link = ({
    href,
    className,
    children,
    target,
}: {
    href: string
    className?: string
    children: React.ReactNode
    target?: string
}) => {
    return (
        <span className="align-middle inline">
            <a target={target} href={href} className={className}>
                <span
                    className={`link ${styles.linkUnderline} hover:${styles.linkUnderlineHover} ${styles.linkUnderlineBlack} `}
                >
                    {children}
                </span>
            </a>
        </span>
    )
}

export default Link
