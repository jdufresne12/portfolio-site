import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";

// Archivo variable (weight 100–900, width 62–125), self-hosted. SIL Open Font License, see ./fonts/OFL.txt
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1a3d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
