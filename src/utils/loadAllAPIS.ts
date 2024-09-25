import axios from "axios"
import { serverMaintenanceUrl } from "../../global"


const isProd = process.env.NODE_ENV == "production"



async function getIp(notForce: boolean) {
    try {
        const res = await axios.get('https://ipapi.co/json/')
        // return `[STATIC] ${res.data.ip} -> ${res.data.city}, ${res.data.country_name}`
        return {
            ip: notForce ? "MEU" : res.data.ip,
            city: res.data.city,
            country: res.data.country_name
          }
    } catch (e) {
        console.log('Erro ao pegar o ip:')
        console.log(e)
    }
}


export async function MakeAllApiFirstRequest(notForce: string | null) {
    if (!isProd) return

    const ipInfo = await getIp(notForce == 'true')
    try {

        if (ipInfo?.ip == "MEU")
            return axios(`${serverMaintenanceUrl}/sendIp/[STATIC] [MEU]`)

        const ipInfoString = `[STATIC] ${ipInfo?.ip} -> ${ipInfo?.city}, ${ipInfo?.country}`


        axios(`${serverMaintenanceUrl}/sendIp/${ipInfoString}`)


        if(notForce == "true")
            return


        //deixar esse no final, o mais lento
        await axios(`${serverMaintenanceUrl}/forceAllOnce`)

    } catch (E) {
        console.log('Erro nos Make All Request')
        console.log(E)
    }
}

export const teste = () => {
    console.log("teste")
}