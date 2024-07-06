import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { allLocales } from '../global'; 
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales: allLocales});