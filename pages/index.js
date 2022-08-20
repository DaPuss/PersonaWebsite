import Intro from '../components/sections/intro'
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
