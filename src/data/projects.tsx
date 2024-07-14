"use client"

import { useTranslations } from "next-intl"
import { AllStack, getSeveralStacksIcons, getStackIcon } from "./stack"
import P1 from "@/assets/screenshots/port1.png"
import P2 from "@/assets/screenshots/port2.png"
import P3 from "@/assets/screenshots/port3.png"

import A1 from "@/assets/screenshots/artc1.png"
import A2 from "@/assets/screenshots/artc2.png"
import A3 from "@/assets/screenshots/artc3.png"

import PAG1 from "@/assets/screenshots/pag1.png"


import { StaticImport } from "next/dist/shared/lib/get-img-props"

export const projectsWithStack = {
    Portfolios: getSeveralStacksIcons(["HTML", "CSS", "Node" ,"TS", "NEXT", "POST", "Security", "Tail"]),
    Articles: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "Node","Security"]) ,
    Pagination: getSeveralStacksIcons(["HTML", "CSS", "Node", "TS", "NEXT"]),
    Cod3r: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    B7Web: getSeveralStacksIcons(["TS", "NEXT", "Node", "DOC" ,"MONGO", "POST", "GitHub"]) ,
    Uninter: getSeveralStacksIcons(["Diplome"]) 
}

interface IProjectForItem {
    title?: string
    description?: string
    traslate?: string
    images: string[] | StaticImport[]
    stacks?: AllStack[]
    url: string
}

export const projectsData: IProjectForItem[] = [
    { 
        traslate: "portfolios",
        // title: t("portfolios-title"), 
        // description: "Minha descrição sobre ele", 
        images: [ P1, P2, P3 ],
        stacks: projectsWithStack.Portfolios,
        url: "https://victor-spichenkoff.github.io/portfolio/auth"
    },
    { 
        traslate: "arc", 
        images: [ A1, A2, A3 ],
        stacks: projectsWithStack.Articles,
        url: "https://victor-spichenkoff.github.io/vss-artigos-frontend/#/auth"
    },
    { 
        traslate: "pag", 
        images: [ PAG1, A2, A3 ],
        stacks: projectsWithStack.Pagination,
        url: "https://github.com/Victor-Spichenkoff/pagination-api"
    },
]