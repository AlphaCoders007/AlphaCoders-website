"use client";

import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import Head from "./Head";
import ThemeToggle from "./components/togleTheme";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <Head />
      <body className="transition-colors duration-300">
          <NavBarSection />
          <ThemeToggle/>
          <FloatingMenu />
          {children}
          <ConnectSection />
      </body>
    </html>
  );
}
