import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import ThemeToggle from "./components/togleTheme";
import { Providers } from "./components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlphaCoders - Innovative Digital Solutions",  
  description: "AlphaCoders provides innovative digital solutions and web development services to help you think outside the box and transform your business.",
  keywords: "AlphaCoders, Bussiness analyst, Machine Learning, AI, innovative solutions, digital transformation, custom software development, web development, technology services, digital marketing",
  robots: "index, follow",

  metadataBase: new URL("https://alphacodersinc.com"), // Base URL for resolving relative links

  openGraph: {
    title: "AlphaCoders - Innovative Digital Solutions",
    description: "AlphaCoders delivers creative digital solutions and web development services. Transform your business with innovative tech.",
    url: "https://alphacodersinc.com",
    siteName: "AlphaCoders",
    images: [
      {
        url: "https://alphacodersinc.com/opengraph-image.png", // Absolute URL
        width: 1200,
        height: 630,
        alt: "Preview image for AlphaCoders",
      },
    ],
    type: "website", // Specifies it's a website (default is okay, but explicit is better)
    locale: "en_US", // Optional, specify your locale
  },

  twitter: {
    card: "summary_large_image", // Twitter Card type
    site: "@alphacoders", // Replace with your Twitter handle
    title: "AlphaCoders - Innovative Digital Solutions",
    description: "AlphaCoders provides digital solutions to transform your business.",
    images: ["https://alphacodersinc.com/opengraph-image.png"], // Twitter uses the same image as OpenGraph
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