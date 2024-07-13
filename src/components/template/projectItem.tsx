import { AllStack } from "@/data/stack"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import MokedPortFolios from "@/assets/screenshots/Portfolios.png"
import { Link } from "@/navigation"

interface IProjectItem {
    title: string,
    description?: string
    stacks?: AllStack[]
    bgImageSrc?: string | StaticImport
    isLeftSide?: boolean
    url?: string
}

export const ProjectItem = ({ title, description, bgImageSrc = MokedPortFolios, stacks, isLeftSide=false, url }: IProjectItem) => {
    return ( <Link href={"/"}>
        <div className={`flex ${isLeftSide ? 'md:flex-row-reverse' : 'md:flex-row'} items-center my-8 bg-black/20 p-6 rounded-lg shadow-lg`}>
            <div className="md:w-1/2 p-4 relative">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">{title}</h2>
                    {description && <p className="text-gray-700">{description}</p>}
                    {stacks && (
                        <div className="flex mt-4 space-x-2">
                            {stacks.map((stack, index) => (
                                <div key={index} className="w-8 h-8">
                                    <Image src={stack} alt={stack} width={32} height={32} className="rounded-full" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="md:w-1/2 p-4">
                <Image src={bgImageSrc} alt={title} layout="responsive" width={800} height={450} className="rounded-lg shadow-lg hidden md:block" />
            </div>
        </div>

        </Link>)
}