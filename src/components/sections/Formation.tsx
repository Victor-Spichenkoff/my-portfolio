import { Header } from "../template/header"
import { useTranslations } from "next-intl"
import { ScrolTecnologies } from "../utils/scrollTecnologies"
import { FormationItem } from "../template/formationItem"

export const Formation = () => {
    const t= useTranslations("Formation")
    const title = t("title")
    return (
        <div className="pt-8 relative h-full" id="formation">
            <div ></div> 
            <Header label={title} />
            <div className="max-h-[calc(100vh-200px)] mt-14 flex gap-[50px] flex-wrap justify-center overflow-y-scroll ">
            <FormationItem provider="Uninter"  stacks={["CS"]} percent={20}/>
            <FormationItem provider="Google"  stacks={["CS"]} text="Google Cloud"/>

            <FormationItem provider="B7Web"  stacks={["CS"]}/>
            <FormationItem provider="Cisco"  stacks={["CS"]}/>

            <FormationItem provider="Desenvolvedor.io"  stacks={["CS"]}/>
            <FormationItem provider="Cod3r"  stacks={["CS"]}/>
            </div>

            
        </div>
    )
}