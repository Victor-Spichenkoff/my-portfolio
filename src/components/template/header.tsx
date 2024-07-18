interface IHeader {
    label: string
    subtitle?: string
    fine: boolean
}

export const Header = ({ label, subtitle, fine }: IHeader) => {
    return (
        <header className=" flex-1">
            <h1 className="text-3xl dark:text-gray-100 font-bold">{ label }</h1>
            { subtitle && !fine && (
                <div className="text-xl dark:text-dark-text font-semibold">{subtitle}</div>
            ) }

            { subtitle && fine && (
                <div>{subtitle}</div>
            ) }
        </header>
    )
}