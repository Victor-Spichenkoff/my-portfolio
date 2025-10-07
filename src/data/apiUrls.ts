import {RedirectEndpoints} from "@/utils/callRedirectApi.ts";
import {Env} from "@/lib/env.ts";


const getUrlOrDevUrl = (url: string) => Env.Always_Dev ? "http://localhost:2006" : url


interface IApiUrls {
    name: string,
    baseUrl: string,
    redirectApiEndpoint: RedirectEndpoints,
}

const placeHolder:IApiUrls = {
    name: "PLACEHOLDER",
    baseUrl: "http://localhost:2006",
    redirectApiEndpoint: "tests"
}

export const ApiUrls: IApiUrls[] = [
    // {
    //     name: "Server Maintenance",
    //     baseUrl: getUrlOrDevUrl("https://server-maintenance-page.vercel.app")
    // },
    {
        name: "Redirect",
        baseUrl: getUrlOrDevUrl("https://vss-hub.vercel.app"),
        redirectApiEndpoint: "tests"
    },
    Env.isDev ? placeHolder : {
        name: "Million",
        baseUrl: getUrlOrDevUrl("https://million-show-api.onrender.com"),
        redirectApiEndpoint: "million"
    },
]
