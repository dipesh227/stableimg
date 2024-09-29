import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';

type HeaderProps = object
const Header: FC<HeaderProps> = () => {
    return (
        <header className="shadow-xl dark:shadow-slate-500">
            <div className="container mx-auto px-10 py-1 flex justify-between items-center border-b-2">
                <div className="flex flex-col items-center">
                    <Link href="/" className=" gradient-text text-4xl font-bold transition-all duration-300 hover:scale-105">
                        Stabel Image
                    </Link>
                    <span className="text-sm text-gray-500">Generate amazing images using AI with Stable Image</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="transition-all duration-300 text-lg hover:underline hover:opacity-80">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="transition-all duration-300 text-lg hover:underline hover:opacity-80">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition-all duration-300 text-lg hover:underline hover:opacity-80">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center space-x-4'>
                    <ModeToggle />
                    <Button variant="outline" className="transition-all duration-300 hover:scale-105 hover:shadow-md">Sign In</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;