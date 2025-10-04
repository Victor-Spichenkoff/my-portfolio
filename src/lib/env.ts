
export const Env = {
    isDev: false,//process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
    isDevOrTest: true//process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
}
