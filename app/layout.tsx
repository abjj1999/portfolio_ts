import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarBar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <NavbarBar />
          <Banner />
          <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
          {children}

          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
