import React, { forwardRef } from 'react'
import Typography from '../Typography'
import { Experience } from './TabbedDisplay'

interface Props {
    experience: Experience
    index: number
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const TabContent = (
    { experience, index }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
) => {
    const { title, company, startDate, endDate, keyActivities } = experience
    const startDateFormatted = new Date(startDate)

    const getEndDate = () => {
        if (endDate) {
            const endDateFormatted = new Date(endDate)
            return `${
                months[endDateFormatted.getMonth()]
            } ${endDateFormatted.getFullYear()}`
        }
        return 'Present'
    }

    const getStartDate = () => {
        return `${
            months[startDateFormatted.getMonth()]
        } ${startDateFormatted.getFullYear()}`
    }
    return (
        <div className={`${index == 0 ? '' : 'hidden'}`} ref={ref}>
            <div className="flex py-1">
                <Typography className=" text-xl sm:text-2xl">
                    {title}
                </Typography>
                <Typography
                    variant="link"
                    className=" mx-1 text-xl sm:text-2xl"
                >
                    @ {company}
                </Typography>
            </div>

            <Typography className="py-1 text-lg sm:text-xl uppercase ">
                {getStartDate()} - {getEndDate()}
            </Typography>
            <div>
                <ul className="marker:text-primaryHighlight list-disc spacing-2">
                    {keyActivities.map((activity, index) => (
                        <li className="py-2" key={`${company}-keyact-${index}`}>
                            <Typography className="text-xl ">
                                {activity}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default forwardRef(TabContent)
