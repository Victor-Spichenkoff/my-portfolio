import {Header} from "@/components/template/header.tsx";
import {useTranslations} from "next-intl";
import {ExperienceDate, ExperienceItem} from "@/components/template/experience/experienceItem.tsx";
import {AllExperiences} from "@/data/experiences/allExperiences.ts";


export const Experiences = () => {
    const t = useTranslations("Experiences")
    const title = t("title")

    const generateBulletDescription = (count: number, translate: string) => {
        const final = []
        for (let i = 1; i <= count; i++) {
            final.push(t(`${translate}-desc-${i}`))
        }
        return final
    }

    return (
        <div id="experiences" className="mt-28">
            <Header label={title} />
            {AllExperiences.map((exp) => (
            <ExperienceItem
                key={exp.translate}
                title={t(`${exp.translate}-title`)}
                company={t(`${exp.translate}-company`)}
                date={t(`${exp.translate}-date`) as ExperienceDate}
                stacks={exp.stacks}
                bulletDescription={exp.bulletsCount ? generateBulletDescription(exp.bulletsCount, exp.translate) : [] }
                rawDescription={exp.bulletsCount ? undefined : `${exp.translate}-desc`}
                image={exp.image}
                link={exp.link}
            />

            ))}

        </div>
        )
}
