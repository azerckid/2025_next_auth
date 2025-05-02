'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className="relative h-16 w-full flex items-center justify-between ">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        <span className="sr-only">Your Company</span>
                        Logo
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:gap-16 items-center space-x-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/post"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                        Post
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                        About
                    </Link>
                </div>

                {/* Right Section - Auth & Theme */}
                <div className="flex items-center gap-x-4 md:gap-x-6">
                    <Link
                        href="/auth/login"
                        className="hidden md:block rounded-lg px-2 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        Login
                    </Link>
                    <Link
                        href="/auth/register"
                        className="hidden md:block rounded-lg px-2 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        Register
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link
                        href="/"
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/post"
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Post
                    </Link>
                    <Link
                        href="/about"
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        About
                    </Link>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <Link
                        href="/auth/login"
                        className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/auth/register"
                        className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
} 