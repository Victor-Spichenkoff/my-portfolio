const isDev = process.env.NODE_ENV === "development"

const getUrlOrDevUrl = (url: string) => isDev ? "http://localhost:2006" : url

export const ApiUrls = [
    //TODO
    // {
    //     name: "Server Maintenance",
    //     baseUrl: getUrlOrDevUrl("")
    // },
    {
        name: "Redirect",
        baseUrl: getUrlOrDevUrl("")
    },
    // {
    //     name: "Million",
    //     baseUrl: getUrlOrDevUrl("")
    // },
]
