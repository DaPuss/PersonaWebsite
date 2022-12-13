import Typography from '../Typography'
import { motion } from 'framer-motion'
import React from 'react'

const Intro = () => {
    const baseDuration = 0.5

    const Animation = ({
        delay,
        children,
    }: {
        delay: number
        children: React.ReactNode
    }) => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                type: 'Inertia',
                bounce: 0.2,
                duration: baseDuration,
                delay: delay,
                delayChildren: baseDuration,
            }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 },
            }}
        >
            {children}
        </motion.div>
    )

    return (
        <section className="flex flex-col justify-center items-start  min-h-[100vh] ">
            <Animation delay={baseDuration}>
                <Typography
                    variant="heading2"
                    className="text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-bold md:pr-8 "
                >
                    Hi, my name is
                </Typography>
            </Animation>
            <Animation delay={baseDuration * 2}>
                <Typography
                    variant="heading3"
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
                >
                    Dylan Frewen.
                </Typography>
            </Animation>
            <Animation delay={baseDuration * 3}>
                <Typography
                    variant="heading"
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold "
                >
                    I build things with code.
                </Typography>
                <Typography
                    variant="heading"
                    className="text-xl  md:text-2xl  xl:text-3xl md:pr-8"
                >
                    I’m a software engineer who has a passion solving real world
                    problems with technology. Currently, I’m a Junior full-stack
                    developer at
                    <Typography
                        variant="link"
                        href="https://www.capgemini.com/"
                        className="display: inline"
                    >
                        {' Capgemini '}
                    </Typography>
                    focused on building products for the people of New Zealand.
                </Typography>
            </Animation>
        </section>
    )
}

export default Intro
