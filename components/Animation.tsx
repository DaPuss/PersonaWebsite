import { motion } from 'framer-motion'
import React from 'react'

const Animation = ({
    delay,
    duration,
    children,
    className,
}: {
    delay: number
    duration: number
    className?: string
    children: React.ReactNode
}) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
            type: 'Inertia',
            bounce: 0.2,
            duration: duration,
            delay: delay,
            delayChildren: duration,
        }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
        }}
        className={className}
    >
        {children}
    </motion.div>
)

export default Animation
