"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react"

export default function ThemeSwitch () {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme()
    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mounted) return (
        // <Image
        // src='/sunmoonimg.png'
        // width={36}
        // height={36}
        // sizes="36x36"
        // alt="Loading image"
        // priority = {false}
        // title="loading light/dark toggle"
        // className="fixed top-4 right-4 p-3 rounded-full shadow-lg  transition-all z-50"
        // />
        <div className="fixed top-4 right-4 p-3 rounded-full shadow-lg  transition-all z-50">
            ☀️
        </div>
    )
    if (resolvedTheme === 'dark'){
        return <div className="relative">
        <button onClick={()=>setTheme ('light')} className="fixed top-4 right-4 p-3 rounded-full shadow-lg  transition-all z-50">
        ☀️
    </button>
    </div>
        
    }
    if (resolvedTheme === 'light'){
        return <div className="relative">
        <button onClick={()=>setTheme ('dark')} className="fixed top-4 right-4 p-3 rounded-full shadow-lg  transition-all z-50">
        🌙
    </button>
    </div>
    }
}