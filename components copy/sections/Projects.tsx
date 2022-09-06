import ProjectGrid from '../ProjectGrid/ProjectGrid'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
const Projects = () => {
    return (
        <Section id="projects">
            <SectionHeader count={3} title={'Personal Projects'} />
            <ProjectGrid />
        </Section>
    )
}

export default Projects
