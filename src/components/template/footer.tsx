import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations("Footer")
    
    return (
        <div className="mt-6 text-center" id="contact">
            <footer className="font-bold bottom-4 opacity-85 dark:opacity-65
            ">
            { t("message") }
        </footer>
        </div>
        
    )
}