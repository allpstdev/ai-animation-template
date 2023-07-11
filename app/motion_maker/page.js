import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'
import Link from 'next/link'

import company_values from '../../public/company_values.svg'
import motion_maker_demo from '../../public/motion_maker_demo.png'
import profile_gunther from '../../public/profile_gunther.png'
import profile_mario from '../../public/profile_mario.png'
import profile_mike from '../../public/profile_mike.png'

const MotionMakerPage = () => {
    return (
        <div className='bg-[#B19FDC]/20'>
            <Header text={'Motion Maker'} />
            <SubHeader text={'The future of media production'} />

            {/* <div className='min-w-sm h-full'> */}
            <Image
                alt="motion maker demo"
                src={motion_maker_demo}
                width="0"
                height="0"
                className='w-full lg:w-2/3 mx-auto lg:mx-auto mb-72 mt-20'
            />
            <section className="bg-[#B19FDC]/25 px-44 pb-12 pt-24">
                <div className="mt-32 pb-96">
                    <div>
                        <h3 className="mt-32 mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                            Overview
                        </h3>
                        <p className="text-justify text-3xl font-normal leading-[2.25em]">
                            {`Fundamentals Motion Maker is an animation software using AI to create video content. Its architecture allows both professional users, like animation studios or experienced artists, and animation newbies to profit from its range of AI-powered features.  Rather than forcing users into animating in a specific style, Motion Maker is trained to study the individual style and patterns of each artist using it. The knowledge about their individual preferences allows users to create AI-enhanced content that will take everyone’s breath away. Because artists can finally focus on their actual work, not on handling complex design software.  `}
                        </p>
                        <div className='mt-20 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
                            Register for beta release
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-32 mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                            Features
                        </h3>
                        <p className="text-justify text-3xl font-normal leading-[2.25em]">
                            {`The software follows the steps of traditional animation production. Our goal is to enhance workflows, not create new ones. So the workflow starts with a script and follows a series of steps to a finished `}
                        </p>
                        <div className='mt-96 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
                            Show all features
                        </div>

                    </div>
                    <div>
                        <h3 className="mt-32 mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                            Have AI do it your way
                        </h3>
                        <p className="text-justify text-3xl font-normal leading-[2.25em]">
                            {`Fundamentals Motion Maker is an animation software using AI to create video content. Its architecture allows both professional users, like animation studios or experienced artists, and animation newbies to profit from its range of AI-powered features.  Rather than forcing users into animating in a specific style, Motion Maker is trained to study the individual style and patterns of each artist using it. The knowledge about their individual preferences allows users to create AI-enhanced content that will take everyone’s breath away. Because artists can finally focus on their actual work, not on handling complex design software.  `}
                        </p>
                        <div className='mt-20 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
                            Discover versions
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-32 mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                            For the artists of tomorrow
                        </h3>
                        <p className="text-justify text-3xl font-normal leading-[2.25em]">
                            {`The animation students of today will be in charge of creating the future of animation. We want that future to look bright, beautiful, and blow people’s minds with unprecedented visuals. AI equips the next generation of creators with the tools for that task. We love animation. We want to see more animation, more beautiful visuals, and more refined storylines from all of you! That’s why we decided to make Motion Maker available to students at a huge discount. No other major animation software product offers students attractive conditions like Fundamentals Motion Maker. We are so excited to see what every one of you will create. What are you waiting for? `}
                        </p>
                        <div className='mt-20 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
                            Join the waitlist
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-32 mb-12 text-left text-2xl font-light tracking-[0.25em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                            Give animation a try!
                        </h3>
                        <p className="text-justify text-3xl font-normal leading-[2.25em]">
                            {`The animation students of today will be in charge of creating the future of animation. We want that future to look bright, beautiful, and full of unprecedented visuals. AI equips the next generation of creators with the tools for that. We love animation. We want to see more animation, more beautiful visuals, and more refined storylines from all of you! That’s why we decided to make Motion Maker available to students at a huge discount. No other major animation software product offers students conditions as attractive as Fundamentals Motion Maker does. We are so excited to see what every one of you will create. What are you waiting for? `}
                        </p>
                        <div className='mt-20 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
                            Learn more
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MotionMakerPage
