/**
 * Home Top Banner
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import { siteName } from '../siteData';
import Image from 'next/image';
import Link from 'next/link';

const HomeCTAGridBanner = () => {
    return (
        <section
            id='homeTopBanner'
        >
            <div
                className='relative w-full px-3 mx-auto max-w-screen-xl xl:max-w-screen-2xl'
            >
                <div
                    className='grid grid-cols-1 gap-y-6 md:grid-cols-3 md:grid-rows-2 md:gap-x-6'
                >
                    <div
                        className='group relative aspect-h-1 aspect-w-2 overflow-hidden rounded-2xl bg-orange-200 md:col-span-2 md:aspect-h-1 md:aspect-w-1 md:row-span-2'
                    >
                        <div
                            className='p-3 flex items-center lg:absolute lg:bottom-4 lg:-right-18'
                        >
                            <Image
                                className='w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto'
                                src='/essteele.webp'
                                alt={`Essteele cookware discount up to 65% on ${siteName}`}
                                width={1142}
                                height={743}
                                priority
                            />
                        </div>
                        <div
                            className='flex flex-col gap-6 px-3 py-4 md:py-20 md:gap-8 lg:py-32 lg:px-16 lg:relative'
                        >
                            <div
                                className='lg:w-9/12 flex flex-col gap-6 md:gap-8'
                            >
                                <div className='flex flex-col'>
                                    <Image
                                        className='max-w-full h-auto object-contain inline-block mb-1'
                                        src='/essteelelogo.webp'
                                        alt={`Essteele cookware discount up to 65% on ${siteName}`}
                                        width={140}
                                        height={42}
                                        priority
                                    />
                                    <span
                                        className='font-bold text-xs uppercase tracking-widest'
                                    >
                                        cookware
                                    </span>
                                </div>
                                <h3
                                    className='text-8xl inline-flex items-center leading-none -tracking-wide font-extrabold xl:text-12xl'
                                >
                                    <span
                                        className='text-xl text-red-600 2xl:text-2xl font-bold tracking-widest uppercase'
                                        style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
                                    >
                                        up to
                                    </span> 65
                                    <span
                                        className='flex flex-col items-center'
                                    >
                                        <span
                                            className='text-4xl xl:text-9xl'
                                        >
                                            %
                                        </span> <span
                                        className='text-2xl xl:text-4xl font-bold uppercase tracking-normal'
                                        >
                                            off
                                        </span>
                                    </span>
                                </h3>
                                <p
                                    className='font-bold text-xs uppercase tracking-widest text-stone-700'
                                >
                                        Only on this week... Don&#39;t miss
                                </p>
                            </div>
                            <Link
                                href='#'
                                className='rounded-lg text-center transition-all ease-in-out duration-300 bg-teal-600 px-5 py-4 font-medium text-white shadow focus:ring-4 focus:ring-teal-600/50 hover:bg-teal-700 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""] md:w-6/12 xl:w-4/12'
                            >
                                Shop Now <svg
                                    className='inline-block w-4 h-4 group-hover:translate-x-1 transition-transform ease duration-200'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4'/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div
                        className='group aspect-h-1 relative aspect-w-2 overflow-hidden rounded-2xl bg-sky-200 md:aspect-none md:h-full'
                    >
                        <div
                            className='px-3 pt-3 flex items-center lg:absolute lg:p-0 lg:bottom-0 lg:h-full lg:-right-24'
                        >
                            <Image
                                className='w-80 lg:max-w-sm xl:max-w-md 2xl:max-w-lg h-auto'
                                src='/tramontina-knives.webp'
                                alt={`Tramontina knives discount up to 64% on ${siteName}`}
                                width={1012}
                                height={1025}
                                priority
                            />
                        </div>
                        <div
                            className='flex flex-col gap-4 px-3 py-4 lg:px-8 lg:py-9 lg:relative lg:h-full'
                        >
                            <div
                                className='flex flex-col'
                            >
                                <Image
                                    className='max-w-full h-auto object-contain inline-block mb-1'
                                    src='/tramontinalogo.webp'
                                    alt={`Tramontina knives discount up to 64% on ${siteName}`}
                                    width={196}
                                    height={40}
                                    priority
                                />
                                <span
                                    className='font-bold text-xs uppercase tracking-widest'
                                >
                                    knives
                                </span>
                            </div>
                            <h3 className='mb-0 font-bold text-3xl leading-none -tracking-wide'>
                                <span
                                    className='text-lg text-blue-900 font-bold tracking-widest uppercase'
                                >
                                    up to
                                </span><br />
                                <span
                                    className='font-extrabold'
                                >
                                    64%
                                </span> <span
                                    className='uppercase text-xl font-extrabold tracking-widest'
                                >
                                    discount
                                </span>
                            </h3>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-slate-600 font-semibold mt-auto hover:text-blue-900 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Shop Now <svg
                                    className='inline-block w-4 h-4 group-hover:translate-x-1 transition-transform ease duration-200'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4'/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div
                        className='group aspect-h-1 relative aspect-w-2 overflow-hidden rounded-2xl bg-green-200 md:aspect-none md:h-full'
                    >
                        <div
                            className='px-3 pt-3 flex items-center lg:absolute lg:p-0 lg:bottom-0 lg:h-full lg:-right-28'
                        >
                            <Image
                                className='w-80 lg:max-w-sm xl:max-w-md 2xl:max-w-lg h-auto'
                                src='/mikasatableware.webp'
                                alt={`Mikasa tableware discount up to 59% on ${siteName}`}
                                width={955}
                                height={532}
                                priority
                            />
                        </div>
                        <div
                            className='flex flex-col gap-4 px-3 py-4 lg:px-8 lg:py-9 lg:relative lg:h-full'
                        >
                            <div
                                className='flex flex-col'
                            >
                                <Image
                                    className='max-w-full h-auto object-contain inline-block mb-1'
                                    src='/mikasalogo.webp'
                                    alt={`Mikasa tableware discount up to 59% on ${siteName}`}
                                    width={164}
                                    height={42}
                                    priority
                                />
                                <span
                                    className='font-bold text-xs uppercase tracking-widest'
                                >
                                    tabbleware
                                </span>
                            </div>
                            <h3 className='mb-0 font-bold text-3xl leading-none -tracking-wide'>
                                <span
                                    className='text-lg text-teal-700 font-bold tracking-widest uppercase'
                                >
                                    up to
                                </span><br />
                                <span
                                    className='font-extrabold'
                                >
                                    59%
                                </span> <span
                                    className='uppercase text-xl font-extrabold tracking-widest'
                                >
                                    discount
                                </span>
                            </h3>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-teal-700 font-semibold mt-auto hover:text-teal-800 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Shop Now <svg
                                    className='inline-block w-4 h-4 group-hover:translate-x-1 transition-transform ease duration-200'
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
            </div>
        </section>
    );
};

export default HomeCTAGridBanner;