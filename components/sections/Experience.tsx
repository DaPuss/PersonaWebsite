import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import Typography from '../Typography'
import SectionHeader from '../SectionHeader'
const Experience = () => {
    const mobileBreakpoint = useMediaQuery('md')
    return (
        <Section id="experience">
            <SectionHeader count={2} title={"Where I've Worked"} />
        </Section>
    )
}

export default Experience
