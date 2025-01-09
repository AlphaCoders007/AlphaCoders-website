import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import ThemeToggle from "./components/togleTheme";
import { Providers } from "./components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
  default: "AlphaCoders - Innovative Digital Solutions",
  template: "%s | AlphaCoders",
  absolute :"",
  },
  description: "AlphaCoders provides innovative digital solutions and web development services to help you think outside the box and transform your business.",
  keywords: "AlphaCoders, Business analyst, Machine Learning, AI, digital transformation, web development",
  robots: "index, follow",
  metadataBase: new URL("https://alphacodersinc.com"), // Base URL

  // Canonical URL
  alternates: {
    canonical: "https://alphacodersinc.com", // Preferred URL for SEO
  },

  openGraph: {
    title: "AlphaCoders - Innovative Digital Solutions",
    description: "AlphaCoders delivers creative digital solutions and web development services.",
    url: "https://alphacodersinc.com", // OpenGraph URL
    siteName: "AlphaCoders",
    images: [
      {
        url: "https://alphacodersinc.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview image for AlphaCoders",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@alphacoders",
    title: "AlphaCoders - Innovative Digital Solutions",
    description: "Transform your business with AlphaCoders' innovative solutions.",
    images: ["https://alphacodersinc.com/opengraph-image.png"],
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