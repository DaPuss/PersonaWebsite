import React from 'react'
import Typography from './Typography'
import Link from './Link/Link'
import Animation from './Animation'
import { EMAIL } from '../lib/constants'
const RightFloater = () => {
    return (
        <Animation
            delay={0}
            duration={0.2}
            className="fixed bottom-0 right-[40px] w-[40px] z-100 hidden lg:flex flex-col items-center after:block after:w-[2px] after:bg-primaryText after:h-[150px] after:mx-auto after:mt-10"
        >
            <Link href={`mailto:${EMAIL}`} className="">
                <Typography
                    variant="heading"
                    style={{ writingMode: 'vertical-rl' }}
                    className="text-center tracking-[0.2em] cursor-pointer text-xl hover:text-primaryHighlight"
                >
                    Dylan.Frewen@gmail.com
                </Typography>
            </Link>
        </Animation>
    )
}

export default RightFloater
