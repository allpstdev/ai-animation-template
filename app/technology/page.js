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

const TechnologyPage = () => {
    return (
        <div>
            <Header text={'Technology'} />
            <SubHeader text={'Uncovering the black box'} />
            <PageDescription text={`We build forward-thinking AI technology and make it available in user-centric apps. `} />

            {/* <div className='min-w-sm h-full'> */}
            <Image
                alt="demo"
                src={demo}
                width="0"
                height="0"
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20 invisible'
            />
            <section className="bg-[#FDF9F5] px-44 pb-12 pt-24">
                <div className="mt-32 pb-96">
                    <div>
                        <ContentHeader text={`Research`} />
                        <ContentDescription text=
                            {`We build AI tools, tailor-made for those who put design first - in whatever they do. Our goal is not to replace humans in the visual space but to enhance their creative output with Artificial Intelligence. Technological augmentation of digital art will start creating content that will take our breaths away. All Fundamentals products are trained to understand the personal artistic handwriting of each user. As it learns, our AI starts enhancing work by automating repetitive tasks and suggesting visual elements - in each user's very own style.`}
                        />
                    </div>
                    <div>
                        <ContentHeader text={`Proprietary Technology`} />
                        <ContentDescription text=
                            {`We build AI tools, tailor-made for those who put design first - in whatever they do. Our goal is not to replace humans in the visual space but to enhance their creative output with Artificial Intelligence. Technological augmentation of digital art will start creating content that will take our breaths away. All Fundamentals products are trained to understand the personal artistic handwriting of each user. As it learns, our AI starts enhancing work by automating repetitive tasks and suggesting visual elements - in each user's very own style. `}
                        />
                    </div>
                    <div>
                        <ContentHeader text={`Software Development`} />
                        <ContentDescription text=
                            {`We build AI tools, tailor-made for those who put design first - in whatever they do. Our goal is not to replace humans in the visual space but to enhance their creative output with Artificial Intelligence. Technological augmentation of digital art will start creating content that will take our breaths away. All Fundamentals products are trained to understand the personal artistic handwriting of each user. As it learns, our AI starts enhancing work by automating repetitive tasks and suggesting visual elements - in each user's very own style.`}
                        />
                    </div>
                    <div>
                        <ContentHeader text={`Design - our principle`} />
                        <ContentDescription text=
                            {`We build AI tools, tailor-made for those who put design first - in whatever they do. Our goal is not to replace humans in the visual space but to enhance their creative output with Artificial Intelligence. Technological augmentation of digital art will start creating content that will take our breaths away. All Fundamentals products are trained to understand the personal artistic handwriting of each user. As it learns, our AI starts enhancing work by automating repetitive tasks and suggesting visual elements - in each user's very own style.`}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechnologyPage
