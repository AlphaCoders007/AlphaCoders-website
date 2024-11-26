import type { Metadata } from "next";
import "./globals.css";
import NavBarSection from "./components/NavbarSection";
import { TracingBeam } from "../../ExtraComponents/UI/racing-beam"; // Ensure the import path is correct

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
        {/* <TracingBeam> Wrap the entire content inside the TracingBeam */}
          <NavBarSection />
          {children}
        {/* </TracingBeam> */}
      </body>
    </html>
  );
}
