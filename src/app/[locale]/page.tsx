"use client"

import {FullSection} from "@/components/template/fullSection"
import {Presentation} from "@/components/sections/Presentation"
import {ScrollMenu} from "@/components/utils/scrollMenu"
import {Formation} from "@/components/sections/Formation"
import Projects from "@/components/sections/Projects"
import {Contact} from "@/components/sections/Contact"
import {MakeAllApiFirstRequest, teste} from "@/utils/loadAllAPIS"
import {useSearchParams} from 'next/navigation'
import {alertAccessToRedirectApi} from "@/utils/callRedirectApi.ts"
import {useLocale} from "next-intl"
import {ApiUrls} from "@/data/apiUrls.ts";
import {ConnectionTest} from "@/components/utils/apisRequester.tsx";
import {useEffect} from "react";


export default function Home() {
    const searchParams = useSearchParams()
    const locale = useLocale()

    useEffect(() => {
        alertAccessToRedirectApi(locale)
        // const notForce = searchParams.get('notForce')
        // MakeAllApiFirstRequest(notForce)//building new system. ConnectionTest
    }, [locale, searchParams])

    return (
        <div className="text-gray-800 dark:text-gray-300
    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section h-screen snap-y snap-mandatory overflow-y-scroll md:px-10"
             id="scrolavel">
            {ApiUrls.map(url => (
                <ConnectionTest
                    baseUrl={url.baseUrl}
                    name={url.name}
                    key={url.name}
                    redirectApiEndpoint={url.redirectApiEndpoint}
                />
            ))}
            <ScrollMenu/>
            {/* <TopBlur /> */}

            <FullSection>
                <Presentation></Presentation>
            </FullSection>


            <FullSection>
                <Formation/>
            </FullSection>


            <FullSection>
                <Projects/>
            </FullSection>


            <FullSection>
                <Contact/>
            </FullSection>
        </div>
    )
}
