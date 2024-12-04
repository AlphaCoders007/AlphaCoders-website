import type { Metadata } from "next";
import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
export const metadata: Metadata = {
  title: "AlphaCoders",
  description: "Think out of the box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <NavBarSection/>
        <FloatingMenu/>
          {children}
      </body>
    </html>
  );
}
