"use client"

import { Footer } from "@/components/template/footer";
import { FullSection } from "@/components/template/fullSection";
import { Presentation } from "@/components/sections/Presentation";
import { ScrollMenu } from "@/components/utils/scrollMenu";
import { Formation } from "@/components/sections/Formation";
import Projects from "@/components/sections/Projects";
import { TopBlur } from "@/components/utils/topBlur";
import { Contact } from "@/components/sections/Contact";
import { useCallback, useEffect } from "react";
import { MakeAllApiFirstRequest, teste } from "@/utils/loadAllAPIS";


export default function Home() {
  useEffect(() => {
    MakeAllApiFirstRequest();
  }, [])

  return (
    <div className="text-gray-800 dark:text-gray-300
    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section h-screen snap-y snap-mandatory overflow-y-scroll md:px-10" id="scrolavel">
      <ScrollMenu />
      {/* <TopBlur /> */}

      {/* <FullSection>
        <Presentation></Presentation>
      </FullSection> */}


      <FullSection>
        <Formation />
      </FullSection>


      <FullSection>
        <Projects />
      </FullSection>


      <FullSection>
        <Contact />
      </FullSection>



    </div>
  )
}
