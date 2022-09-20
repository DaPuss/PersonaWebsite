import React, { useState } from 'react'
import TabContent from './TabContent'
import TabButton from './TabButton'
import Animation from '../Animation'
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
    const refs: switchRef = {}
    company.forEach((company) => {
        refs[company] = React.createRef()
    })

    const setCurrentTab = (company: string) => {
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

    const getAnimationDimensions = () => {
        if (typeof window !== 'undefined') {
            const button = document.getElementById(`tabbedButton-${company[0]}`)
            const positionInfo = button?.getBoundingClientRect()
            const height = positionInfo?.height ?? 0
            const width = positionInfo?.width ?? 0
            console.log({ height, width })
            return { height, width }
        }
        return { height: 0, width: 0 }
    }

    return (
        <div className="flex flex-col md:flex-row overflow-hidden">
            <div
                id="tabSelector"
                className="relative flex flex-row md:flex-col px-4"
            >
                {company.map((company) => (
                    <Animation
                        key={`workexp-btn-${company}`}
                        delay={0}
                        duration={0.2}
                    >
                        <TabButton
                            id={`tabbedButton-${company}`}
                            company={company}
                            onClick={setCurrentTab}
                        />
                    </Animation>
                ))}

                <TabButtonAnimation
                    getDimensions={getAnimationDimensions}
                    currentIndex={currentIndex}
                />
            </div>
            <Animation delay={0.2} duration={0.2}>
                <div id="content" className="m-2 ">
                    {experience.map((job, index) => {
                        return (
                            <TabContent
                                key={`workexp-content-${job.company}`}
                                experience={job}
                                index={index}
                                ref={refs[job.company]}
                            />
                        )
                    })}
                </div>
            </Animation>
        </div>
    )
}

export default TabbedDisplay
