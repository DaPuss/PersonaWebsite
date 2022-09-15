import React, { useState } from 'react'
import TabContent from './TabContent'
import TabButton from './TabButton'
import dynamic from 'next/dynamic'
import Animation from '../Animation'
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

    const ButtonAnimation = dynamic(() => import('./TabButtonAnimation'), {
        ssr: false,
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

    const getAnimationDimensions = () => {
        if (typeof window !== 'undefined') {
            const button = document.getElementById(`tabbedButton-${company[0]}`)
            const positionInfo = button?.getBoundingClientRect()
            const height = positionInfo?.height ?? 0
            const width = positionInfo?.width ?? 0
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
                <Animation delay={0} duration={0.2}>
                    {company.map((company) => (
                        <TabButton
                            id={`tabbedButton-${company}`}
                            key={`workexp-btn-${company}`}
                            company={company}
                            onClick={setCurrentTab}
                        />
                    ))}
                </Animation>

                {/* <DynamicAnimation
                    getDimensions={getAnimationDimensions}
                    currentIndex={currentIndex}
                /> */}
                <ButtonAnimation
                    getDimensions={getAnimationDimensions}
                    currentIndex={currentIndex}
                />
            </div>
            <Animation delay={0.2} duration={0.2}>
                <div id="content" className="m-2">
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
