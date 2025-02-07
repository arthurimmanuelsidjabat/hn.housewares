/**
 * Home Mid CTA Banner
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Image from 'next/image';
import Link from 'next/link';

const HomeCTASlider = () => {
    return (
        <section
            id='sliderCTA'
        >
            <div
                className='relative -mt-6'
            >
                <div
                    className='absolute inset-0 w-full h-full'
                >
                    <Image
                        alt='Banner Homepage'
                        src='/banner-valentine.webp'
                        width={2457}
                        height={1562}
                        className='size-full object-cover lg:object-[0_65%]'
                    />
                </div>
                <div
                    className='absolute inset-0 bg-gray-800/75 sm:bg-transparent sm:from-gray-800/95 sm:to-gray-900/25 sm:bg-gradient-to-r'
                ></div>

                <div
                    className='relative mx-auto max-w-screen-xl px-3 py-32 lg:flex lg:items-center xl:max-w-screen-2xl'
                >
                    <div className='max-w-3xl bg-white/30 flex flex-col gap-6 backdrop-blur-xs rounded-2xl p-8 text-center sm:text-left sm:p-12'>
                        <h2
                            className='text-4xl font-extrabold leading-none -tracking-wide text-white sm:text-5xl lg:text-7xl'
                        >
                            Warehouse <span
                                className='text-orange-500'>Sale</span>
                                    <strong
                                        className='block font-extrabold'
                                    > Best Deals!
                                    </strong>
                        </h2>
                        <p
                            className='max-w-lg text-white leading-relax sm:text-xl'
                        >
                            Find a selection of the best deals from our warehouse sale up to 65%.
                        </p>
                        <Link
                            href='#'
                            className='block group w-full rounded-lg text-center transition-all ease-in-out duration-300 bg-white px-5 py-4 font-medium text-orange-600 shadow focus:ring-4 focus:ring-white/30 hover:text-orange-500 sm:w-5/12'
                        >
                            Get The Deals <svg
                                className='inline-block w-4 h-4 transition-transform ease duration-200 group-hover:translate-x-1'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4'/>
                                </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCTASlider;