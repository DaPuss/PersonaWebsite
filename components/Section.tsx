const Section = ({
    id,
    children,
}: {
    id: string
    children: React.ReactNode
}) => {
    return (
        <section
            id={id}
            className="flex-col flex pb-20 mt-20 mx-auto md:mx-10 lg:mx-20"
        >
            {children}
        </section>
    )
}

export default Section
