import Image from "next/image";
import {AllStack} from "@/data/stack.tsx";
import {Slide} from "react-awesome-reveal";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import {StackCardItem} from "@/components/template/stackCardItem.tsx";

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
            <section
                className="group max-w-[900px] mx-auto flex flex-col gap-6 my-10
                  bg-black/20
                  backdrop-blur-md border border-white/10
                  p-6 md:p-8 rounded-2xl shadow-xl
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
                <div className="flex flex-col md:flex-row gap-6">

                    {/* IMAGE */}
                    <div
                        className="relative w-full md:w-[40%] aspect-[4/3]
                         overflow-hidden rounded-xl flex-shrink-0"
                    >
                        {image && (
                            <Image
                                src={image}
                                alt="logo"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1 justify-between">

                        {/* HEADER */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                {title}
                            </h2>
                            <h3 className="text-md md:text-lg text-zinc-400 mt-1">
                                {company}
                            </h3>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-4 text-zinc-300 leading-relaxed">
                            {bulletDescription?.length > 0 && (
                                <ul className="list-disc ml-5 space-y-1 marker:text-zinc-500">
                                    {bulletDescription.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {rawDescription && (
                                <p className="mt-2 text-sm md:text-base text-zinc-400">
                                    {rawDescription}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-white/10">

                    {/* STACKS */}
                    {stacks && (
                        <div className="flex flex-wrap gap-2 items-center">
                            {stacks.map((stack, index) => (
                                <StackCardItem key={index} src={stack} alt={stack}/>
                            ))}
                        </div>
                    )}

                    {/* DATE */}
                    <div className="text-xs md:text-sm text-zinc-500 whitespace-nowrap">
                        {date}
                    </div>
                </div>
            </section>


            {/*<section*/}
            {/*    className="max-w-[900px] mx-auto flex flex-col flex-wrap md:flex-row gap-6 my-8 bg-black/20 p-6 rounded-lg shadow-lg hover:scale-[102%] transition">*/}

            {/*    <div className={"flex flex-row gap-4"}>*/}
            {/*        /!* IMAGE *!/*/}
            {/*        <div*/}
            {/*            className="relative  md:block w-full min-w-[200px] max-w-fit h-[100px] md:h-full md:max-w-[40%] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-lg">*/}
            {/*            {image && (*/}
            {/*                <Image*/}
            {/*                    src={image}*/}
            {/*                    alt="logo"*/}
            {/*                    fill*/}
            {/*                    className="object-cover"*/}
            {/*                />*/}
            {/*            )}*/}
            {/*        </div>*/}

            {/*        /!* CONTENT *!/*/}
            {/*        <div className="flex flex-col flex-1">*/}

            {/*            /!* HEADER *!/*/}
            {/*            <div>*/}
            {/*                <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>*/}
            {/*                <h3 className="text-lg text-gray-800 dark:text-gray-400">*/}
            {/*                    {company}*/}
            {/*                </h3>*/}
            {/*            </div>*/}

            {/*            /!* DESCRIPTION *!/*/}
            {/*            <div className="mt-3 text-gray-600 dark:text-gray-300">*/}
            {/*                {bulletDescription?.length > 0 && (*/}
            {/*                    <ul className="list-disc ml-5 space-y-1 text-justify">*/}
            {/*                        {bulletDescription.map((item, i) => (*/}
            {/*                            <li key={i}>{item}</li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                )}*/}

            {/*                {rawDescription && <p>{rawDescription}</p>}*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*    </div>*/}

            {/*    /!* FOOTER *!/*/}
            {/*    <div className="flex justify-between w-full sm:flex-row sm:items-center sm:justify-between gap-3">*/}

            {/*        /!* STACKS *!/*/}
            {/*        {stacks && (*/}
            {/*            <div className="flex flex-wrap gap-2 items-center">*/}
            {/*                {stacks.map((stack, index) => (*/}
            {/*                    <Image*/}
            {/*                        key={index}*/}
            {/*                        src={stack}*/}
            {/*                        alt={stack}*/}
            {/*                        width={28}*/}
            {/*                        height={28}*/}
            {/*                        className="rounded"*/}
            {/*                    />*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        )}*/}

            {/*        /!* DATE *!/*/}
            {/*        <div className="text-sm text-gray-700 dark:text-gray-500 whitespace-nowrap">*/}
            {/*            {date}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </Link>
    </Slide>)
}
