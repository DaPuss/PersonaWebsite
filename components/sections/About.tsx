import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Typography from '../Typography'
import Animation from '../Animation'
const About = () => {
    const mobileBreakpoint = useMediaQuery('xl')
    const baseDuration = 0.4
    const baseDelay = 0.2
    const afterImage =
        'after:border-2 after:border-primaryHighlight after: after:absolute after:top-[20px] after:left-[20px] after:h-[100%] after:w-[100%] after:-z-50'
    const beforeImage =
        'before:rounded-md before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-primaryHighlight/40 before:z-30 before:hover:before:bg-primaryHighlight/0'

    return (
        <Section id="about">
            <SectionHeader count={1} title={'About Me'} />
            <Animation
                delay={baseDelay * 1}
                duration={baseDuration}
                className={`flex ${
                    mobileBreakpoint ? 'flex-row' : 'flex-col'
                } gap-6 xl: items-center`}
            >
                <div className="flex flex-col gap-6">
                    <Animation delay={baseDelay * 2} duration={baseDuration}>
                        <Typography className="text-lg md:text-xl">
                            Kia Ora! My name is Dylan and I love to solve
                            problems involving technology. My interest in tech
                            started as a kid. To the distaste of my parents
                            I&apos;d spend countless hours breaking the home
                            network trying for a better Call of Duty connection.
                        </Typography>
                    </Animation>
                    <Animation delay={baseDelay * 3} duration={baseDuration}>
                        <Typography className="text-lg md:text-xl">
                            Fast-forward to today, and I&apos;m creeping towards
                            my 4th year working in Tech. In my short time
                            working I&apos;ve been lucky enough to engage with
                            many amazing people across various projects helping
                            to deliver solutions with real value to the New
                            Zealand people.
                        </Typography>
                    </Animation>
                    <Animation delay={baseDelay * 3} duration={baseDuration}>
                        <Typography className="text-lg md:text-xl">
                            I started my career as a Data Entry Assistant at a
                            <Typography
                                variant="link"
                                href="https://www.trademe.co.nz/"
                            >
                                {' TradeMe '}
                            </Typography>
                            as a summer job. After graduation I went on to
                            become a Test Automation engineer at
                            <Typography
                                variant="link"
                                href="https://www.planittesting.com/nz/home"
                            >
                                {' Planit. '}
                            </Typography>
                            where I spent most of my time on a transformation
                            project for the NZ goverment. Finally I&apos;ve
                            landing as a Software Developer at a
                            <Typography
                                variant="link"
                                href="http://capgemini.com/"
                            >
                                {' Capgemini (formally Intergen) '}
                            </Typography>
                            where I still remain.
                        </Typography>
                    </Animation>
                    <Animation delay={baseDelay * 4} duration={baseDuration}>
                        <Typography className="text-lg md:text-xl">
                            When I&apos;m not off playing rugby, baking
                            crossiants, or dropping killsteaks in COD, I try
                            pick up new and emerging technologies to see what
                            they are about, or even spend some time sharpening
                            up stuff I already know.
                        </Typography>
                        <Typography className="text-lg md:text-xl mt-6">
                            Below are some things I&apos;ve been playing with
                            recently:
                        </Typography>
                    </Animation>

                    <Animation delay={baseDelay * 5} duration={baseDuration}>
                        <ul className="marker:text-primaryHighlight text-lg md:text-xl list-disc grid grid-cols-2 px-5 before:content-none align-middle">
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
                                <Typography>Web3.js</Typography>
                            </li>
                            <li className="before:content-none">
                                <Typography>Ethereum/Solidity</Typography>
                            </li>
                        </ul>
                    </Animation>
                </div>
                <div>
                    <Animation delay={baseDelay * 6} duration={baseDuration}>
                        <div
                            className={`ml-0 mt-10 xl:mt-0 xl:ml-10 h-[300px] min-w-[300px]  z-20 relative  transition-opacity ${beforeImage} ${afterImage}`}
                        >
                            <Image
                                src={'sexyMan.jpg'}
                                loader={() => 'sexyMan.jpg'}
                                alt="Picture of the sexy man"
                                layout="fill" // required
                                objectFit="cover" // change to suit your needs
                                className="rounded-md  " // just an example
                            />
                        </div>
                    </Animation>
                </div>
            </Animation>
        </Section>
    )
}

export default About
