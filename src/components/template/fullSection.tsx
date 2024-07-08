interface IFullSection {
    children: React.ReactNode
    sectionId?: string
}

export const FullSection = ({ children, sectionId }: IFullSection) => {
    return (
        <>
            <section className="h-screen snap-start max-w-[900px] mx-auto p-4" id={sectionId}>
                {children}
            </section>
        </>
    )
}