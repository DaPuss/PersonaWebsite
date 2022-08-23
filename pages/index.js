import Intro from '../components/sections/intro'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllWorkExpereience } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, workExperience, personalProjects }) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>Dylan Frewen</title>
            </Head>
            <Intro />
            <About />
            <Experience />
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
