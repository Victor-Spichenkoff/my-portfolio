import { AllStack } from "@/data/stack"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import MokedPortFolios from "@/assets/screenshots/port1.png"
import { Link } from "@/navigation"
import { AutomaticSlider } from "../utils/automaticSlider"
import { AnimatedItemProjects } from "../utils/animationsForProjects"
import { Slide, Reveal, Zoom } from "react-awesome-reveal"

interface IProjectItem {
    title: string,
    description?: string
    stacks?: AllStack[]
    bgImagesSrc?: string[] | StaticImport[]
    isLeftSide?: boolean
    url?: string
}

export const ProjectItem = ({ title, description, bgImagesSrc = [MokedPortFolios], stacks, isLeftSide=false, url }: IProjectItem) => {
    return (
                    
        // <AnimatedItemProjects right={!isLeftSide}>
        <Slide delay={0} direction={isLeftSide ? "left" : "right"} triggerOnce>
        <Link href={url ?? "/"} target="_blank">
        
        <div className={`flex ${isLeftSide ? 'flex-row-reverse' : 'flex-row'} items-center max-w-[900px] mx-auto my-8 bg-black/20 p-6 rounded-lg shadow-lg
            `}
            id="project-item-containter"
            >
            <div className="w-full md:w-1/2 p-4 relative">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">{title}</h2>
                    {description && <p className="text-gray-700">{description}</p>}
                    {/* STACKS */}
                    {stacks && (
                        <div className="flex mt-6 space-x-2 items-center flex-wrap space-y-2">
                            {stacks.map((stack, index) => (
                                <div key={index} className="w-8 h-8">
                                    <Image src={stack} alt={stack} width={32} height={32} className="h-[32px] w-[32px]" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 p-0">
                {/* <Image src={bgImagesSrc[0]} alt={title} layout="responsive" width={800} height={450} className="rounded-lg shadow-lg hidden md:block" /> */}
                <AutomaticSlider images={bgImagesSrc} />
            </div>
        </div>

        </Link>
        </Slide>
        // </AnimatedItemProjects>
        )
}