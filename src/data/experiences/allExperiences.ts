import {experiencesStackList} from "@/data/experiences/experiencesData.ts";
import {AllStack} from "@/data/stack.tsx";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import mutilLogo from "@/assets/logos_experiences/mutilogLogo_2.png"
import {ExperienceDate} from "@/components/template/experience/experienceItem.tsx";
// import mutilLogo from "@/assets/logos_experiences/multilog_logo.jpg"

interface IAllExperiences {
    translate: string
    stacks?: AllStack[]
    bulletsCount?: number
    image?: string | StaticImport
    link?:string
    date: ExperienceDate
}


export const AllExperiences: IAllExperiences[] = [
    {
        translate: 'multi',
        stacks: experiencesStackList.multi,
        bulletsCount: 5,
        image: mutilLogo,
        link: "https://site.multilog.com.br",
        date: "02/2026 - 06/2026"
    }
]
