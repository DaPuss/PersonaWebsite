import React from 'react'
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

const TabContent = React.forwardRef(
    ({ experience, index }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
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
            //if not the first card hide it
            <div
                className={`${
                    index == 0 ? 'flex flex-col gap-4' : 'hidden'
                } max-w-[600px]`}
                ref={ref}
            >
                <div className="flex">
                    <Typography className="text-primaryHeading text-xl sm:text-2xl">
                        {title}
                    </Typography>
                    <Typography
                        variant="link"
                        className=" mx-1 text-xl sm:text-2xl"
                    >
                        @ {company}
                    </Typography>
                </div>

                <Typography className="text-primaryHeading text-lg md:text-xl uppercase ">
                    {getStartDate()} - {getEndDate()}
                </Typography>
                <div className="px-4 md:px-0">
                    <ul className="marker:text-primaryHighlight text-lg list-disc spacing-2">
                        {keyActivities.map((activity, index) => (
                            <li
                                className="my-2 before:content-none"
                                key={`${company}-keyact-${index}`}
                            >
                                <Typography className="text-lg md:text-xl whitespace-normal">
                                    {activity}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
)

TabContent.displayName = 'TabContent'
export default TabContent
