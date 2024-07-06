import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { allLocales } from '../global';
 
// Can be imported from a shared config
const locales = allLocales;
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});