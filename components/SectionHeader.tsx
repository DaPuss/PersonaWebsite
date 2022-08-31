import Typography from './Typography'
import 'animate.css'
export default function SectionHeader({
    count,
    title,
}: {
    count: number
    title: string
}) {
    return (
        <div className="flex gap-6 py-10 items-center animate__animated animate__fadeIn">
            <Typography
                variant="heading2"
                as={'h2'}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
                {count}.
            </Typography>
            <Typography
                variant="heading"
                as={'h2'}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold text-primaryHeading"
            >
                {title}
            </Typography>
            <div className="bg-primaryHighlight h-[3px] w-[100%] "></div>
        </div>
    )
}
