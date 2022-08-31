import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Typography from '../Typography'
const Projects = () => {
    return (
        <Section id="about">
            <SectionHeader count={1} title={'Personal Projects'} />
        </Section>
    )
}

export default Projects
