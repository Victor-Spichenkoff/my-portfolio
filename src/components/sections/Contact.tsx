import { useTranslations } from "next-intl"
import { ContactForms, ContactFormsColors } from "../template/contactsForm"
import { Footer } from "../template/footer"
import { Header } from "../template/header"
import Image from "next/image"
import Diamond from "@/assets/moked.png"
import { Button } from "../ui/button"
import { Link } from "@/navigation"

export const Contact = () => {
    const t = useTranslations("Contact")

    return (
        <div className="h-[calc(100vh-50px)] w-full flex flex-col justify-between">
            {/* parte de cima */}
            <div className="flex-1 flex items-center justify-between">
                {/* Contatos */}
                <div className="max-w-[900px] h-[300px] flex flex-col justify-around mr-[104px]">
                    <Header label={t("title")} subtitle={t("sub")} fine />
                    <ContactFormsColors />
                </div>

                {/* LOGO + CV */}
                <div className="flex flex-wrap flex-col items-center p-16 -mt-[8px]">
                    <Image src={Diamond} alt="Logo" className="w-64 select-none" />
                    <Button className="bg-transparent border border-green-900 hover:bg-green-600 transition-all duration-300" variant={"my-ghost"}>
                        <Link href={"/"}>{t("cv")}</Link>
                    </Button>
                </div>
            </div>

            {/* Parte de baixo */}
            <Footer />
        </div>

    )
}