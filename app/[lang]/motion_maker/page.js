import ContentButton from '@/components/content/Button'
import ContentDescription from '@/components/content/Description'
import ContentHeader from '@/components/content/Header'
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import { dictionary } from '@/content'
import Image from 'next/image'

import motion_maker_demo from '../../../public/motion_maker_demo.png'
import purple_ellipse from '../../../public/purple_ellipse.svg';

const MotionMakerPage = ({
    params
}) => {
    const {
        page_header,
        page_sub_header,
        content_1_header,
        content_1_decription,
        content_1_button,
        content_2_header,
        content_2_decription,
        content_2_button,
        content_3_header,
        content_3_decription,
        content_3_button,
        content_4_header,
        content_4_decription,
        content_4_button,
        content_5_header,
        content_5_decription,
        content_5_button,
    } = dictionary[params.lang]?.motion_maker
    return (
        <div className='bg-[#B19FDC]/20'>
            <Header text={page_header} />
            <SubHeader text={page_sub_header} />
            <Image
                alt="motion maker demo"
                src={motion_maker_demo}
                width="0"
                height="0"
                className='w-full lg:w-2/3 mx-auto lg:mx-auto mb-72 mt-20'
            />
            <div >
                <Image
                    alt="demo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', }}
                    src={purple_ellipse}
                />
            </div>
            <section className="bg-[#B19FDC]/25 pt-40 pb-12 px-28">
                <div className="mt-32 pb-96">
                    <div>
                        <ContentHeader text={content_1_header} />
                        <ContentDescription text={content_1_decription} />
                        <ContentButton text={content_1_button} />

                    </div>
                    <div>
                        <ContentHeader text={content_2_header} />
                        <ContentDescription text={content_2_decription} />
                        <ContentButton text={content_2_button} />

                    </div>
                    <div>
                        <ContentHeader text={content_3_header} />
                        <ContentDescription text={content_3_decription} />
                        <ContentButton text={content_3_button} />

                    </div>
                    <div>
                        <ContentHeader text={content_4_header} />
                        <ContentDescription text={content_4_decription} />
                        <ContentButton text={content_4_button} />

                    </div>
                    <div>
                        <ContentHeader text={content_5_header} />
                        <ContentDescription text={content_5_decription} />
                        <ContentButton text={content_5_button} />
                    </div>
                </div >
            </section >
        </div >
    )
}

export default MotionMakerPage
