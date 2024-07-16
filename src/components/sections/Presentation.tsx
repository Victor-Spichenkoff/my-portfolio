import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ThemeToggle } from "../utils/themeToggle"
import { ToggleLocale } from "../utils/toggleLocale"
import { Rows } from "lucide-react"
import Image from "next/image"
import Moked from '@/assets/moked.png'
import { ScrolTecnologies } from "../utils/scrollTecnologies"

export const Presentation = () => {
    const t = useTranslations("Presentation")
    const title = t("title")
    const sub = t("subtitle")
    const text = t("text")

    return (<div className="relative h-screen flex justify-start items-start">
        <div className="flex space-x-4 absolute top-4 flex-wrap" id="me">
            <ThemeToggle />
            <ToggleLocale />
        </div>
        <div className="max-w-[900px] md:ml-20 relative mt-32">
            <div className="flex justify-between max-w-[900px] mx-auto">
                <Header label={title} />

            </div>
            <div className="text-xl dark:text-dark-text font-semibold">{sub}</div>

            <hr className="w-40 h-3 my-8 bg-black border-0 dark:bg-white/85" />


            {/* Minha apresentção grande + foto */}
            <div className="mt-20 flex justify-between">
                <p className="pr-10 md:max-w-[500px] md:text-justify">
                    {text}
                </p>
                <div className="mr-8 -mt-36 hidden md:block">
                    <Image src={Moked} alt="Perfil"
                        className="w-64" />
                </div>
            </div>
        </div>
        <ScrolTecnologies />

        
    </div>)
}