import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import ThemeToggle from "./components/togleTheme";
import { Providers } from "./components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AlphaCodersinc - Innovative Digital Solutions",
    template: "%s | AlphaCoders",
    absolute: "",
  },
  description: "AlphaCoders provides innovative digital solutions and web development services to help you think outside the box and transform your business.",
  keywords: "AlphaCoders, AlphaCoders Inc, AlphaCodersinc, business analyst, machine learning, AI solutions, artificial intelligence, innovative digital solutions, digital transformation, custom software development, web development, technology consulting, IT services, cloud computing, software engineering, mobile app development, UI/UX design, cybersecurity, data analytics, business automation, SEO services, digital marketing, enterprise solutions",

  robots: "index, follow",
  icons: {
    icon: "favicon.ico",
    apple: "apple-icon.png", 
  },
  metadataBase: new URL("https://alphacodersinc.com"), // Base URL

  // Canonical URL for SEO
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
      <head>
        {/* Handheld Friendly meta tag for mobile optimization */}
        <meta name="handheldFriendly" content="true" />
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