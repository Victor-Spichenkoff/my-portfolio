import {Env} from "@/lib/env.ts";

export const allLocales = ["pt", "en", "es", "it", "de"]

const isProd = process.env.NODE_ENV == "production"
//render
// const serverMaintenanceUrl = isProd ? 'https://server-maintenance-ssu7.onrender.com' : 'http://localhost:2009'
export const serverMaintenanceUrl = isProd ? 'https://server-maintenance.vercel.app' : 'http://localhost:2009'


export const redirectApiUrl = Env.Always_Dev ? "http://localhost:2006" : "https://vss-hub.vercel.app"
