import { Header } from "../template/header"
import { useTranslations } from "next-intl"
import { ScrolTecnologies } from "../utils/scrollTecnologies"
import { FormationItem } from "../template/formationItem"
import { formationWithStack as f } from "@/data/formation"

export const Formation = () => {
    const t = useTranslations("Formation")
    const title = t("title")
    return (
        <div className="pt-8 relative h-full " id="formation">
            <div ></div>
            <Header label={title} />
            <div className="max-h-[calc(100vh-160px)] md:max-h-[calc(100vh-184px)] mt-10 flex gap-[50px] flex-wrap justify-center overflow-y-scroll shadow-md bg-black/20 -ml-4 -mr-4 p-4 py-8 md:-ml-0 md:mr-0 md:p-0 md:py-4 rounded-lg">
                <FormationItem provider="Uninter" stacks={f.Uninter} percent="20" bigIcon />
                <FormationItem provider="Google" stacks={f.Google} text="Google Cloud" />

                <FormationItem provider="B7Web" stacks={f.B7Web} />
                <FormationItem provider="Cisco" stacks={f.Cisco} bigIcon />

                <FormationItem provider="Desenvolvedor.io" stacks={f.Desenvolvedor} />
                <FormationItem provider="Cod3r" stacks={f.Cod3r} />
            </div>


        </div>
    )
}