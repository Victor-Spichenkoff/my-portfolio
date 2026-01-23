import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { AllProviders } from "@/components/providers/allProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Victor Spichenkoff",
    description: '"The Best"',
    icons: "dima_transp.png",
    openGraph: {
        title: "Victor Spichenkoff - Fullstack Dev",
        description: "C# | TypeScript | Git & GitHub",
        url: "https://victor-spichenkoff.vercel.app/pt",
        siteName: "Portfolio",
        images: [
        {
            url: "https://github.com/Victor-Spichenkoff/my-portfolio/blob/master/public/dima_transp.png?raw=true",
            width: 1200,
            height: 630,
            alt: "Victor Síchenkoff — Portfolio",
        },
        ],
        locale: "pt_BR",
        type: "website",
    }
};


export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>
) {
    const messages = await getMessages()

    return (
        <html lang={locale} className="" suppressHydrationWarning>
            <body className={cn(inter.className, "min-h-screen overflow-y-scroll scroll-smooth")} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <AllProviders params={{ locale }}>
                        {children}
                    </AllProviders>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
