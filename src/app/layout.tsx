"use client";

import type { Metadata } from "next";
import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import { Providers } from "./Providers";
import Head from "./Head";
import dynamic from "next/dynamic";

// Dynamically import ThemeSwitcher
const ThemeSwitcher = dynamic(() => import("./components/themeSwitcher"), {
  ssr: false, // Disable SSR (only render on the client side)
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <Head />
      <body className="transition-colors duration-300">
        <Providers>
        <ThemeSwitcher />
          <NavBarSection />
          <FloatingMenu />
          {children}
          <ConnectSection />
        </Providers>
      </body>
    </html>
  );
}
