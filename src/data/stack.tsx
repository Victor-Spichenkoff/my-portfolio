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
import Image from 'next/image'


export type AllStack = "HTML" | "CSS" | "JS" | "TS" | "CS" | "REACT" | "NEXT" | "DOTNET" | "Node" | "POST" | "MONGO" | "Python" | "DOC" | "Diplome"


export const stacksArray = [
    HTML, CSS, JS, TS, CS, REACT, NEXT, DOTNET, Node, POST, MONGO, Python, DOC, Diplome
]

export const stackObj = {
    HTML, CSS, JS, TS, CS, REACT, NEXT, DOTNET, Node, POST, MONGO, Python, DOC, Diplome
}


export const getStackIcon = (name: AllStack) => {
    const image = stackObj[name]
    return (
        <Image src={image} alt='Stack' width={40} height={40} className='ml-5' />
    )
} 