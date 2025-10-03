import axios from "axios"

/* to find the latest veriosn, go to src/types/endpoints */
export const redirectEndpoints = [
    "myPortfolioEn",
    "myPortfolioPt",
    "myPortfolioEs",
    "myPortfolioDe",
    "million",
    "paginationApi",
    "serverMaintenance",
    "ticTacToe",
    "vssExpress",
    "portfoliosShare",
    "github",
    "linkedin",
    "tests"
] as const

export type RedirectEndpoints = typeof redirectEndpoints[number]

const baseUrl = process.env.NODE_ENV == "development" ? "http://localhost:2006" : "https://vss-hub.vercel.app"



export const getUrlAlertUrl = (endpoint: RedirectEndpoints, extra?: string) =>
    `${baseUrl}/alert/${endpoint}${extra ? "?extra=" + extra : ""}`


export const getRedirectUrl = (endpoint: RedirectEndpoints, extra?: string) => {
    return `${baseUrl}/${endpoint}?isPort=true${extra ? "&extra="+extra : ""}`
}


export const alertAccessToRedirectApi = async (locale: string = "pt") => {
    console.log("Algo")
    console.log(getUrlAlertUrl("million", `access on: ${locale}`))
    await axios.get(getUrlAlertUrl("million", `access on: ${locale}`))
}

