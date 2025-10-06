const isDev = process.env.NODE_ENV === "development"

const getUrlOrDevUrl = (url: string) => isDev ? "http://localhost:2006" : url

const placeHolder = {
    name: "PLACEHOLDER",
    baseUrl: "http://localhost:2006",
}

export const ApiUrls = [
    // {
    //     name: "Server Maintenance",
    //     baseUrl: getUrlOrDevUrl("https://server-maintenance-page.vercel.app")
    // },
    {
        name: "Redirect",
        baseUrl: getUrlOrDevUrl("https://vss-hub.vercel.app")
    },
    isDev ? placeHolder : {
        name: "Million",
        baseUrl: getUrlOrDevUrl("https://million-show-api.onrender.com")
    },
]
