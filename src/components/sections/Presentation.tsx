import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ThemeToggle } from "../utils/themeToggle"
import { ToggleLocale } from "../utils/toggleLocale"
import { Rows } from "lucide-react"
import Image from "next/image"
import Moked from '@/assets/moked.png'
import { ScrolTecnologies } from "../utils/scrollTecnologies"
import { Fade, Slide, Reveal } from "react-awesome-reveal";


export const Presentation = () => {
    const t = useTranslations("Presentation")
    const title = t("title")
    const sub = t("subtitle")
    const text = t("text")

    return (
        <Reveal duration={1000} delay={0} triggerOnce>
            <div className="relative h-screen flex justify-start items-start 2xl:items-center">
                <div className="flex space-x-4 absolute top-4 lg: flex-wrap" id="me">
                    <ThemeToggle />
                    <ToggleLocale />
                </div>

                <div className="w-full max-w-[1200px] md:ml-20 relative mt-32">
                    <div className="flex justify-between  mx-auto">

                        <Header label={title} />



                    </div>
                    <div className="text-xl dark:text-dark-text font-semibold">{sub}</div>

                    <hr className="w-40 h-3 my-8 bg-black border-0 dark:bg-white/85" />


                    {/* Minha apresentção grande + foto */}
                    <div className="mt-20 flex justify-between">
                        <p className="pr-10 md:max-w-[500px] md:text-justify">
                            {text}
                        </p>
                        <div className="min-w-[200px] self-end mr-8 md:-mt-36 hidden md:block xl:ml-[110px] float-right">
                            <Image src={Moked} alt="Perfil"
                                className="w-64" />
                        </div>
                    </div>
                </div>

                <ScrolTecnologies />

            </div>
        </Reveal>)
}