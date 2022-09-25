import React from 'react'
import Typography from '../Typography'
import { RiGithubLine, RiExternalLinkFill } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from './ProjectGrid'
import { motion } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery'
interface Props {
    project: Project
    alignment: 'left' | 'right'
}
const ProjectCard = ({ project, alignment }: Props) => {
    const leftClass =
        'col-start-1 col-end-7 row-start-1 row-end-1 gap-8 relative'
    const rightClass =
        'col-start-6 col-end-12 row-start-1 row-end-1 gap-8 relative '
    const mobileClassContent =
        'col-start-1 col-end-[-1] row-start-1 row-end-[-1]'
    const mobileClassImage = 'col-start-1 col-end-[-1] row-start-1 row-end-[-1]'
    const projectContent = alignment === 'left' ? leftClass : rightClass
    const projectImage = alignment === 'left' ? rightClass : leftClass
    const isDesktop = useMediaQuery('lg')

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 },
            }}
        >
            <div
                className={'grid grid-cols-12 before:content-none py-10 my-10 '}
            >
                <div
                    className={`${
                        isDesktop ? projectContent : mobileClassContent
                    } z-20  rounded-md p-5 lg:p-0 `}
                >
                    <div
                        className={`whitespace-normal flex flex-col h-[100%] justify-center ${
                            isDesktop
                                ? alignment === 'left'
                                    ? 'text-left'
                                    : 'text-right'
                                : 'text-center'
                        }`}
                    >
                        <div>
                            <Typography className="text-4xl text-primaryHighlight my-5">
                                {project.title}
                            </Typography>
                        </div>
                        <div className="bg-transparent lg:bg-[#374252] p-5 rounded-md">
                            <Typography className="text-xl">
                                {project.description}
                            </Typography>
                        </div>
                        <div
                            className={`my-5 flex ${
                                isDesktop
                                    ? alignment === 'left'
                                        ? 'justify-start'
                                        : 'justify-end'
                                    : 'justify-center'
                            }`}
                        >
                            {project.technology.map((tech) => (
                                <Typography
                                    key={`${project.title}-${tech}`}
                                    className="text-xl mr-4 text-primaryText/50"
                                >
                                    {tech}
                                </Typography>
                            ))}
                        </div>
                        <div
                            className={`my-5 flex ${
                                isDesktop
                                    ? alignment === 'left'
                                        ? 'justify-start'
                                        : 'justify-end'
                                    : 'justify-center'
                            }`}
                        >
                            <div className="cursor-pointer">
                                <Link href={project.websiteLink}>
                                    <div>
                                        <RiExternalLinkFill
                                            className="mr-5 text-primaryText hover:text-primaryHighlight"
                                            size={30}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="cursor-pointer">
                                <Link href={project.githubLink}>
                                    <div>
                                        <RiGithubLine
                                            className="text-primaryText  hover:text-primaryHighlight"
                                            size={30}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        isDesktop ? projectImage : mobileClassImage
                    } overflow-hidden`}
                >
                    <div className="before:bg-black/80 ml-0 mt-0 md:mt-10 xl:mt-0 xl:ml-10 h-[600px] md:h-[400px] min-w-[70vw] md:block relative before:rounded-md rounded-md before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:lg:bg-primaryHighlight/20 before:z-10 before:hover:before:bg-primaryHighlight/0 transition-opacity">
                        <Image
                            src={project.projectImage.url}
                            alt="Picture of the sexy man"
                            layout="fill" // required
                            objectFit="cover" // change to suit your needs
                            className="rounded-md  " // just an example
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
