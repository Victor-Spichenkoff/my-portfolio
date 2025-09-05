import {IProjectForItem} from "@/data/projects.tsx";
import {getSeveralStacksIcons} from "@/data/stack.tsx";

import B1 from "@/assets/screenshots/b1.png"
import B2 from "@/assets/screenshots/b2.png"
import B3 from "@/assets/screenshots/b3.png"

import C1 from "@/assets/screenshots/c1.png"
import C2 from "@/assets/screenshots/c2.png"

import P1 from "@/assets/screenshots/port1.png";
import P2 from "@/assets/screenshots/port2.png";
import P3 from "@/assets/screenshots/port3.png";

import W from "@/assets/screenshots_hub/w.png"
import FB from "@/assets/screenshots_hub/fb.png"
import HCSS1 from "@/assets/screenshots_hub/hc1.png"
import HCSS2 from "@/assets/screenshots_hub/hc2.png"
import A1 from "@/assets/screenshots_hub/artc1.png";
import A2 from "@/assets/screenshots_hub/artc2.png";
import A3 from "@/assets/screenshots_hub/artc3.png";


const extraProjectsWithStack = {
    Bingo: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    Cripto: getSeveralStacksIcons(["HTML", "CSS", "JS", "GitHub"]),
    Portfolios: getSeveralStacksIcons(["HTML", "CSS", "Node" ,"TS", "NEXT", "POST", "Security", "Tail", "GitHub"]),
    Articles: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "Node","Security", "MONGO", "GitHub"]),
    Wheather: getSeveralStacksIcons(["NEXT", "CSS", "GitHub", "TS"]),
    Flappy: getSeveralStacksIcons(["HTML", "CSS", "JS", "GitHub"]),
    HtmlCss: getSeveralStacksIcons(["NEXT", "CSS", "GitHub"]),
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
        images: [ W, W ],
        noSlide: true,
        stacks: extraProjectsWithStack.Wheather,
        url: "https://victor-spichenkoff.github.io/weather/"
    },
    {
        translate: "flappy",
        images: [ FB, FB ],
        noSlide: true,
        stacks: extraProjectsWithStack.Flappy,
        url: "https://victor-spichenkoff.github.io/flappy-bird/"
    },
    {
        translate: "html_css",
        images: [ HCSS1, HCSS2 ],
        stacks: extraProjectsWithStack.HtmlCss,
        url: "https://victor-spichenkoff.github.io/flappy-bird/"
    },
]
