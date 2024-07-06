export const Header = ({ label }: {label: string}) => {
    return (
        <header className="text-3xl dark:text-dark-highlight ">
            <h1>{ label }</h1>
        </header>
    )
}