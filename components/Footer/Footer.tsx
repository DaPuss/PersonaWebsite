import React from 'react'
import Typography from '../Typography'
import { RiGithubLine, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'
import { AiTwotoneMail } from 'react-icons/ai'
import Link from '../Link/Link'
import { INSTA_URL, LINKDEN_URL, GITHUB_URL, EMAIL } from '../../lib/constants'
const Footer = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-row gap-5 md:hidden">
                <Link href={GITHUB_URL}>
                    <RiGithubLine
                        className="text-primaryText  hover:text-primaryHighlight"
                        size={25}
                    />
                </Link>
                <Link href={LINKDEN_URL}>
                    <RiLinkedinFill
                        className="text-primaryText  hover:text-primaryHighlight"
                        size={25}
                    />
                </Link>
                <Link href={INSTA_URL}>
                    <RiInstagramFill
                        className="text-primaryText  hover:text-primaryHighlight"
                        size={25}
                    />
                </Link>
                <Link href={`mailto:${EMAIL}`}>
                    <AiTwotoneMail
                        className="text-primaryText  hover:text-primaryHighlight"
                        size={25}
                    />
                </Link>
            </div>
            <div className="my-5">
                <Typography>Made with ❤️ by Dylan Frewen</Typography>
            </div>
        </div>
    )
}

export default Footer
