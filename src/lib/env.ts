
export const Env = {
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
    isDevOrTest: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
}
