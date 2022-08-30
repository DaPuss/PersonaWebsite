import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.module.css'

const Link = ({
    href,
    className,
    children,
}: {
    href: string
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div className="align-middle inline">
            <a href={href} className={className}>
                <span
                    className={`link ${styles.linkUnderline} hover:${styles.linkUnderlineHover} ${styles.linkUnderlineBlack} `}
                >
                    {children}
                </span>
            </a>
        </div>
    )
}

export default Link
