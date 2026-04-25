import Image from "next/image";
import {AllStack} from "@/data/stack.tsx";
import {Slide} from "react-awesome-reveal";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

export type ExperienceDate = `${string}/20${string} - ${string}/20${string}` | `${string}/20${string} - ${string}`

interface IExperienceItemProps {
    link?: string,
    title: string,
    company: string,
    rawDescription?: string,
    bulletDescription: string[],
    date: ExperienceDate
    stacks?: AllStack[]
    isEven?: boolean
    image?: string | StaticImport
}

export const ExperienceItem = ({
                                   date,
                                   bulletDescription,
                                   link,
                                   rawDescription,
                                   title,
                                   stacks,
                                   isEven,
                                   image,
                                   company
                               }: IExperienceItemProps) => {

    return (<Slide delay={0} direction={isEven ? "left" : "right"} triggerOnce>
        <Link href={link ?? ""} target={"_blank"}>
            <section className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-6 my-8 bg-black/20 p-6 rounded-lg shadow-lg hover:scale-[102%] transition">


                {/* IMAGE */}
                <div className="relative  md:block w-full min-w-[200px] max-w-fit h-[100px] md:h-full md:max-w-[40%] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-lg">
                    {image && (
                        <Image
                            src={image}
                            alt="logo"
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1">

                    {/* HEADER */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                        <h3 className="text-lg text-gray-800 dark:text-gray-400">
                            {company}
                        </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-3 text-gray-600 dark:text-gray-300">
                        {bulletDescription?.length > 0 && (
                            <ul className="list-disc ml-5 space-y-1">
                                {bulletDescription.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {rawDescription && <p>{rawDescription}</p>}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        {/* STACKS */}
                        {stacks && (
                            <div className="flex flex-wrap gap-2 items-center">
                                {stacks.map((stack, index) => (
                                    <Image
                                        key={index}
                                        src={stack}
                                        alt={stack}
                                        width={28}
                                        height={28}
                                        className="rounded"
                                    />
                                ))}
                            </div>
                        )}

                        {/* DATE */}
                        <div className="text-sm text-gray-500 whitespace-nowrap">
                            {date}
                        </div>
                    </div>

                </div>
            </section>




            {/*<section className={"flex my-8 bg-black/20 p-6 rounded-lg shadow-lg hover:scale-[102%]"}>*/}
            {/*    <div className={"w-fit relative min-h-full min-w-[25%] max-w-[40%] overflow-hidden hidden md:block"}>*/}
            {/*        {image && (<*/}
            {/*            Image*/}
            {/*            src={image}*/}
            {/*            alt={"logo"}*/}
            {/*            fill*/}
            {/*            className={"object-cover aspect-[4/3] rounded-lg"}/>)}*/}
            {/*    </div>*/}

            {/*    <div className={"mx-5"}>*/}
            {/*        <h2 className="text-3xl font-bold mb-2">{title}</h2>*/}
            {/*        <h3 className={"text-xl text-gray-800 dark:text-gray-400"}>{company}</h3>*/}
            {/*        /!*Description*!/*/}
            {/*        <div className={"text-md text-gray-600 dark:text-gray-300"}>*/}

            {/*            {bulletDescription?.length > 0 && (*/}
            {/*                <ul className={"list-disc ml-5"}>*/}
            {/*                    {*/}
            {/*                        bulletDescription.map((item, i) => (*/}
            {/*                            <li key={i}>{item}</li>*/}
            {/*                        ))*/}
            {/*                    }*/}
            {/*                </ul>*/}
            {/*            )}*/}
            {/*            {rawDescription && (*/}
            {/*                <p>*/}
            {/*                    {rawDescription}*/}
            {/*                </p>*/}
            {/*            )}*/}
            {/*        </div>*/}

            {/*        /!*Stacks + date*!/*/}
            {/*        <div className={"flex justify-between items-center"}>*/}
            {/*            {stacks && (*/}
            {/*                <div className="flex mt-6 space-x-2 items-center flex-wrap space-y-2">*/}
            {/*                    {stacks.map((stack, index) => (*/}
            {/*                        <div key={index}>*/}
            {/*                            <Image src={stack} alt={stack} height={28} width={28}*/}
            {/*                                   className="h-[28px] w-[28px]"/>*/}
            {/*                        </div>*/}
            {/*                    ))}*/}

            {/*                </div>*/}
            {/*            )}*/}
            {/*            <div className={"text-gray-500"}>*/}
            {/*                {date}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}
        </Link>
    </Slide>)
}
