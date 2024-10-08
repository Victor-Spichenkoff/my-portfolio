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
import PAG2 from "@/assets/screenshots/pag2.png"
import PAG3 from "@/assets/screenshots/pag3.png"

import B1 from "@/assets/screenshots/b1.png"
import B2 from "@/assets/screenshots/b2.png"
import B3 from "@/assets/screenshots/b3.png"

import C1 from "@/assets/screenshots/c1.png"
import C2 from "@/assets/screenshots/c2.png"


import T1 from "@/assets/screenshots/ter1.png"
import T2 from "@/assets/screenshots/ter2.png"
import T3 from "@/assets/screenshots/ter3.png"

import SM1 from "@/assets/screenshots/sm1.png"
import SM2 from "@/assets/screenshots/sm2.png"
import SM3 from "@/assets/screenshots/sm3.png"



import { StaticImport } from "next/dist/shared/lib/get-img-props"

export const projectsWithStack = {
    Portfolios: getSeveralStacksIcons(["HTML", "CSS", "Node" ,"TS", "NEXT", "POST", "Security", "Tail", "GitHub"]),
    Articles: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "Node","Security", "MONGO", "GitHub"]) ,
    Pagination: getSeveralStacksIcons(["HTML", "CSS", "TS", "Node", "NEXT"]),
    Bingo: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    Cripto: getSeveralStacksIcons(["HTML", "CSS", "JS", "GitHub"]),
    Ter: getSeveralStacksIcons(["CS", "DOTNET", "Security",  "Node"]),
    Server: getSeveralStacksIcons(["NEXT", "TS", "Tail","Security", "GitHub"])
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
        traslate: "ter", 
        images: [ T1, T3 ],
        stacks: projectsWithStack.Ter,
        url: "https://www.npmjs.com/package/vss-express"
    },
    { 
        traslate: "sm", 
        images: [ SM1, SM2, SM3],
        stacks: projectsWithStack.Server,
        url: "https://server-maintenance-page.vercel.app"
    },
    { 
        traslate: "pag", 
        images: [ PAG1, PAG3, PAG2 ],
        stacks: projectsWithStack.Pagination,
        url: "https://github.com/Victor-Spichenkoff/pagination-api"
    },
    { 
        traslate: "arc", 
        images: [ A1, A2, A3 ],
        stacks: projectsWithStack.Articles,
        url: "https://victor-spichenkoff.github.io/vss-artigos-frontend/#/auth"
    },
    // { 
    //     traslate: "bing", 
    //     images: [ B1,B2, B3 ],
    //     stacks: projectsWithStack.Bingo,
    //     url: "https://victor-spichenkoff.github.io/bingo-build/"
    // },
    // { 
    //     traslate: "cri", 
    //     images: [ C1, C2 ],
    //     stacks: projectsWithStack.Cripto,
    //     url: "https://victor-spichenkoff.github.io/criptografia/"
    // },

]