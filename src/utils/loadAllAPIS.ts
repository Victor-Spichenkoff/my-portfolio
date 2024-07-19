import axios from "axios"

const isProd = process.env.NODE_ENV == "production"
const serverMaintenanceUrl = isProd ? 'https://server-maintenance-ssu7.onrender.com' : 'http://localhost:2009'


async function getIp() {
    try {
        const res = await axios.get('https://ipapi.co/json/')
        return `${res.data.ip} -> ${res.data.city}`
    } catch (e) {
        console.log('Erro ao pegar o ip:')
        console.log(e)
    }
}


export async function MakeAllApiFirstRequest() {
    if(!isProd) return
    const ip = await getIp()
    try {
        if (ip) axios(`${serverMaintenanceUrl}/sendIp/${ip}`)
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