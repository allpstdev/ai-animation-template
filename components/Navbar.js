'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
                        <Image src={'/fundamentals_logo.png'} alt="fundamentals logo" fill />
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
                    <Link className="block py-2 md:p-4" href="#">
                        About
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="#">
                        Technology
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="#">
                        Products
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 font-bold text-purple-400 md:p-4" href="#">
                        Try<span className="font-normal"> Motion Maker </span>for free
                    </Link>

                    <span className="hidden py-4 md:block">|</span>
                    <Link className="block py-2 md:p-4" href="#">
                        Contact us
                    </Link>
                </div>
            </div>
        </nav>
    );

    return (
        <nav className="fixed left-0 top-0 z-20 flex h-32 w-full flex-row items-center border border-b border-black bg-white/[0.8]">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
                <div className="h-16">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            <Link href="/" className="flex items-center">
                                <div className="relative mx-auto h-[5.71rem] w-[6.25rem]">
                                    <Image src={'/fundamentals_logo.png'} alt="fundamentals logo" fill />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ml-auto flex items-baseline space-x-4 tracking-default text-black">
                            <li className="after:content-['|']">
                                <Link href="/about" className=" rounded-md px-3 py-2 text-base font-normal">
                                    About
                                </Link>
                            </li>
                            <li className="after:content-['|']">
                                <Link href="/" className=" rounded-md px-3 py-2 text-base font-normal">
                                    Technology
                                </Link>
                            </li>
                            <li className="after:content-['|']">
                                <Link href="/pricing" className=" rounded-md px-3 py-2 text-base font-normal">
                                    Products
                                </Link>
                            </li>
                            <li className="after:content-['|']">
                                <Link
                                    href="/contact"
                                    className="rounded-md px-3 py-2 text-base font-bold text-violet-300"
                                >
                                    Try&nbsp;
                                    <span className="font-normal">Motion Maker</span>
                                    &nbsp;for free
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/contact" className=" rounded-md px-3 py-2 text-base font-normal">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white-400 inline-flex items-center justify-center rounded-md bg-teal-900 p-2 hover:bg-teal-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <Link
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-700 hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-700 hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/privacyAndTerms"
                            className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-700 hover:text-white"
                        >
                            Services
                        </Link>
                        <Link
                            href="/pricing"
                            className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-700 hover:text-white"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-700 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
