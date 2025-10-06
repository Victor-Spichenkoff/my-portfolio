import axios from "axios";

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
