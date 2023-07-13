'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import fundamentals_logo from '../public/fundamentals_logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex w-full flex-wrap items-center justify-between border-b border-black bg-white/[0.8] px-4 py-4 text-lg text-black md:py-0">
            <div>
                <Link href="/">
                    <div className="relative mx-auto my-2 h-[5.71rem] w-[6.25rem]">
                        <Image src={fundamentals_logo} alt="fundamentals logo" fill />
                    </div>
                </Link>
            </div>
            <div onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="block h-6 w-6 cursor-pointer md:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <div className={`${!isMenuOpen && 'hidden'} w-full md:flex md:w-auto md:items-center`}>
                <div className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <Link className="block py-2 md:p-4" href="/about">
                        About
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="/technology">
                        Technology
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="/products">
                        Products
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 font-bold text-purple-400 md:p-4" href="/motion_maker">
                        Try<span className="font-normal"> Motion Maker </span>for free
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="/contact">
                        Contact us
                    </Link>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
