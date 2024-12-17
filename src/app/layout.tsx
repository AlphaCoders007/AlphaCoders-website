"use client";
import type { Metadata } from "next";
import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import { useTheme } from "@/app/components/hooks/useTheme";
// export const metadata: Metadata = {
//   title: "AlphaCoders",
//   description: "Think out of the box",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the custom hook

  return (
    <html lang="en">
      <body className=" transition-colors duration-300">
        <NavBarSection />
        <FloatingMenu />
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2  rounded-full shadow-lg transition-all z-50"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        {children}
        <ConnectSection />
      </body>
    </html>
  );
}
