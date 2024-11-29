import type { Metadata } from "next";
import "./globals.css";
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
          <NavBarSection />
          {children}
      </body>
    </html>
  );
}
