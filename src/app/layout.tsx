// Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

// Global CSS
import "./globals.css";

// Theme Provider
import { ThemeProvider } from "next-themes";

// Metadata
export const metadata: Metadata = {
  title: "GoShope",
  description:
    "Welcome to GoShop, your ultimate destination for seamless online shopping! Discover a vast array of products from trusted sellers, all in one convenient marketplace. With GoShop, shopping is made easy, fast, and enjoyable. Find everything you need, from fashion and electronics to home essentials, and experience the joy of hassle-free online shopping. Start exploring today!",
};

// Load Inter without external requests (self-hosted)
const interFont = Inter({
  subsets: ["latin"],
  display: "swap", // Optional: improves loading behavior
  fallback: ["system-ui", "arial"], // Fallback if font fails
});

// Load Barlow without external requests (self-hosted)
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap", // Optional
  variable: "--font-barlow", // Keep this if using Tailwind
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${barlowFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
