import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import Footer from './components/Footer'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js App with Catalyst UI",
  description: "A modern Next.js application using Catalyst UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-gray-900">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75 backdrop-blur">
              <div className="w-full flex justify-center">
                <div className="container">
                  <Navigation />
                </div>
              </div>
            </header>

            <main className="flex-1 w-full py-8">
              <div className="w-full flex justify-center">
                <div className="container">
                  {children}
                </div>
              </div>
            </main>

            <footer className="w-full border-t border-gray-900/10 dark:border-gray-50/[0.06] bg-white dark:bg-gray-900">
              <div className="w-full flex justify-center">
                <div className="container">
                  <Footer />
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
