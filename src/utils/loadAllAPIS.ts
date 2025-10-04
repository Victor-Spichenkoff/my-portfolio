import axios from "axios"
import { serverMaintenanceUrl } from "../../global"
import os from "os"
import {Env} from "@/lib/env.ts";




async function getIp(notForce: boolean) {
    try {
        const ip = getLocalNetworkIp()
        const res = await axios.get(`https://ipinfo.io/${encodeURIComponent(ip ?? "")}/json`)
        console.log(res.data)
        return {
            ip: notForce ? "MEU" : res.data.ip,
            city: res.data.city,
            country: res.data.country
          }
    } catch (e) {
        console.log('Erro ao pegar o ip:')
        console.log(e)
    }
}


export async function MakeAllApiFirstRequest(notForce: string | null) {
    if (!Env.isProd || notForce == 'true') return


    //TODO: CHANGE TO NEW METHOD (MILLION SHOW)
    const ipInfo = await getIp(notForce == 'true')
    try {
        if (ipInfo?.ip == "MEU")
            return axios(`${serverMaintenanceUrl}/sendIp/[STATIC]_[MEU]`)


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



export const getLocalNetworkIp = () => {
    const nets = os.networkInterfaces()

    for (const name of Object.keys(nets)) {
        if (!nets[name])
            return null

        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address
            }
        }
    }
    return null
}
