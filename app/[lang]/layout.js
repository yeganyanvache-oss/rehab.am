import {notFound} from 'next/navigation';
import {langs} from '../../lib/content';
export default async function LangLayout({children,params}){const {lang}=await params;if(!langs.includes(lang))notFound();return children}
