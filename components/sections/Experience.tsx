import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import Typography from '../Typography'
import SectionHeader from '../SectionHeader'
import TabbedDisplay from '../TabbedDisplay/TabbedDisplay'
const Experience = ({ experience }: { experience: any }) => {
    const mobileBreakpoint = useMediaQuery('md')
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
