import { getProviderImageByName, MyProviders } from "@/data/providers"
import { AllStack, getStackIcon } from "@/data/stack"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useTransition } from "react"
import { LevelBar } from "../utils/levelBar"







interface IFormationItem {
    text?: string
    provider: MyProviders
    stacks: AllStack[]
    percent?: number
}



export const FormationItem = ({ provider, stacks, text, percent=100 }: IFormationItem) => {
    const t = useTranslations("Formation")
    const bach = t("bach")
    
    return (
        <div className="flex w-[400px] bg-gray-800 rounded-md relative overflow-hidden">
            <div className="w-[100px] bg-white flex items-center">
                { provider !== "Desenvolvedor.io" ? (
                    <Image src={getProviderImageByName(provider)} width={100}
                    alt={"logo " + provider}/>
                ): (
                    <div className="font-serif font-extrabold text-[100px] bg-gradient-to-b from-blue-950 to-blue-700 text-white w-full flex justify-center items-center">d</div>

                ) }
            </div>
            <div className="flex-1 p-2">
                <h2 className="text-xl">{ text ?? provider}</h2>
                <div className="w-full">
                    <LevelBar percent={20}/>
                </div>
                <div>
                    habildiades: kfhs dbfds f flbadsf dslfbdsf sdbfh
                </div>


            </div>

            { provider=="Uninter" && (
                <div className={`absolute text-xs bg-yellow-400 text-black border-2 border-yellow-600
                top-${bach=="Bachelor" ? "2" : "3"} -right-1
                rotate-[40deg] 
                px-2 py-1 
                shadow-lg 
                rounded 
                transform-gpu  
                font-semibold
                z-10
                opacity-90
                `}>
                {/* <div className="absolute text-xs bg-dark-highlight text-black border-2 border-yellow-400
                top-2 -right-1
                    rotate-[40deg]
                "> */}
                    {bach}
                </div>
            ) }
        </div>
    )
}
