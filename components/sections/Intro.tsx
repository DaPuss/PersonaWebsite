import Typography from '../Typography'
const Intro = () => {
    return (
        <section className="flex-col justify-center items-start flex min-h-[100vh]  mx-auto md:mx-10 lg:mx-20">
            <Typography
                variant="heading2"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap font-bold md:pr-8 "
            >
                Hi, my name is
            </Typography>
            <Typography
                variant="heading3"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            >
                Dylan Frewen.
            </Typography>
            <Typography
                variant="heading"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold "
            >
                I build things with code.
            </Typography>
            <Typography
                variant="heading"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:pr-8"
            >
                I’m a software engineer who has a passion solving real world
                problems with technology. Currently, I’m a Junior full-stack
                developer at
                <Typography variant="link" className="display: inline">
                    {' Capgemini '}
                </Typography>
                focused on building products for the people of New Zealand.
            </Typography>
        </section>
    )
}

export default Intro
