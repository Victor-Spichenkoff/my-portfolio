export const allLocales = ["br", "en", "es", "it", "de"]

const isProd = process.env.NODE_ENV == "production"
//render
// const serverMaintenanceUrl = isProd ? 'https://server-maintenance-ssu7.onrender.com' : 'http://localhost:2009'
export const serverMaintenanceUrl = isProd ? 'https://server-maintenance.vercel.app' : 'http://localhost:2009'