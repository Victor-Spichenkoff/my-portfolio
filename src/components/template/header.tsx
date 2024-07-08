interface IHeader {
    label: string
    subtitle?: string
}

export const Header = ({ label, subtitle }: IHeader) => {
    return (
        <header className="text-3xl dark:text-gray-100 font-bold flex-1">
            <h1>{ label }</h1>
        </header>
    )
}