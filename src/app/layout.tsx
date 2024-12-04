import type { Metadata } from "next";
import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";


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

      <ConnectSection />
      </body>
    </html>
  );
}
