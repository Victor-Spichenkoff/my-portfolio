import {IProjectForItem, projectsWithStack} from "@/data/projects.tsx";
import {getSeveralStacksIcons} from "@/data/stack.tsx";
import T1 from "@/assets/screenshots/ter1.png";
import T3 from "@/assets/screenshots/ter3.png";

import B1 from "@/assets/screenshots/b1.png"
import B2 from "@/assets/screenshots/b2.png"
import B3 from "@/assets/screenshots/b3.png"

import C1 from "@/assets/screenshots/c1.png"
import C2 from "@/assets/screenshots/c2.png"

import P1 from "@/assets/screenshots/port1.png";
import P2 from "@/assets/screenshots/port2.png";
import P3 from "@/assets/screenshots/port3.png";

// import W from "@/assets/"
import A1 from "@/assets/screenshots/artc1.png";
import A2 from "@/assets/screenshots/artc2.png";
import A3 from "@/assets/screenshots/artc3.png";


const extraProjectsWithStack = {
    Bingo: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    Cripto: getSeveralStacksIcons(["HTML", "CSS", "JS", "GitHub"]),
    Portfolios: getSeveralStacksIcons(["HTML", "CSS", "Node" ,"TS", "NEXT", "POST", "Security", "Tail", "GitHub"]),
    Articles: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "Node","Security", "MONGO", "GitHub"])
}


export const allProjectsData: IProjectForItem[] = [

    {
        translate: "portfolios",
        images: [ P1, P2, P3 ],
        stacks: extraProjectsWithStack.Portfolios,
        url: "https://victor-spichenkoff.github.io/portfolio/auth"
    },
    {
        translate: "cri",
        images: [ C1, C2 ],
        stacks: extraProjectsWithStack.Cripto,
        url: "https://victor-spichenkoff.github.io/criptografia/"
    },
    {
        translate: "arc",
        images: [ A1, A2, A3 ],
        stacks: extraProjectsWithStack.Articles,
        url: "https://victor-spichenkoff.github.io/vss-artigos-frontend/#/auth"
    },
    {
        translate: "bing",
        images: [ B1,B2, B3 ],
        stacks: extraProjectsWithStack.Bingo,
        url: "https://victor-spichenkoff.github.io/bingo-build/"
    },
    {
        translate: "weather",
        images: [  ],
        stacks: projectsWithStack.Ter,
        url: "https://victor-spichenkoff.github.io/weather/"
    }
]
