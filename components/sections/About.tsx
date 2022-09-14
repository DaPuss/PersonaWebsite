import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Typography from '../Typography'
import { motion } from 'framer-motion'

const About = () => {
    const mobileBreakpoint = useMediaQuery('xl')

    return (
        <Section id="about">
            <SectionHeader count={1} title={'About Me'} />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    type: 'Inertia',
                    bounce: 0.2,
                    duration: 0.5,
                }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.5 },
                }}
                className={`flex ${
                    mobileBreakpoint ? 'flex-row' : 'flex-col'
                } gap-6 xl: items-center`}
            >
                <div className="flex flex-col gap-6">
                    <Typography className="text-xl">
                        Kia Ora! My name is Dylan and I love to solve problems
                        involving technology. My interest in tech started as a
                        kid, I&apos;d spend countless hours configuring the home
                        network all for a better Call of Duty connection. My
                        parents were never fans of my gaming, but ultimately
                        it&apos;s how I fell in love with tech and got to where
                        I am today.
                    </Typography>
                    <Typography className="text-xl">
                        Fast-forward to today, and I&apos;ve worked with many
                        amazing people, through many different roles. I started
                        my career as a Data Entry Assistant at a
                        <Typography
                            variant="link"
                            href="https://www.trademe.co.nz/"
                        >
                            {' product company '}
                        </Typography>
                        for a summer job. I then went on to become a Test
                        Automation engineer doing government contracts for a
                        <Typography
                            variant="link"
                            href="https://www.planittesting.com/nz/home"
                        >
                            {' testing consultancy. '}
                        </Typography>
                        Before finally landing as a Software Developer at a
                        <Typography variant="link" href="http://capgemini.com/">
                            {' services company.'}
                        </Typography>
                    </Typography>
                    <Typography className="text-xl">
                        When I have some spare time, I try pick up new and
                        emerging technologies, ontop of honing my skills though
                        work. Below are some of the technologies I&apos;m
                        currently working with:
                    </Typography>
                    <ul className="marker:text-primaryHighlight text-xl list-disc grid grid-cols-1 md:grid-cols-2 px-5 before:content-none align-middle">
                        <li className="before:content-none">
                            <Typography>JavaScript</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>React.js</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>NEXT.js</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>ASP.NET</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>.NET</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>C# </Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>Ethereum/Solidity</Typography>
                        </li>
                        <li className="before:content-none">
                            <Typography>Web3.js</Typography>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="ml-0 mt-10 xl:mt-0 xl:ml-10 h-[300px] min-w-[300px] before:rounded-md relative before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-primaryHighlight/40 before:z-10 before:hover:before:bg-primaryHighlight/0 transition-opacity">
                        <Image
                            src={'sexyMan.jpg'}
                            loader={() => 'sexyMan.jpg'}
                            alt="Picture of the sexy man"
                            layout="fill" // required
                            objectFit="cover" // change to suit your needs
                            className="rounded-md  " // just an example
                        />
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}

export default About
