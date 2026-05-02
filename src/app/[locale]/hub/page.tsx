"use client"

import {Header} from "@/components/template/header.tsx";
import {projectsData} from "@/data/projects.tsx";
import {ProjectItem} from "@/components/template/projectItem.tsx";
import {useTranslations} from "next-intl";
import {ScrollMenu} from "@/components/utils/scrollMenu.tsx";
import {allProjectsData, ExFirstPage} from "@/data/allProjects.ts";
import {ThemeToggle} from "@/components/utils/themeToggle.tsx";
import {ToggleLocale} from "@/components/utils/toggleLocale.tsx";
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";

export default function HubPage() {
    const originalT = useTranslations("Projects")
    const extraT = useTranslations("Hub")

    return (
        <div id={"hub"} className={"text-gray-800 dark:text-gray-300 " +
            "    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section h-screen snap-y snap-mandatory overflow-y-scroll md:px-10"}>
            <div className={"flex justify-between mt-5"}>
                <div className={"relative"}>
                    <Link
                        href="/"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md border-2 
                        border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 
                        hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800    transition`}
                    >
                        <ArrowLeftIcon className="w-5 h-5"/>
                    </Link>
                </div>
                <Header label={"Projects Hub"} />

                <div className="flex space-x-4 top-4 lg: flex-wrap" id="me">
                    <ThemeToggle/>
                    <ToggleLocale/>
                </div>
            </div>


            <div>
                {/*EXTRA*/}
                {allProjectsData.map((p, i) => {
                    return (
                        <ProjectItem
                            title={extraT(`${p.translate}-title`)}
                            description={extraT(`${p.translate}-desc`)}
                            stacks={p.stacks}
                            isLeftSide={i % 2 == 1}//coloca a esquerda nos impares
                            bgImagesSrc={p.images}
                            url={p.url}
                            key={i}
                            noSlide={p.noSlide}
                        />
                    )
                })}
                {/*ORIGINAL*/}
                {[...projectsData, ...ExFirstPage].map((p, i) => {
                    return (
                        <ProjectItem
                            title={originalT(`${p.translate}-title`)}
                            description={originalT(`${p.translate}-desc`)}
                            stacks={p.stacks}
                            isLeftSide={i % 2 == 1}//coloca a esquerda nos impares
                            bgImagesSrc={p.images}
                            url={p.url}
                            key={i}
                            noSlide={p.noSlide}
                        />
                    )
                })}
            </div>
        </div>
    )
}
