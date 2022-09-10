import React from 'react'
import Typography from '../Typography'
import { RiGithubLine, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-row gap-5 md:hidden">
                <RiGithubLine
                    className="text-primaryText  hover:text-primaryHighlight"
                    size={25}
                />
                <RiLinkedinFill
                    className="text-primaryText  hover:text-primaryHighlight"
                    size={25}
                />
                <RiInstagramFill
                    className="text-primaryText  hover:text-primaryHighlight"
                    size={25}
                />
            </div>
            <div className="my-5">
                <Typography>Made with ❤️ by Dylan Frewen</Typography>
            </div>
        </div>
    )
}

export default Footer
