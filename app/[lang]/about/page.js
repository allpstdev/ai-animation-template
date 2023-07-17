import ContentDescription from '@/components/content/Description'
import EllipseComponent from '@/components/content/EllipseComponent'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import { dictionary } from '@/content'
import Image from 'next/image'

import company_values from '../../../public/company_values.svg'
import demo from '../../../public/Fundamentals_logo_lg.png'
import profile_gunther from '../../../public/profile_gunther.png'
import profile_mario from '../../../public/profile_mario.png'
import profile_mike from '../../../public/profile_mike.png'

const AboutPage = ({
    params
}) => {
    const {
        page_header,
        page_sub_header,
        page_description,
        content_1_header,
        content_1_decription,
        content_2_header,
        content_2_decription,
        mario_designation,
        mario_description,
        mario_qoute,
        mike_designation,
        mike_description,
        mike_qoute,
        gunther_designation,
        gunther_description,
        gunther_qoute,
    } = dictionary[params.lang]?.about

    return (
        <div>
            <Header text={page_header} />
            <SubHeader text={page_sub_header} />
            <PageDescription text={page_description} />
            <Image
                alt="demo"
                src={demo}
                width="0"
                height="0"
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20'
            />

            <EllipseComponent />

            <section className="bg-[#FDF9F5] pt-40 pb-12 px-28">
                <div className="mt-32">
                    <ContentHeader text={content_1_header} />
                    <ContentDescription text={content_1_decription} />
                </div>
                <div className="my-60">
                    <Image
                        alt="company values"
                        width={0}
                        height={0}
                        className="w-100vw h-auto mx-auto"
                        src={company_values}
                    />
                </div>

                <div className="mt-32">
                    <ContentHeader text={content_2_header} />
                    <ContentDescription text={content_2_decription} />
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
                                {mario_designation}
                            </div>
                        </div>
                    </div>
                    <div className="py-12">
                        <div className="mt-20 text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            {mario_description}
                        </div>
                        <div className="my-10 text-center text-2xl  font-normal leading-[66px]  tracking-widest text-black">
                            {mario_qoute}
                        </div>
                    </div>
                    <br />

                    <div className="-mb-[3px] ml-44 h-[1px] w-4/5 bg-black" />
                    <div className="flex flex-col xl:flex-row">
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
                                {mike_designation}
                            </div>
                        </div>
                    </div>
                    <div className="py-12 px-5 mt-2">
                        <div className="mt-16 text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            {mike_description}
                        </div>
                        <div className="my-10 text-center text-2xl font-normal leading-[66px] tracking-widest text-black">
                            {mike_qoute}
                        </div>
                    </div>

                    <div className="-mb-[4px] ml-44 h-[1px] w-4/5 bg-black" />
                    <div className="flex flex-col xl:flex-row">
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
                                {gunther_designation}
                            </div>
                        </div>
                    </div>
                    <div className="py-10 mt-2">
                        <div className="mt-16 text-center  text-4xl font-normal leading-[66px] tracking-widest text-black">
                            {gunther_description}
                        </div>
                        <div className="mt-10 text-center text-2xl  font-normal leading-[66px] tracking-widest text-black">
                            {gunther_qoute}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
