"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // Set mounted state after component has mounted to prevent SSR issues
    useEffect(() => {
        setMounted(true);
    }, []);

    // Log the resolved theme to see if it's being set correctly
    useEffect(() => {
        console.log("Resolved theme:", resolvedTheme); // Check what resolvedTheme is
    }, [resolvedTheme]);

    // While mounting, show a loading image
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

    // Toggle between dark and light theme
    const toggleTheme = () => {
        console.log("Before Toggle:", resolvedTheme); // Log the current theme before toggling
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

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
