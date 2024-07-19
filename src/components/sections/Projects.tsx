"use client"

import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ProjectItem } from "../template/projectItem"
import { projectsWithStack as p, projectsData } from "@/data/projects"



const Projects = () => {
    const t = useTranslations("Projects")
    const title = t("title")

    return (
        <div id="projects" className="mt-28">
            <Header label={title} />
            <div>
                {projectsData.map((p, i) => {
                    return (
                        <ProjectItem
                            title={t(`${p.traslate}-title`)}
                            description={t(`${p.traslate}-desc`)}
                            stacks={p.stacks}
                            isLeftSide={i % 2 == 1}//coloca a esquerda nos impares
                            bgImagesSrc={p.images}
                            url={p.url}
                            key={i}
                        />
                    )

                })}
            </div>
        </div>
    )
}

export default Projects