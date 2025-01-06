import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import ThemeToggle from "./components/togleTheme";
import { Providers } from "./components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlphaCoders",
  description: "Think out of the box - Innovative Solutions and Digital Development",
  keywords: "AlphaCoders, alphacoersinc, alphacoders, digital solutions, innovation, technology, software development, web development",
  robots: "index, follow",  
  openGraph: {
    title: "AlphaCoders",
    description: "Innovative Solutions and Digital Development - Think out of the box.",
    url: "https://www.alphacoderinc.com",
    siteName: "AlphaCoders",
  
  },
 
};
export const viewportExport = {
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className="transition-colors duration-300">
        <Providers>
          <NavBarSection />
          <ThemeToggle />
          <FloatingMenu />
          {children}
          <ConnectSection />
        </Providers>
      </body>
    </html>
  );
}