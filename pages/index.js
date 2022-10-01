import Intro from '../components/sections/Intro'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
import Layout from '../components/Layout'
import { getAllWorkExpereience, getAllProjects } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, workExperience, personalProjects }) {
    console.log(workExperience)

    return (
        <Layout preview={preview}>
            <Head>
                <title>Dylan Frewen</title>
            </Head>
            <Intro />
            <About />
            <Experience experience={workExperience} />
            <Projects projects={personalProjects} />
            <Contact />
        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
    const workExperience = (await getAllWorkExpereience()) ?? []
    const personalProjects = (await getAllProjects()) ?? []
    return {
        props: { preview, workExperience, personalProjects },
    }
}
