import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ThemeToggle } from "../utils/themeToggle"
import { ToggleLocale } from "../utils/toggleLocale"
import { Rows } from "lucide-react"

export const Presentation = () => {
    const t = useTranslations("Presentation")
    const title = t("title")
    const sub = t("subtitle")
    const text = t("text")

    return (
        <div className="max-w-[900px] mx-auto relative">
            <div className="flex justify-between max-w-[900px] mx-auto">
                <Header label={title} />
                <div className="flex space-x-4" id="me">
                    <ThemeToggle />
                    <ToggleLocale />
                </div>
            </div>
            <div className="text-xl dark:text-dark-text font-semibold">{ sub }</div>

            <hr className="w-40 h-3 my-8 bg-white border-0 dark:bg-white/85"/>


            {/* Minha apresentção grande + foto */}
            <div className="mt-20">
                <p className="pr-10 md:max-w-[500px] md:text-justify">
                    {text}
                </p>
            </div>
        </div>
    )
}