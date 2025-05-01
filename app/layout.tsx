import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

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
            {/* Header */}
            <header className="sticky top-0 z-50 w-full flex-none backdrop-blur border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75">
              <Navigation />
            </header>

            {/* Main Content */}
            <main className="flex-auto">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </div>
            </main>

            {/* Footer */}
            <footer className="flex-none border-t border-gray-900/10 dark:border-gray-50/[0.06] bg-white dark:bg-gray-900">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  © 2024 My App. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
