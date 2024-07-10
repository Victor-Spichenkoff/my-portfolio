import { Header } from "../template/header"
import { useTranslations } from "next-intl"
import { ScrolTecnologies2 } from "../utils/scrollTecnologies2"

export const Formation = () => {
    const t= useTranslations("Formation")
    const title = t("title")
    return (
        <div className="pt-8 relative h-full" id="formation">
            <div ></div> 
            <Header label={title} />

            <ScrolTecnologies2 /> 
        </div>
    )
}