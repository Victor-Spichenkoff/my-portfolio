import React from 'react'
import Node from "@/assets/stacks/node.png"
import JS from "@/assets/stacks/js.png"
import TS from "@/assets/stacks/ts.png"
import Diplome from "@/assets/stacks/diplome.png"
import CS from "@/assets/stacks/csharp.png"
import HTML from "@/assets/stacks/html.png"
import CSS from "@/assets/stacks/css.png"
import Python from "@/assets/stacks/python.png"
import REACT from "@/assets/stacks/react.png"
import NEXT from "@/assets/stacks/next.png"
import MONGO from "@/assets/stacks/mongo.png"
import POST from "@/assets/stacks/post.png"
import DOTNET from "@/assets/stacks/net.png"
import DOC from "@/assets/stacks/doc.png"
import Cloud from "@/assets/stacks/Cloud.png"
import Security from "@/assets/stacks/Security.png"
import GitHub from "@/assets/stacks/GitHub.webp"
import Tail from "@/assets/stacks/tail.png"
import Image from 'next/image'

export type AllStack = "HTML" | "CSS" | "JS" | "TS" | "CS" | "REACT" | "NEXT" | "DOTNET" | "Node" | "POST" | "MONGO" | "Python" | "DOC" | "Diplome" | "Security" | "Cloud" | "GitHub" | "Tail"


export const stacksArray = [
    HTML, CSS, JS, TS, GitHub, CS, REACT, NEXT, Tail,DOTNET, Node, POST, MONGO, Python, DOC, Cloud, Security, Diplome
]

export const stackObj = {
    HTML, CSS, JS, TS, GitHub, CS, REACT, NEXT, DOTNET, Node, POST, MONGO, Python, DOC, Cloud, Security, Diplome, Tail
}


/**
 * 
 * 
 * @returns Image formatada para o slider
 */
export const getStackIcon = (name: AllStack) => {
    const image = stackObj[name]
    return (
        <Image src={image} alt='Stack' width={40} height={40} className='ml-5' />
    )
} 


export const getSeveralStacksIcons = (names: AllStack[]) => {
    const final: any[] = []
    names.forEach(name => {
        final.push(stackObj[name])
    })
    console.log("Item final", final)
    return final
}