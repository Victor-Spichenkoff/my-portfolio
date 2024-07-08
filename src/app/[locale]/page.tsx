"use client"

import { Footer } from "@/components/template/footer";
import { FullSection } from "@/components/template/fullSection";
import { Header } from "@/components/template/header";
import { ThemeToggle } from "@/components/utils/themeToggle";
import { ToggleLocale } from "@/components/utils/toggleLocale";
import { Presentation } from "@/components/sections/Presentation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ScrollMenu } from "@/components/utils/scrollMenu";
import { useEffect, useState } from "react";

export default function Home() {


  const [currentIndex, setCurrentIndex] = useState(0)
    
  // useEffect(() => {
  //   const handleScroll = () => {
      // const scrollPosition = window.scrollY + window.innerHeight / 2;
      // const screenHeight = window.innerHeight;

  //     console.log('Scroll Position:', scrollPosition);
  //     console.log('Screen Height:', screenHeight);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   window.onscroll = () => console.log("NEHOEAIh ")

  //   // Cleanup: remove o event listener quando o componente é desmontado
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);




  return (
    <div className="text-gray-800 dark:text-gray-300
    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section h-screen snap-y snap-mandatory overflow-y-scroll" id="scrolavel">
      {/* <div className="antialiased text-slate-500 text-slate-400 bg-white bg-slate-900 h-full"> */}
      <ScrollMenu />

      <FullSection>
        <Presentation></Presentation>
      </FullSection>


      <FullSection>
        Teste
        <Footer />
      </FullSection>



    </div>
  )
}
