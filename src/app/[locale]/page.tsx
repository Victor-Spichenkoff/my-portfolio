
import { Footer } from "@/components/template/footer";
import { FullSection } from "@/components/template/fullSection";
import { Presentation } from "@/components/sections/Presentation";
import { ScrollMenu } from "@/components/utils/scrollMenu";
import { Formation } from "@/components/sections/Formation";
import Projects from "@/components/sections/Projects";
import { TopBlur } from "@/components/utils/topBlur";

export default function Home() {
  return (
    <div className="text-gray-800 dark:text-gray-300
    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section h-screen snap-y snap-mandatory overflow-y-scroll" id="scrolavel">
      <ScrollMenu />
      {/* <TopBlur /> */}

      {/* <FullSection>
        <Presentation></Presentation>
      </FullSection>


      <FullSection>
        <Formation />
      </FullSection>  */}


      <FullSection>
        <Projects />
      </FullSection>


      <FullSection>
        Teste
        <Footer />
      </FullSection>



    </div>
  )
}
