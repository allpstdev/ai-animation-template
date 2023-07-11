import Header from '@/components/Header'
import PageDescription from '@/components/PageDescription'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'

import demo from '../../public/Fundamentals_logo_lg.png'
import products_interface from '../../public/products_interface.png'
import products_motion_maker from '../../public/products_motion_maker.png'

const ProductsPage = () => {
    return (
        <div>
            <Header text={'Products'} />
            <SubHeader text={'May we introduce? - AI'} />
            <PageDescription text={`We build forward-thinking AI technology and make it available in user-centric apps.`} />

            <Image
                alt="demo"
                src={demo}
                width="0"
                height="0"
                className='w-full lg:w-1/2 mx-auto lg:mx-auto mb-72 mt-20 invisible'
            />
            <section className="bg-[#FDF9F5] px-44 pb-12 pt-24">
                <div className="mt-32">
                    <div className="flex w-full flex-col items-center justify-center gap-32">
                        <div className="flex w-100 items-center justify-center rounded-[32px] border-2 border-black">
                            <Image
                                src={products_motion_maker}
                                alt='product motion maker'
                                width="0"
                                height="0"
                                className='w-100 h-auto'
                            />
                        </div>
                        <div className="flex w-100 items-center justify-center rounded-[32px] border-2 border-black">
                            <Image
                                src={products_interface}
                                alt='product motion maker'
                                width="0"
                                height="0"
                                className='w-100 h-auto'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsPage
