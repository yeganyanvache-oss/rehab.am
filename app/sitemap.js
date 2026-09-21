import {langs,slugs} from '../lib/content';
export default function sitemap(){const base='https://rehab.am';return [...langs.map(l=>({url:`${base}/${l}`,changeFrequency:'weekly',priority:1})),...langs.flatMap(l=>slugs[l].map(s=>({url:`${base}/${l}/services/${s}`,changeFrequency:'monthly',priority:.8})))];}
