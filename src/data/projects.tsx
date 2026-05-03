"use client"

import { AllStack, getSeveralStacksIcons } from "./stack"


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


import { StaticImport } from "next/dist/shared/lib/get-img-props"

import {getRedirectUrl} from "@/utils/callRedirectApi.ts";

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


const baseRedirectUrl = "https://vss-hub.vercel.app"
const urls = {
    // million: "https://https://million-show.vercel.app/",
    // terminal: "https://www.npmjs.com/package/vss-express",
    // serverMaintenance: "https://server-maintenance-page.vercel.app",
    // paginationApi: "https://github.com/Victor-Spichenkoff/pagination-api",
    // ticTacOnline: "https://tic-tac-toe-online-six.vercel.app",
    // z: "https://z-frontend-seven.vercel.app/signin"

    // million: baseRedirectUrl+"/million",
    // terminal: baseRedirectUrl+"/vssExpress",
    // serverMaintenance: baseRedirectUrl+"/serverMaintenance",
    // paginationApi: baseRedirectUrl+"/paginationApi",
    // ticTacOnline: baseRedirectUrl+"/ticTacToe",
    // z: "https://z-frontend-seven.vercel.app/signin",

    million: getRedirectUrl("million"),
    terminal: getRedirectUrl("vssExpress"),
    serverMaintenance: getRedirectUrl("serverMaintenance"),
    paginationApi: getRedirectUrl("paginationApi"),
    ticTacOnline: getRedirectUrl("ticTacToe"),
    z: "https://z-frontend-seven.vercel.app/signin",
}



export const projectsData: IProjectForItem[] = [
    {
        translate: "million",
        images: [ MS1, MS2, MS3, MS4 ],
        stacks: projectsWithStack.Million,
        url: urls.million
    },

    {
        translate: "ter",
        images: [ T1, T3 ],
        stacks: projectsWithStack.Ter,
        url: urls.terminal
    },
    {
        translate: "sm",
        images: [ SM1, SM2, SM3],
        stacks: projectsWithStack.Server,
        url: urls.serverMaintenance
    },

    {
        translate: "tic",
        images: [ TIC1, TIC2, TIC3 ],
        stacks: projectsWithStack.TicTac,
        url: urls.ticTacOnline
    },
]


