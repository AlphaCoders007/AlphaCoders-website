"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    if (!mounted) {
        return (
            <Image
                src="/sunmoonimg.png"
                width={36}
                height={36}
                sizes="36x36"
                alt="loading light/dark toggle"
                priority={true}
                title="loading light/dark toggle"
                className="fixed top-4 right-4 p-2 rounded-full shadow-lg transition-all z-60"
            />
        );
    }

    // After mounting, show the theme toggle button
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 rounded-full z-50"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
