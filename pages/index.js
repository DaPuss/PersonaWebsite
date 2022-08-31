import Intro from '../components/sections/Intro'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Layout from '../components/Layout'
import { getAllWorkExpereience } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, workExperience, personalProjects }) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>Dylan Frewen</title>
            </Head>
            <Intro />
            <About />
            <Experience experience={workExperience} />
            <Projects projects={personalProjects} />
        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
    const workExperience = (await getAllWorkExpereience()) ?? []
    const personalProjects = (await getAllWorkExpereience()) ?? []
    return {
        props: { preview, workExperience, personalProjects },
    }
}
