import React, { useState } from 'react'
import TabContent from './TabContent'
import TabButton from './TabButton'
import TabButtonAnimation from './TabButtonAnimation'
export interface Experience {
    title: string
    company: string
    startDate: string
    endDate?: string
    description: string
    keyActivities: string[]
}

type switchRef = Record<string, React.RefObject<HTMLDivElement>>

const TabbedDisplay = ({ experience }: { experience: Experience[] }) => {
    const [currentIndex, setcurrentIndex] = useState(0)

    const company = experience.map((job) => job.company)
    let refs: switchRef = {}
    company.forEach((company) => {
        refs[company] = React.createRef()
    })

    const setCurrentTab = (company: string) => {
        //TODO: this is gross and needs to be fixed
        let index = 0
        for (const key in refs) {
            const className = refs[key].current?.className
            if (!className?.includes('hidden')) {
                refs[key].current?.classList.add('hidden')
            }
            if (key === company) {
                refs[key].current?.classList.remove('hidden')
                setcurrentIndex(index)
            }
            index++
        }
    }

    return (
        <div className="flex flex-col md:flex-row ">
            <div
                id="tabSelector"
                className="relative flex flex-row md:flex-col px-4"
            >
                {company.map((company) => (
                    <TabButton company={company} onClick={setCurrentTab} />
                ))}
                <TabButtonAnimation currentIndex={currentIndex} />
            </div>
            <div id="content" className="m-2">
                {experience.map((job, index) => {
                    return (
                        <TabContent
                            experience={job}
                            index={index}
                            ref={refs[job.company]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TabbedDisplay
