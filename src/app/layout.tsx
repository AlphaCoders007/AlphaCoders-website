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
    absolute: "",
  },
  description: "AlphaCoders provides innovative digital solutions and web development services to help you think outside the box and transform your business.",
  keywords: "AlphaCoders, alphaCodersinc.com, alphacoders.co.in,alphacoders kashmir, alphacoders anantnag, alphacoders srinagar, alphacoders jandk, alphacoders jammu and kashmir, alphaCoders.ai, It company pune, software company pune,It company kashmir,software company kashmir, It company anantnag,Innovative Tech Consultancy, Transformative Platform Development company,fast growing startup, kashmir startup, software company anantnag, AI solutions company , artificial intelligence company, software development company, software company , anantnag, kashmir , srinagar , Jandk ,jammu and kashmir , jammu and kashmir company , web development company , technology consulting company , IT services company, cloud computing company, software engineering company,Digital Product Development Services,Custom Software Solutions for Startups, business automation , alphacoders",

  robots: "index, follow",
  icons: {
    icon: "favicon.ico",
    apple: "apple-icon.png", 
  },
  metadataBase: new URL("https://www.alphacoders.ai"), // Base URL

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.alphacoders.ai", // Preferred URL for SEO
  },
  
  openGraph: {
    title: "AlphaCoders - Innovative Digital Solutions",
    description: "AlphaCoders delivers creative digital solutions and web development services.",
    url: "https://www.alphacoders.ai", // OpenGraph URL
    siteName: "AlphaCoders",
    images: [
      {
        url: "https://www.alphacoders.ai/opengraph-image.png",
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
    images: ["https://www.alphacoders.ai/opengraph-image.png"],
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
      <head>
        {/* Handheld Friendly meta tag for mobile optimization */}
        <meta name="handheldFriendly" content="true" />
        <meta name="robots" content="all" />
      </head>
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