import axios from "axios"
import { serverMaintenanceUrl } from "../../global"


const isProd = process.env.NODE_ENV == "production"



async function getIp() {
    try {
        const res = await axios.get('https://ipapi.co/json/')
        return `[STATIC] ${res.data.ip} -> ${res.data.city}, ${res.data.country_name}`
    } catch (e) {
        console.log('Erro ao pegar o ip:')
        console.log(e)
    }
}


export async function MakeAllApiFirstRequest() {
    if(!isProd) return
    const ip = await getIp()
    try {
        
        if(ip == "179.34.95.149")
            axios(`${serverMaintenanceUrl}/sendIp/[MEU]`)
        else if (ip) 
            axios(`${serverMaintenanceUrl}/sendIp/${ip}`)

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