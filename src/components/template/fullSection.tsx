interface IFullSection {
    children: React.ReactNode
    sectionId?: string
}

export const FullSection = ({ children, sectionId }: IFullSection) => {
    return (
        <>
            <section className="min-h-screen lg:min-h-0 max-w-[1200px] mx-auto p-4" id={sectionId}>
            {/* <section className="min-h-screen snap-start max-w-[900px] mx-auto p-4" id={sectionId}> */}
                {children}
            </section>
        </>
    )
}