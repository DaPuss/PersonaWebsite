import React from 'react'
import Typography from './Typography'
import Link from './Link/Link'
import { EMAIL } from '../lib/constants'
const RightFloater = () => {
    return (
        <div className="fixed bottom-0 right-[40px] w-[40px] z-100 hidden md:flex flex-col items-center after:block after:w-[2px] after:bg-primaryText after:h-[150px] after:mx-auto after:mt-10">
            <Link href={`mailto:${EMAIL}`}>
                <Typography
                    variant="heading"
                    style={{ writingMode: 'vertical-rl' }}
                    className="text-center tracking-[0.1em]  cursor-pointer"
                >
                    Dylan.Frewen@gmail.com
                </Typography>
            </Link>
        </div>
    )
}

export default RightFloater
