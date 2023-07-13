import Image from 'next/image';
import Link from 'next/link';

import fundamentals_logo from '../public/fundamentals_logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="flex max-w-full flex-col bg-white px-8 pb-2 pt-9 sm:flex-row md:px-14 md:pb-5 md:pl-20 md:pt-24">
                <div className="flex w-full flex-col sm:flex-row">
                    <div className="container flex-1">
                        <p className="font-euclid max-w-sm text-base leading-loose text-black">
                            {`Integrate generative AI into your animation workflow,
                        decrease production time and budget and be in
                        control of the creative process of your project like
                        never before. With Fundamentals Motion Maker.`}
                        </p>
                    </div>
                    <div className="mt-10 flex-1 pl-0 sm:mt-0 md:pl-6">
                        <h2 className="font-euclid mb-5 text-4xl font-normal tracking-widest text-black">
                            Fundamentals Artificial Intelligence AG
                        </h2>
                        <h3
                            className="font-euclid mb-2 text-xl font-normal"
                            style={{ letterSpacing: '1.39px', lineHeight: '55.72px' }}
                        >
                            Registered in Zug, ZG, Switzerland under CHE-
                        </h3>
                        <div className="mb-5 flex flex-col items-end md:flex-row">
                            <div className="mx-auto mt-16 flex flex-1 flex-col">
                                <Link
                                    className="font-euclid text-center text-xl font-normal leading-7 md:text-left"
                                    href={'/site'}
                                >
                                    Sitemap
                                </Link>
                                <div className="mb-6 mt-6 md:mb-0">
                                    <div className="grid place-items-center text-base font-normal tracking-default text-black sm:grid-cols-1 md:grid-cols-2 md:place-items-start 2xl:grid-cols-5">
                                        <Link href={`/about`}>About</Link>
                                        <Link href={`/technology`}>Technology</Link>
                                        <Link href={`/pricing`}>Products</Link>
                                        <Link href={`/contact`} className="text-violet-300">
                                            Try<span className="font-bold"> Motion Maker </span>for free
                                        </Link>
                                        <Link href={`/contact`}>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mx-auto h-[6.25rem] w-[6.875rem]">
                                <Image src={fundamentals_logo} alt="fundamentals logo" style={{ objectFit: "cover" }} fill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-1 flex max-w-full flex-col border-t border-solid border-black bg-white px-8 pb-14 pt-9 sm:flex-row md:px-14 md:pb-14 md:pl-20 md:pt-9">
                <div className="flex-1">
                    <p className="text-black">
                        © Copyright 2023, All Rights Reserved by Fundamentals AI AG, Zug, Switzerland
                    </p>
                </div>
                <div className="ml-0 mt-4 flex-1 md:ml-6 md:mt-0">
                    <div className="flex gap-4">
                        <Link href={'/terms'}>Terms</Link>
                        <Link href={'/privacy'}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
