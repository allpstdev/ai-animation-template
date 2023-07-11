import ContentDescription from '@/components/content/Description'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'

import company_values from '../../public/company_values.svg'
import demo from '../../public/Fundamentals_logo_lg.png'
import profile_gunther from '../../public/profile_gunther.png'
import profile_mario from '../../public/profile_mario.png'
import profile_mike from '../../public/profile_mike.png'

const AboutPage = () => {
    return (
        <div>
            <Header text={'About'} />
            <SubHeader text={'Fundamentals Artificial Intelligence'} />
            <PageDescription text={`Our founding team uses 100+ years combined experience in media, tech, and corporate finance to create AI excellence`} />
            <Image
                alt="demo"
                src={demo}
                width="0"
                height="0"
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20'
            />
            <section className="bg-[#FDF9F5] px-44 pb-12 pt-24">
                <div className="mt-32">
                    <ContentHeader text={`Our mission`} />
                    <ContentDescription text=
                        {`We build AI tools, tailor-made for those who put design first - in whatever they do. Our goal is not to replace humans in the visual space but to enhance their creative output with Artificial Intelligence. Technological augmentation of digital art will start creating content that will take our breaths away. All Fundamentals products are trained to understand the personal artistic handwriting of each user. As it learns, our AI starts enhancing work by automating repetitive tasks and suggesting visual elements - in each user's very own style.`}
                    />
                </div>
                <div className="mt-36">
                    <Image
                        alt="company values"
                        width={0}
                        height={0}
                        className="w-100vw h-auto"
                        src={company_values}
                    />
                </div>

                <div className="mt-32">
                    <ContentHeader text={`Our team`} />
                    <ContentDescription text=
                        {`Fundamentals is a tech firm connecting worlds. Our people make it possible, each contributing with their very own skills and experiences. We are a diverse team located in the tech hub of Zug, Switzerland with talent from all parts of the world. We are media creatives, coders, award-winning writers, investment bankers, real estate professionals, consultants, race drivers, digital artists, and professional poker players.Together we forge the Fundamentals team.`}
                    />
                    <div className="mt-48 -mb-[2px] ml-44 h-[1px] w-4/5 bg-black" />
                    <div className=" flex flex-col xl:flex-row">
                        <Image
                            alt="Mairo Wiedl profile picture"
                            width={0}
                            height={0}
                            className="h-auto w-80"
                            src={profile_mario}
                        />
                        <div className="w-full flex flex-col justify-center border-b border-black pl-7">
                            <div className="mb-4 text-7xl font-normal tracking-widest">
                                Mario Wiedl
                            </div>
                            <div className="text-4xl font-light tracking-default text-black/[0.8]">
                                Co-Founder and CEO
                            </div>
                        </div>
                    </div>
                    <div className="py-12">
                        <div className="text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            5+ years experience in corporate finance, building
                            tech start-ups and building / managing development
                            teams.
                        </div>
                        <div className="mt-10 text-center text-2xl  font-normal leading-[66px]  tracking-widest text-black">
                            “ Imagine anyone could create the same high-end
                            content. No design teams, up to 90% faster than
                            before, no complex tools. All you need is your
                            imagination. We would change the game! Entertainment
                            would be all about creativity — not big budgets.
                            That’s what I want to build. “
                        </div>
                    </div>
                    <br />

                    <div className="-mb-[3px] ml-44 h-[1px] w-4/5 bg-black" />
                    <div className=" flex flex-col xl:flex-row">
                        <Image
                            alt="Mike Milligan profile picture"
                            width={0}
                            height={0}
                            className="h-auto w-80"
                            src={profile_mike}
                        />
                        <div className="flex w-full flex-col justify-center border-b border-black pl-7">
                            <div className="mb-4 text-7xl font-normal tracking-widest">
                                Mike Milligan
                            </div>
                            <div className="text-4xl font-light tracking-default text-black/[0.8]">
                                Co-Founder and CTO
                            </div>
                        </div>
                    </div>
                    <div className="py-12 px-5 mt-2">
                        <div className="text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            20+ years experience in animation, media production, script writing, web design, and software development.
                        </div>
                        <div className="mt-10 text-center text-2xl font-normal leading-[66px] tracking-widest text-black">
                            “ I want to build a useful integration of AI into the highly manual and inefficient workflows of traditional media production and design. Generative AI allows designers to focus on their visuals rather than fighting with complex tools. That’s the goal I ultimately want to achieve. “
                        </div>
                    </div>

                    <div className="-mb-[4px] ml-44 h-[1px] w-4/5 bg-black" />
                    <div className=" flex flex-col xl:flex-row">
                        <Image
                            alt="Günther Lüttecke profile picture"
                            width={0}
                            height={0}
                            className="h-auto w-80 rounded-full bg-white"
                            src={profile_gunther}
                        />
                        <div className="flex w-full flex-col justify-center border-b border-black pl-7">
                            <div className="mb-3 text-7xl font-normal tracking-widest">
                                Günther Lüttecke
                            </div>
                            <div className="text-4xl font-light tracking-default text-black/[0.8]">
                                President of the board of directors
                            </div>
                        </div>
                    </div>
                    <div className="py-10 mt-2">
                        <div className="text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            50+ years experience in project management, real estate development, building teams and business strategies.
                        </div>
                        <div className="mt-10 text-center text-2xl  font-normal leading-[66px] tracking-widest text-black">
                            MISSING!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
