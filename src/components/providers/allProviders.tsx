import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "./themeProvider"
import { getMessages } from "next-intl/server";

interface IAllProviders {
    children: React.ReactNode
    params: { locale: string };
}

export const AllProviders = async ({ children, params: { locale } }: IAllProviders) => {

    const messages = await getMessages()    
    return (

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
            {children}
        </ThemeProvider>

        // </NextIntlClientProvider>

    )
}