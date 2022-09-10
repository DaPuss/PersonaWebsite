import React from 'react'
import ProjectCard from './ProjectCard'

export interface Project {
    title: string
    description: string
    githubLink: string
    websiteLink: string
    technology: string[]
}

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    console.log(projects)
    return (
        <>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    alignment={index % 2 == 0 ? 'left' : 'right'}
                />
            ))}
        </>
    )
}

export default ProjectGrid
