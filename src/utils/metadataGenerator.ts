import type { Metadata } from "next";


 const defaultMetaProperties = {
  title: "Victor Spichenkoff",
  icons: "dima_transp.png",
  openGraph: {
    description: "💎 Your next full-stack developer — 3 years of experience building solid, well-crafted web applications.",
    url: "https://victor-spichenkoff.vercel.app/en",
    siteName: "Victor Spichenkoff — Portfolio",
    images: [
      {
        url: "https://github.com/Victor-Spichenkoff/my-portfolio/blob/master/public/dima_transp.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Victor Spíchenkoff — Portfolio",
      },
    ],
    type: "website",
  },
  alternates: {
    languages: {
      "pt-BR": "/pt",
      "en-US": "/en",
      "es": "/es",
      "de": "/de",
    }
  }
}



export const metadataByLocale: Record<string, Metadata> = {
  pt: {
    ...defaultMetaProperties,
    title: "Victor Spichenkoff - Dev Fullstack",
    description: "💎 Procurando seu próximo desenvolvedor full-stack? Tenho 3 anos de experiência criando aplicações web confiáveis e bem pensadas.",
    openGraph: {
      ...defaultMetaProperties.openGraph,
      description: "💎Seu próximo desenvolvedor full-stack, com 3 anos de experiência criando aplicações web sólidas e bem construídas.",
      url: "https://victor-spichenkoff.vercel.app/pt",
      locale: "pt_BR",
    },
  },
  en: {
    ...defaultMetaProperties,
    title: "Victor Spichenkoff - Fullstack Dev",
    description: "💎 Looking for your next full-stack developer? I have 3 years of experience building reliable, well-designed web applications.",

    openGraph: {
      ...defaultMetaProperties.openGraph,
      description: "💎 Your next full-stack developer — 3 years of experience building solid, well-crafted web applications.",
      url: "https://victor-spichenkoff.vercel.app/en",
      locale: "en_US",
    },
  },
}
