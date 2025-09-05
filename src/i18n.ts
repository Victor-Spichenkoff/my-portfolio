import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { allLocales as locales } from '../global';
import deepmerge from 'deepmerge';

// Can be imported from a shared config
// const locales = allLocales;




export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  const enMessages = (await import(`../messages/en.json`)).default;

  // if not english
  const currentMessages =
      locale === 'en'
          ? {}
          : (await import(`../messages/${locale}.json`)).default;


  return {
    messages: deepmerge(enMessages, currentMessages)
  };
});
