import React from 'react'
import Typography from '../Typography'

interface Props {
    company: string
    onClick: (company: string) => void
}
const TabButton = ({ company, onClick }: Props) => {
    return (
        <button
            className={`text-primaryHighlight hover:bg-primaryHighlight/25 border-b-4 md:border-b-0 md:border-l-4 border-primaryGreen3/25 flex items-left text-left px-4 py-4 whitespace-nowrap w-[150px] h-[51px]`}
            onClick={() => onClick(company)}
        >
            <Typography className="font-bold">{company}</Typography>
        </button>
    )
}

export default TabButton
