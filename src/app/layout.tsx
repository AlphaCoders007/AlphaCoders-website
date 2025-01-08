import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";
import NavBarSection from "./components/NavbarSection";
import ConnectSection from "./components/ConnectSection";
import ThemeToggle from "./components/togleTheme";
import { Providers } from "./components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlphaCoders - Innovative Digital Solutions",  // Short, descriptive title with keywords
  description: "AlphaCoders provides innovative digital solutions and web development services to help you think outside the box and transform your business.",  // Concise, keyword-rich description
  keywords: "AlphaCoders, Bussiness analyst, Machine Learing, Ai,innovative solutions, digital transformation, custom software development, web development, technology services, digital marketing, Alphacoders, alphacoders, alphaCodersinc, AlphaCoderinc,alphacodersinc",  // Relevant, focused keywords
  robots: "index, follow",  // Fine for SEO
  openGraph: {
    title: "AlphaCoders - Innovative Digital Solutions",  // Match OG title to page title
    description: "AlphaCoders delivers creative digital solutions and web development services. Transform your business with innovative tech.",  // Concise and engaging OG description
    url: "https://www.alphacodersinc.com",  // Correct URL
    siteName: "AlphaCoders",  // Clear brand name
    images: [
      {
        url: 'https://alphacodersinc.com/opengraph-image.png',
        secureUrl: 'https://alphacodersinc.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for alphacoders',
      }
    ]
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