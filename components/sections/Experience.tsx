import Section from '../Section'
import SectionHeader from '../SectionHeader'
import { Experience } from '../TabbedDisplay/TabbedDisplay'
import dynamic from 'next/dynamic'

const Experience = ({ experience }: { experience: Experience[] }) => {
    const TabbedDisplay = dynamic(
        () => import('../TabbedDisplay/TabbedDisplay'),
        {
            ssr: false,
        }
    )

    return (
        <Section id="experience">
            <SectionHeader count={2} title={"Where I've Worked"} />
            <div className="flex justify-center min-h-[400px]">
                <TabbedDisplay experience={experience} />
            </div>
        </Section>
    )
}

export default Experience
