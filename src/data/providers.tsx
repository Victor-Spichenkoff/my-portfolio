import Google from "@/assets/logos/Google.webp"
import B7Web from "@/assets/logos/B7Web.png"
import Cisco from "@/assets/logos/Cisco.png"
import Uninter from "@/assets/logos/Uninter.png"
import Cod3r from "@/assets/logos/Cod3r.png"
import Desenvolvedor from "@/assets/logos/Desenvolvedor.io.jpg"

export type MyProviders = "B7Web" | "Google" | "Cisco" | "Uninter" | "Cod3r" | "Desenvolvedor.io"

export const allProvidersImages = {
    Google,
    B7Web,
    Cisco,
    Uninter,
    Cod3r,
    "Desenvolvedor.io": Desenvolvedor
}


export const getProviderImageByName = (providerName: MyProviders) => {
    const image:any = allProvidersImages[providerName]
    return image
}