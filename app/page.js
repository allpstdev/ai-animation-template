import Content from '@/components/Content';
import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';
import { MyComponent } from '@/components/Swiper'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

import demo from '../public/demo.png';
import image1 from '../public/image1.png';
import image2 from '../public/image2.png';
import image3 from '../public/image3.png';
import image4 from '../public/image4.png';
import left_arrow from '../public/left-arrow.svg';
import right_arrow from '../public/right-arrow.svg';

const HomePage = () => {
    return (
        <div className=''>
            <Header text={'Fundamentals'} />
            <SubHeader text={'Artificial Intelligence AG'} />

            <h4 className="mb-2 px-44 text-center text-xl font-light tracking-[-0.0001em] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
                {`We build forward-thinking AI technology and make it available in user-centric apps.`}
            </h4>
            <Image
                alt="demo"
                src={demo}
                width="0"
                height="0"
                sizes="100vw"
                className="w-100vw mx-auto my-12 h-auto"
            />
            <section className="bg-[#FDF9F5] pb-12 px-44 pt-24">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black">
                        <Image
                            alt="media production and animation image"
                            src={image1}
                            width="0"
                            height="0"
                            className='w-52 h-3/4'
                        />
                        <p className="text-center text-3xl font-normal">Media production and animation</p>
                    </div>
                    <div className="flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black">
                        <Image
                            alt="Creation of virtual worlds image"
                            src={image2}
                            width="0"
                            height="0"
                            className='w-52 h-3/4'
                        />
                        <p className="text-center text-3xl font-normal">Creation of virtual worlds</p>
                    </div>
                    <div className="flex flex-1 flex-col p-4 place-items-center gap-3 rounded-3xl border-2 border-black">
                        <Image
                            alt="Augmentation of creative workflows image"
                            src={image3}
                            width="0"
                            height="0"
                            className='w-52 h-3/4'
                        />
                        <p className="text-center text-3xl font-normal">
                            Augmentation of creative workflows
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col place-items-center gap-3 rounded-3xl border-2 border-black p-4">
                        <Image
                            alt="Make AI available to users image"
                            src={image4}
                            width="0"
                            height="0"
                            className="h-3/4 w-52"
                        />
                        <p className="text-center text-3xl font-normal">
                            Make AI available to users
                        </p>
                    </div>
                </div>
                <div className="mt-32">
                    <h3 className="mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        About
                    </h3>
                    <p className="text-justify text-3xl font-normal leading-[2.25em]">
                        Fundamentals Artificial Intelligence AG is a
                        future-oriented tech company devoted to identifying,
                        researching, and developing software products enhancing
                        design-focused workflows using AI and related
                        technologies. We are committed to contributing to a safe
                        and controlled global AI space. Our focus is on
                        intuitive, user-centric tools for artists, designers,
                        media producers, and creators to step up their game
                        using cutting-edge technology.{' '}
                    </p>
                </div>
                <Content
                    styles={'mt-32'}
                    header={'About'}
                    description={`Fundamentals Artificial Intelligence AG is a future-oriented tech company devoted to identifying, researching, and developing software products enhancing design-focused workflows using AI and related technologies. We are committed to contributing to a safe and controlled global AI space. Our focus is on intuitive, user-centric tools for artists, designers, media producers, and creators to step up their game using cutting-edge technology.`} />

                <div className="mt-36">
                    <h3 className="mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        Try creating videos with AI
                    </h3>
                    <p className="text-justify text-3xl font-normal leading-[2.25em]">
                        Motion Generative Artificial Intelligence for everyone?{' '}
                        <span className="font-bold">Here you go!</span> Try our
                        AI video generator for free. Get yourself a Fundamentals
                        log-in and start creating beautiful animated content
                        based on simple text prompts. You receive all rights for
                        your content.
                    </p>
                </div>
                <Image
                    alt="demo"
                    src={demo}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="my-12 h-auto w-full"
                />
                <div className="mt-32">
                    <h3 className="mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        Topics
                    </h3>
                    <div className="flex w-full flex-col items-center justify-center gap-6">
                        <div className="flex h-96 w-full items-center justify-center rounded-[24px] border-2 border-black bg-[url('../public/topic_1.png')] bg-cover bg-no-repeat">
                            <p className="text-center text-7xl tracking-widest">
                                MediaTech
                            </p>
                        </div>
                        <div className="flex h-96 w-full items-center justify-center rounded-[24px] border-2 border-black bg-[url('../public/topic_2.png')] bg-cover bg-no-repeat">
                            <p className="text-center text-7xl tracking-widest">
                                Real Estate
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-32">
                    <h3 className="mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        News
                    </h3>
                    <div className="grid h-[700px] grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-6">
                        <div className="flex flex-1 flex-col place-items-center gap-3 rounded-3xl border-[3px] border-black bg-white p-4">
                            <div className="h-2/5 w-full rounded-2xl border-[3px] border-black bg-[#FDF9F5D9]"></div>
                            <p className="font-inter h-3/5 text-justify text-xl leading-10">
                                Integrate generative AI into your animation
                                workflow, decrease production time and budget
                                and be in control of the creative process of
                                your project like never before. With
                                Fundamentals Motion Maker.
                            </p>
                        </div>
                        <div className="flex flex-1 flex-col place-items-center gap-3 rounded-3xl border-[3px] border-black bg-white p-4">
                            <div className="h-2/5 w-full rounded-2xl border-[3px] border-black bg-[#FDF9F5D9]"></div>
                            <p className="font-inter h-3/5 text-justify text-xl leading-10">
                                Integrate generative AI into your animation
                                workflow, decrease production time and budget
                                and be in control of the creative process of
                                your project like never before. With
                                Fundamentals Motion Maker.
                            </p>
                        </div>
                        <div className="flex flex-1 flex-col place-items-center gap-3 rounded-3xl border-[3px] border-black bg-white p-4">
                            <div className="h-2/5 w-full rounded-2xl border-[3px] border-black bg-[#FDF9F5D9]"></div>
                            <p className="font-inter h-3/5 text-justify text-xl leading-10">
                                Integrate generative AI into your animation
                                workflow, decrease production time and budget
                                and be in control of the creative process of
                                your project like never before. With
                                Fundamentals Motion Maker.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-end mt-12 gap-10'>
                        <Image src={left_arrow} width={100} height={100} alt='left arrow for news swiper' />
                        <Image src={right_arrow} width={100} height={100} alt='right arrow for news swiper' />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomePage;
