import { RiExternalLinkFill } from 'react-icons/ri'
import Button from '../Button/Button'
import ProjectGrid, { Project } from '../ProjectGrid/ProjectGrid'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <Section id="projects">
            <SectionHeader count={3} title={'Personal Projects'} />
            <ProjectGrid projects={projects} />
            <div className="flex justify-center">
                <Button innerBtnClassName="flex flex-row items-center gap-2">
                    See More
                    <RiExternalLinkFill size={30} />
                </Button>
            </div>
        </Section>
    )
}

export default Projects
