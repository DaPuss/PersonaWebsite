import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Typography from '../Typography'
const About = () => {
    const mobileBreakpoint = useMediaQuery('xl')
    return (
        <Section id="about">
            <SectionHeader count={1} title={'About Me'} />
            <div
                className={`flex ${
                    mobileBreakpoint ? 'flex-row' : 'flex-col'
                } gap-6 xl: items-center`}
            >
                <div className="flex flex-col gap-6">
                    <Typography className="text-xl">
                        Kia Ora! My name is Dylan and I love to solve problems
                        involving technology. My interest in tech started as a
                        kid, I'd spend countless hours configuring the home
                        network all for a better Call of Duty connection. My
                        parents were never fans of my gaming, but ultimately
                        it's how I fell in love with tech and got to where I am
                        today.
                    </Typography>
                    <Typography className="text-xl">
                        Fast-forward to today, and I've worked with many amazing
                        people, through many different roles. I started my
                        career as a Data Entry Assistant at a
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
                    {/* <Typography>
                        On a more personal note, I like to get out and about
                        with friends and family, cooking/baking delicious food
                        and spending time at the gym to counter all of the
                        calories from that food. I'm a huge fan of Rugby, having
                        almost played every year since the age of 5, though I
                        now perfer playing the non contact version as it results
                        in less black eyes and limpy walks.
                    </Typography> */}
                    <Typography className="text-xl">
                        When I have some spare time, I try pick up new and
                        emerging technologies, ontop of honing my skills though
                        work. Below are some of the technologies I'm currently
                        working with:
                    </Typography>
                    <ul className="marker:text-primaryHighlight text-xl list-disc list- grid  grid-cols-2 px-5">
                        <li>
                            <Typography>JavaScript</Typography>
                        </li>
                        <li>
                            <Typography>React.js</Typography>
                        </li>
                        <li>
                            <Typography>NEXT.js</Typography>
                        </li>

                        <li>
                            <Typography>ASP.NET</Typography>
                        </li>
                        <li>
                            <Typography>.NET</Typography>
                        </li>
                        <li>
                            <Typography>C# </Typography>
                        </li>
                        <li>
                            <Typography>Ethereum/Solidity</Typography>
                        </li>
                        <li>
                            <Typography>Web3.js</Typography>
                        </li>
                    </ul>
                </div>
                <div className="ml-10 h-[300px] w-[300px] relative">
                    <Image
                        src={'sexyMan.jpg'}
                        loader={() => 'sexyMan.jpg'}
                        alt="Picture of the author"
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        className="rounded-md  bg-primaryHighlight/100" // just an example
                    />
                </div>
            </div>
        </Section>
    )
}

export default About
