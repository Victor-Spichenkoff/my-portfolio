import { Header } from "../template/header"
import { useTranslations } from "next-intl"
import { ScrolTecnologies } from "../utils/scrollTecnologies"
import { FormationItem } from "../template/formationItem"
import { formationWithStack as f } from "@/data/formation"
import { AnimatedItem } from "../utils/animationsForProjects"

export const Formation = () => {
    const t = useTranslations("Formation")
    const title = t("title")
    return (
        <div className="pt-8 relative h-full [off-mt-2] overflow-hidden mt-28" id="formation">
            <div ></div>
            <Header label={title} />
            <div className=" mt-10 flex gap-[50px] flex-wrap justify-center shadow-md bg-black/20 px-4 py-8 rounded-lg ">
                {/* <div className=" mt-10 flex gap-[50px] flex-wrap justify-center shadow-md bg-black/20 -ml-4 -mr-4 p-4 py-8 md:-ml-0 md:mr-0 md:p-4 md:py-6 rounded-lg"> */}
                <FormationItem provider="Uninter" stacks={f.Uninter} percent="20" bigIcon />

                <FormationItem provider="Google" stacks={f.Google} text="Google Cloud" />
                <FormationItem provider="B7Web" stacks={f.B7Web} percent="90" />
                <FormationItem provider="Cisco" stacks={f.Cisco} bigIcon />

                <FormationItem provider="Desenvolvedor.io" stacks={f.Desenvolvedor} />
                <FormationItem provider="Cod3r" stacks={f.Cod3r} />
            </div>


        </div>
    )
}