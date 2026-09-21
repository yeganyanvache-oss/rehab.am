import './globals.css';
export const metadata={metadataBase:new URL('https://rehab.am'),title:{default:'REHAB.AM',template:'%s | REHAB.AM'},icons:{icon:'/images/logo.png'},robots:{index:true,follow:true}};
export const viewport={width:'device-width',initialScale:1,themeColor:'#29483d'};
export default function Layout({children}){return <html lang="hy"><body>{children}</body></html>}
