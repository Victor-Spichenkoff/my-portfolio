import axios from "axios";
import {RedirectEndpoints, redirectEndpoints} from "@/utils/callRedirectApi.ts";
import {Env} from "@/lib/env.ts";
import {redirectApiUrl} from "../../global.ts";

const serverMaintenaceApiService = ""

/*Don't use / at base.
* * Everything will use the [url]/teste*/
export const TestApiWorkService = async (urlBase: string) => {
    try {
    await axios(urlBase+"/teste", {
         timeout: 7_000
    })
        return true
    } catch {
        return false
    }
}


export const alertWorkingApiService = async (endpoint: RedirectEndpoints) => {
    if(endpoint=="tests")
        return
    try {
        await axios(`${redirectApiUrl}/${endpoint}?isPort&extra=started by MY PORT`)
    } catch {}
}
