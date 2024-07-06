import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin()
let withNextIntl
try {
    withNextIntl = createNextIntlPlugin();
  } catch (error) {
    console.error('Erro ao criar o plugin next-intl:', error)
    throw error  // Erro de tipo no gh-pages
  }
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);