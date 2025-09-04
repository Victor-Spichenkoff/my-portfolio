import {IProjectForItem, projectsData, projectsWithStack} from "@/data/projects.tsx";
import {getSeveralStacksIcons} from "@/data/stack.tsx";
import T1 from "@/assets/screenshots/ter1.png";
import T3 from "@/assets/screenshots/ter3.png";

import B1 from "@/assets/screenshots/b1.png"
import B2 from "@/assets/screenshots/b2.png"
import B3 from "@/assets/screenshots/b3.png"

import C1 from "@/assets/screenshots/c1.png"
import C2 from "@/assets/screenshots/c2.png"


const extraProjectsWithStack = {
    Bingo: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    Cripto: getSeveralStacksIcons(["HTML", "CSS", "JS", "GitHub"]),
    Portfolios: getSeveralStacksIcons(["HTML", "CSS", "Node" ,"TS", "NEXT", "POST", "Security", "Tail", "GitHub"]),
}


export const allProjectsData: IProjectForItem[] = [
    {
        translate: "bing",
        images: [ B1,B2, B3 ],
        stacks: extraProjectsWithStack.Bingo,
        url: "https://victor-spichenkoff.github.io/bingo-build/"
    },
    {
        translate: "cri",
        images: [ C1, C2 ],
        stacks: extraProjectsWithStack.Cripto,
        url: "https://victor-spichenkoff.github.io/criptografia/"
    },
    {
        translate: "ter",
        images: [ T1, T3 ],
        stacks: projectsWithStack.Ter,
        url: "https://www.npmjs.com/package/vss-express"
    }
]
