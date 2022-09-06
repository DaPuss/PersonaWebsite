import Section from '../Section'
import SectionHeader from '../SectionHeader'
import TabbedDisplay from '../TabbedDisplay/TabbedDisplay'
import { Experience } from '../TabbedDisplay/TabbedDisplay'

const Experience = ({ experience }: { experience: Experience[] }) => {
    return (
        <Section id="experience">
            <SectionHeader count={2} title={"Where I've Worked"} />
            <div className="flex justify-center">
                <TabbedDisplay experience={experience} />
            </div>
        </Section>
    )
}

export default Experience
