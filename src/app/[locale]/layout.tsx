import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { AllProviders } from "@/components/providers/allProviders";
import { MakeAllApiFirstRequest } from "@/utils/loadAllAPIS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Spichenkoff",
  description: '"The Best"',
  icons: "dima_transp.png"
  // icons: "log_transp.png"
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages()

  return (
    <html lang={locale} className="">
      <body className={cn(inter.className, "min-h-screen overflow-y-scroll scroll-smooth")}>
      <NextIntlClientProvider messages={messages}>
      <AllProviders params={{ locale }}>
        {children}
      </AllProviders>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
