"use client"

import { useLocale, useTranslations } from "next-intl"
import { ContactForms, ContactFormsColors } from "../template/contactsForm"
import { Footer } from "../template/footer"
import { Header } from "../template/header"
import Image from "next/image"
import Diamond from "@/assets/moked.png"
import { Button } from "../ui/button"
import ExternalLink from "next/link"
import { Link } from "@/navigation"
import { useEffect, useState } from "react"
import { ILocales } from "../utils/toggleLocale"
import Reveal, { Fade } from "react-awesome-reveal"

export const Contact = () => {
    const [locale, setLocale] = useState<ILocales>("en")
    const t = useTranslations("Contact")
    const currentLocale = useLocale() as ILocales
    useEffect(()=> {
        try {
            if(currentLocale != "en" && currentLocale !== "br") {
                return setLocale("en")
            }
            setLocale(currentLocale)
        } catch {
            console.error("Erro ao alterar o locale: Contact 20")
        }
    }, [])

    return (
        <Fade direction="right">

        <div className="h-[calc(100vh-50px)] w-full flex flex-col justify-between mt-28">
            {/* parte de cima */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-around md:justify-between">
                {/* Contatos */}
                <div className="max-w-[900px] h-[400px] flex flex-col justify-around ">
                    <div>
                        <Header label={t("title")} subtitle={t("sub")} />
                        <hr className="w-40 h-3 my-8 bg-black border-0 dark:bg-white/85" />
                        <div className="max-w-[300px]">
                            {t("text1")}
                            <Link href={"https://victor-spichenkoff.github.io/portfolio/viewProfile?id=25a0f280-7fb3-4e23-a337-04e50eef96c5"}
                                className="text-dark-highlight"
                                target="_blank"
                            >{t("here")}</Link>
                            {t("text2")}
                        </div>

                    </div>
                    <ContactFormsColors />
                </div>

                {/* Botão só para o mobile */}
                <Button className="bg-transparent border border-green-600 hover:bg-green-600 transition-all duration-300 md:hidden" variant={"my-ghost"}>
                    <ExternalLink href={`/cv_curto_${locale}.pdf`} target="_blank" >{t("cv")}</ExternalLink>
                </Button>

                {/* LOGO + CV */}
                <div className="flex-wrap flex-col items-center p-16 pr-8 -mt-[8px] hidden md:flex">
                    <Image src={Diamond} alt="Logo" className="w-64 select-none" />
                    <Button className="bg-transparent border border-green-900 hover:bg-green-600 transition-all duration-300" variant={"my-ghost"}>
                        <ExternalLink href={`/cv_curto_${locale}.pdf`} target="_blank">{t("cv")}</ExternalLink>
                    </Button>
                </div>
            </div>

            {/* Parte de baixo */}
            <Footer />
        </div>
        </Fade>

    )
}