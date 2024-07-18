import createMiddleware from 'next-intl/middleware';
import { allLocales } from '../global';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: allLocales,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(br|en|es|it|de)/:path*']
};