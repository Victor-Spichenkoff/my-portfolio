"use client"

import { useTranslations } from "next-intl"
import { Header } from "../template/header"
import { ProjectItem } from "../template/projectItem"
import { projectsWithStack as p, projectsData } from "@/data/projects"



export default () => {
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
                            isLeftSide={i % 2 == 1}//coloc a esquerda nos impares
                            bgImagesSrc={p.images}
                            url={p.url}
                        />
                    )

                })}
            </div>
{/* 
            <ProjectItem title={t("portfolios-title")} description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                isLeftSide
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                isLeftSide
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                isLeftSide
            />  */}

        </div>
    )
}