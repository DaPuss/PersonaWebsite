const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <section className="flex-col flex my-16 mx-auto">
                {children}
            </section>
        </>
    )
}

export default Section
