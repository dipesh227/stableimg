'use client'
import { FC, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';

type HeaderProps = object
const Header: FC<HeaderProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="shadow-xl dark:shadow-slate-500">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/" className="gradient-text text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105">
                        Stabel Image
                    </Link>
                    <span className="text-xs md:text-sm text-gray-500 text-center">Generate amazing images using AI with Stable Image</span>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 md:space-x-6">
                        <li>
                            <Link href="/" className="transition-all duration-300 text-base md:text-lg hover:underline hover:opacity-80">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="transition-all duration-300 text-base md:text-lg hover:underline hover:opacity-80">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition-all duration-300 text-base md:text-lg hover:underline hover:opacity-80">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <ModeToggle />
                    <Button variant="outline" className="transition-all duration-300 hover:scale-105 hover:shadow-md hidden md:block">Sign In</Button>
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center`}
                initial={{ x: '-100%' }}
                animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </button>
                    <div className="flex flex-col items-center mb-6">
                        <Link href="/" className="gradient-text text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105">
                            Stabel Image
                        </Link>
                        <span className="text-xs md:text-sm text-gray-500 text-center">Generate amazing images using AI with Stable Image</span>
                    </div>
                    <ul className="flex flex-col items-center space-y-4">
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link href="/" className="text-lg font-medium hover:underline hover:opacity-80 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                                Home
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/about" className="text-lg font-medium hover:underline hover:opacity-80 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact" className="text-lg font-medium hover:underline hover:opacity-80 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact
                            </Link>
                        </motion.li>
                        <motion.li
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md dark:text-white dark:border-white" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Button>
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
