"use client"

import { AllStack, getSeveralStacksIcons } from "./stack"
import P1 from "@/assets/screenshots/port1.png"
import P2 from "@/assets/screenshots/port2.png"
import P3 from "@/assets/screenshots/port3.png"

import A1 from "@/assets/screenshots/artc1.png"
import A2 from "@/assets/screenshots/artc2.png"
import A3 from "@/assets/screenshots/artc3.png"

import PAG1 from "@/assets/screenshots/pag1.png"
import PAG2 from "@/assets/screenshots/pag2.png"
import PAG3 from "@/assets/screenshots/pag3.png"



import T1 from "@/assets/screenshots/ter1.png"
import T2 from "@/assets/screenshots/ter2.png"
import T3 from "@/assets/screenshots/ter3.png"

import SM1 from "@/assets/screenshots/sm1.png"
import SM2 from "@/assets/screenshots/sm2.png"
import SM3 from "@/assets/screenshots/sm3.png"

import TIC1 from "@/assets/screenshots/tic1.png"
import TIC2 from "@/assets/screenshots/tic2.png"
import TIC3 from "@/assets/screenshots/tic3.png"


import MS1 from "@/assets/screenshots/MS1.png"
import MS2 from "@/assets/screenshots/MS2.png"
import MS3 from "@/assets/screenshots/MS3.png"
import MS4 from "@/assets/screenshots/MS4.png"

import Z1 from "@/assets/screenshots/z1.png"
import Z2 from "@/assets/screenshots/z2.png"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import B1 from "@/assets/screenshots/b1.png";
import B2 from "@/assets/screenshots/b2.png";
import B3 from "@/assets/screenshots/b3.png";

export interface IProjectForItem {
    title?: string
    description?: string
    translate?: string
    images: string[] | StaticImport[]
    stacks?: AllStack[]
    url: string
    noSlide?: boolean
}

export const projectsWithStack = {
    Million: getSeveralStacksIcons(["NEXT", "TS", "Security", "Tail", "Nest"]),


    TicTac: getSeveralStacksIcons(["NEXT", "CS", "DOTNET", "Tail", "DOC"]),
    Pagination: getSeveralStacksIcons(["HTML", "CSS", "TS", "Node", "NEXT"]),

    Ter: getSeveralStacksIcons(["CS", "DOTNET", "Security",  "Node"]),
    Server: getSeveralStacksIcons(["NEXT", "TS", "Tail","Security", "GitHub"]),
    Z: getSeveralStacksIcons(["NEXT", "TS", "Tail","Security", "Node", "Cloud"]),

}



export const projectsData: IProjectForItem[] = [
    {
        translate: "million",
        images: [ MS1, MS2, MS3, MS4 ],
        stacks: projectsWithStack.Million,
        url: "https://https://million-show.vercel.app/"
    },

    {
        translate: "ter",
        images: [ T1, T3 ],
        stacks: projectsWithStack.Ter,
        url: "https://www.npmjs.com/package/vss-express"
    },
    {
        translate: "sm",
        images: [ SM1, SM2, SM3],
        stacks: projectsWithStack.Server,
        url: "https://server-maintenance-page.vercel.app"
    },
    {
        translate: "pag",
        images: [ PAG1, PAG3, PAG2 ],
        stacks: projectsWithStack.Pagination,
        url: "https://github.com/Victor-Spichenkoff/pagination-api"
    },
    {
        translate: "tic",
        images: [ TIC1, TIC2, TIC3 ],
        stacks: projectsWithStack.TicTac,
        url: "https://tic-tac-toe-online-six.vercel.app"
    },
    {
        translate: "z",
        // TODO: Z
        images: [ Z1, Z2 ],
        stacks: projectsWithStack.Z,
        url: "https://victor-spichenkoff.github.io/bingo-build/"
    },

]
