"use client"

import { getProviderImageByName, MyProviders } from "@/data/providers"
import { AllStack, } from "@/data/stack"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { LevelBar } from "../utils/levelBar"






interface IFormationItem {
    text?: string
    provider: MyProviders
    stacks: AllStack[]
    percent?: string
    bigIcon?: boolean
}



export const FormationItem = ({ provider, stacks, text, percent="100", bigIcon}: IFormationItem) => {
    const t = useTranslations("Formation")
    const Tbach = t("bach")
    const Tskills = t("sk")


    const stacksItem = stacks.map((stack, i) => {
        if(bigIcon) {
            return <Image src={stack} alt={provider} width={30} height={30} key={i} />
        }

        return (
            <Image src={stack} alt={provider} width={20} height={20} key={i} />
        )
    })

    return (
        <div className="flex w-[400px] h-[113px] bg-gray-800 rounded-md relative overflow-hidden text-dark-text shadow-md">
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
                    <LevelBar percent={percent}/>
                </div>
                {/* Habilidades */}
                <div className="flex items-center gap-1">
                    <span className="self-start">{ Tskills }:</span> <span className="flex flex-wrap gap-2">
                        { stacksItem }
                    </span>
                </div>
            </div>

            { provider=="Uninter" && (
                <div className={`absolute text-xs bg-yellow-400 text-black border-2 border-yellow-600
                top-${Tbach=="Bachelor" ? "[8px]" : "4"} 
                -right-${Tbach=="Bachelor" ? "[12px]" : "[17px]"}
                rotate-[40deg] 
                px-2 py-1 
                shadow-lg 
                rounded 
                transform-gpu  
                font-semibold
                z-10
                opacity-90
                `}>
                    {Tbach}
                </div>
            ) }
        </div>
    )
}
