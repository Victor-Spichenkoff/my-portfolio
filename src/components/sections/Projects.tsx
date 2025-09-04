"use client"

import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ProjectItem } from "../template/projectItem"
import { projectsWithStack as p, projectsData } from "@/data/projects"
import Reveal, { Bounce, Zoom, Roll, Slide } from "react-awesome-reveal"



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
                                title={t(`${p.translate}-title`)}
                                description={t(`${p.translate}-desc`)}
                                stacks={p.stacks}
                                isLeftSide={i % 2 == 1}//odd=left
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
