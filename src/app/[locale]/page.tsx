import { Header } from "@/components/template/header";
import { ThemeToggle } from "@/components/utils/themeToggle";
import { ToggleLocale } from "@/components/utils/toggleLocale";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index")
  const title = t("title")
  return (
    <div className="h-full p-4 text-cyan-800 dark:text-gray-200
    bg-gradient-to-br from-zinc-100 to-zinc-400 dark:from-dark-main dark:to-dark-section">
      {/* <div className="antialiased text-slate-500 text-slate-400 bg-white bg-slate-900 h-full"> */}
      <div className="flex justify-between max-w-[900px] mx-auto">
        <Header label={title} />
        <div className="flex space-x-4">
          <ThemeToggle />
          <ToggleLocale />
        </div>
      </div>

    </div>
  )
}
