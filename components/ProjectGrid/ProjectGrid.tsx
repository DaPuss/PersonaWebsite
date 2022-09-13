import React from 'react'
import ProjectCard from './ProjectCard'

export interface Project {
    title: string
    description: string
    githubLink: string
    websiteLink: string
    technology: string[]
    projectImage: {
        url: string
        title: string
    }
}

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
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
