import React from 'react'
import { RiGithubLine, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'
import { LINKDEN_URL, INSTA_URL, GITHUB_URL } from '../lib/constants'
import Link from './Link/Link'
import Animation from './Animation'
const LeftFloater = () => {
    return (
        <Animation
            delay={0}
            duration={0.2}
            className="fixed bottom-0 left-[40px] w-[40px] z-100 hidden lg:flex flex-col items-center gap-10 after:block after:w-[2px] after:bg-primaryText after:h-[150px] after:mx-auto after:mt-10"
        >
            <Link href={GITHUB_URL}>
                <RiGithubLine
                    className="text-primaryText  hover:text-primaryHighlight  cursor-pointer"
                    size={25}
                />
            </Link>

            <Link href={LINKDEN_URL}>
                <RiLinkedinFill
                    className="text-primaryText  hover:text-primaryHighlight  cursor-pointer"
                    size={25}
                />
            </Link>

            <Link href={INSTA_URL}>
                <RiInstagramFill
                    className="text-primaryText hover:text-primaryHighlight cursor-pointer"
                    size={25}
                />
            </Link>
        </Animation>
    )
}

export default LeftFloater
