import { Header } from "../template/header"
import { ProjectItem } from "../template/projectItem"
import { projectsWithStack as p } from "@/data/projects"

export default () => {
    return (
        <div id="projects" className="mt-14">
            <Header label="Projects"/>
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
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                
            />
            <ProjectItem title="Portfolios" description="kdigj iadbf asfif adibfkld flubdufygdsf asfdjds fugsf dsfygsdlhf udosfjds fyv" 
                stacks={p.Portfolios}
                isLeftSide
            />

        </div>
    )
}