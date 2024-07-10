export type MyProviders = "B7Web" | "Google" | "Cisco" | "Udemy" | "Uninter" | "Cod3r"

interface IFormationItem {
    provider: MyProviders
    img?: string
}

const getFormationImage = (provider: MyProviders) => {
    if(provider =="B7Web") return ""
}


export const FormationItem = () => {
    return (
        <div>

        </div>
    )
}
