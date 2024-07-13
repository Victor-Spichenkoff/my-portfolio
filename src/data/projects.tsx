import { getSeveralStacksIcons, getStackIcon } from "./stack"


export const projectsWithStack = {
    Portfolios: getSeveralStacksIcons(["TS", "NEXT", "POST"]),
    Cisco: getSeveralStacksIcons(["Security"]) ,
    Desenvolvedor: getSeveralStacksIcons(["CS", "DOTNET"]),
    Cod3r: getSeveralStacksIcons(["HTML", "CSS", "JS", "REACT", "GitHub"]) ,
    B7Web: getSeveralStacksIcons(["TS", "NEXT", "Node", "DOC" ,"MONGO", "POST", "GitHub"]) ,
    Uninter: getSeveralStacksIcons(["Diplome"]) 
}