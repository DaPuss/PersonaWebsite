import Section from '../Section'
import Typography from '../Typography'
const Intro = () => {
    return (
        <Section>
            <Typography
                variant="heading"
                className="md:text-2xl font-bold  md:pr-8"
            >
                Hi, my name is
            </Typography>
            <Typography variant="heading" className="md:text-8xl  ">
                Dylan Frewen.
            </Typography>
            <Typography variant="heading" className="md:text-8xl font-bold ">
                I build things on the Internet.
            </Typography>
            <Typography variant="heading" className="md:text-4xl  md:pr-8">
                Some random shit about me loving tech and really wanting to do
                cool stuff and how you should hire me
            </Typography>
        </Section>
    )
}

export default Intro
