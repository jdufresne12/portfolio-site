import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
})

export const metadata: Metadata = {
  title: "John Dufresne - My Developer Portfolio",
  description: "Full Stack Developer portfolio showcasing projects and skills",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}