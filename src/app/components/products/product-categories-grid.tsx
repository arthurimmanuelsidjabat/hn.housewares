/**
 * Product Categories - Grid
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Link from 'next/link';

const ProductCategoriesGrid = () => {
    return (
        <section
            id='producCategoriesGrid'
        >
            <div
                className='relative w-full px-3 mx-auto max-w-screen-xl xl:max-w-screen-2xl'
            >
                <div className='grid grid-cols-2 gap-[1px] overflow-hidden rounded-2xl md:grid-cols-4'>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                className='fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                                fill='currentColor'
                                d='m21.5 19.8 2.1-10.6h-7.4q.2-.4.2-.9c0-1.4-1.2-2.6-2.7-2.6-1.4 0-2.6 1.2-2.6 2.6q0 .5.2.9H.5V11h7.1l1.9 8.8zM12.9 8.3c0-.3.2-.6.5-.8.3-.1.7 0 1 .2.2.3.3.6.2 1-.2.3-.5.5-.9.5s-.8-.4-.8-.9zm8.6 2.7-1.4 7h-9.2l-1.5-7zM9.3 20.7h12.3v1.7H9.3zM19.4 7.5c1.3 0 2.2-1 2.2-2.2 0-1.2-.9-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2zm0-2.6q.2 0 .4.1.1.1.1.3 0 .2-.1.3-.2.2-.4.2-.1 0-.3-.2-.1-.1-.1-.3 0-.2.1-.3.2-.1.3-.1z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Cookware
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M23.3.7c-.4-.5-1.1-.7-1.7-.7-.6 0-1.2.3-1.6.8l-2.2 2.4h-.2l-.1.1h-.2l-.1.1q-.6-.3-1.2-.3c-.7 0-1.2.2-1.7.6L3.7 14.3c-.7.8-.8 2-.3 2.9l-.1.1v.2l-.1.1v.2L.8 20c-.5.4-.8 1-.8 1.6 0 .6.2 1.3.7 1.7.4.4 1 .7 1.6.7.6-.1 1.2-.3 1.6-.8l2.3-2.5h.1q.1-.1.2-.1h.1l.1-.1q.6.4 1.3.4c.6 0 1.2-.3 1.6-.7L20.2 9.6c.8-.8.9-2 .3-2.9l.1-.1v-.1q0-.1.1-.2v-.1l2.5-2.3c.5-.4.7-1 .8-1.6 0-.6-.3-1.2-.7-1.6zM2.7 22.1l-.1.1h-.1q0 .1-.1.1h-.1q-.3 0-.5-.2V22q-.1 0-.1-.1v-.5l.1-.1.1-.1 2.4-2.1.6.6zM19 8.4 8.4 19q-.2.2-.4.2-.3 0-.5-.2l-2.6-2.6c-.3-.3-.3-.7 0-.9L15.5 4.9l.1-.1h.1q0-.1.1-.1h.2q.1 0 .2.1h.1q0 .1.1.1L19 7.5c.2.3.2.7 0 .9zm3.1-5.7-2.5 2.2-.6-.6 2.2-2.5h.1q0-.1.1-.1h.1l.1-.1h.2q0 .1.1.1h.1q0 .1.1.1 0 .1.1.1V2q0 .1.1.1v.2l-.1.1v.1q0 .1-.1.1v.1z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Kitchenware
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='m4.9 8.6-.1-.1v-.1h-.1v-.1c-.2-.3-.6-.4-1-.2-.3.3-.4.7-.2 1q.1 0 .1.1t.1.1v.1h.1q0 .1.1.2l.1.1h.3q.3 0 .4-.1c.4-.2.4-.6.2-1z'
                            />
                            <path
                                d='m22.4 20.3-5.2-5.2L2.4.2Q2.2.1 2.1 0h-.4q-.2.1-.3.2-.1.1-.2.3C.7 2.2 1 4 1.6 5.6q.3.7.7 1.4c.1.3.5.5.9.3.3-.2.5-.6.3-.9v-.1q-.6-1-.9-2c0-.2-.4-2.1-.3-2.1l13.4 13.4-1.6 1.6-.4.4c-.1.1-2.5-2.1-2.7-2.3q-.6-.6-1.2-1.1l-1.1-1.1q-.5-.6-1.1-1.1l-1-1.2c-.4-.5-.8-1-1.4-.6-.3.2-.4.7-.1 1 1.7 2 3.6 3.9 5.6 5.7q.7.7 1.5 1.3l.2.2q.1 0 .2.1l.2.2q.1.1.2.1c.2.2.5.4.8.4q.2 0 .5-.2l.3-.3 4.7 4.7c.4.4 1 .6 1.6.6.5 0 1.1-.2 1.5-.6.9-.9.9-2.3 0-3.1zm-1 2.1c-.3.3-.8.3-1.1 0l-4.7-4.7 1.1-1.1 4.7 4.6c.3.4.3.9 0 1.2z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Knives
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M22 18.7c1.3-2 2-4.3 2-6.7 0-6.6-5.4-12-12-12S0 5.4 0 12s5.4 12 12 12c2.4 0 4.7-.7 6.7-2l1.3 1.3c.9.9 2.4.9 3.3 0 .9-.9.9-2.4 0-3.3zm-10 3.8C6.3 22.5 1.6 17.8 1.6 12 1.6 6.3 6.3 1.6 12 1.6c5.8 0 10.5 4.7 10.5 10.4 0 2-.6 3.9-1.6 5.6l-1.2-1.2c.8-1.3 1.2-2.8 1.2-4.4 0-4.9-4-8.8-8.9-8.8S3.2 7.1 3.2 12s3.9 8.9 8.8 8.9c1.6 0 3.1-.4 4.4-1.2l1.2 1.2c-1.7 1-3.6 1.6-5.6 1.6zm3-13-2.8-2.9c-.4-.3-.8-.3-1.2 0-.3.3-.3.8 0 1.1l2 2-1.1 1.1-2-2c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2L9.7 13l-2-2c-.3-.3-.8-.3-1.1 0-.3.4-.3.8 0 1.2L9.5 15c1.3 1.4 3.4 1.5 4.9.5l1 1c-.3.7-.3 1.4 0 2-1 .6-2.2.8-3.4.8-4 0-7.3-3.2-7.3-7.3C4.7 8 8 4.7 12 4.7c4.1 0 7.3 3.3 7.3 7.3 0 1.2-.2 2.4-.8 3.4-.6-.3-1.3-.3-2 0l-1-1c1-1.5.9-3.6-.5-4.9zm-1.1 4.4c-.8.8-2.2.9-3.1.2l3.3-3.3c.7.9.7 2.3-.2 3.1zm8.3 8.3c-.3.3-.8.3-1.1 0L17 18.1c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l4.1 4.1c.3.3.3.8 0 1.1z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Tableware
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M20.8 5.7h-.9V4.1c0-2.2-1.8-4.1-4.1-4.1H8.2C5.9 0 4.1 1.9 4.1 4.1v1.6h-.9C1.9 5.7.8 6.8.8 8.1v10.4c0 1.3 1.1 2.4 2.4 2.4h1.1l.2 3.1H8l.2-3.1h7.6L16 24h3.5l.2-3.1h1.1c1.3 0 2.4-1.1 2.4-2.4V8.1c0-1.3-1.1-2.4-2.4-2.4zM5.5 4.1a2.732 2.732 0 0 1 2.7-2.7h7.6a2.732 2.732 0 0 1 2.7 2.7v2c-.6.4-1 1.1-1.1 1.9v6.9H6.6V8c-.1-.8-.5-1.5-1.1-1.9zm1.2 18.5h-.9l-.2-1.8h1.2zm11.6 0h-1l-.1-1.7h1.2zm3.6-4.1q0 .4-.3.7-.3.2-.7.2H3.2q-.4 0-.6-.2-.3-.3-.3-.7V8q0-.4.3-.7.2-.2.6-.2h1.1q.4 0 .7.2.3.3.3.7v8.2h13.6V8q0-.4.3-.7.2-.2.6-.2h1.1q.4 0 .7.2.3.3.3.7v10.5z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Home decor
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='m23.3 15-.1-13.9c0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7v.8H2.3l-.1-.8c0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7V15c-.4 0-.7.3-.7.8v7.1c0 .4.3.7.7.7h2.9q.1 0 .2-.1.1 0 .1-.1.1-.1.1-.2l1-1.8h14l1 1.8q0 .1.1.2 0 .1.1.1.1.1.2.1h2.9c.4 0 .7-.3.7-.7v-7.1c0-.5-.3-.8-.8-.8zm-1.5-4.3q-.2-.1-.4-.3-.2-.1-.4-.1-.3-.1-.5-.1-.3-.1-.5-.1h-2.7V8.6c0-1.6-1.3-3-3-3H9.8c-1.6 0-3 1.4-3 3v1.5H4.2q-.2 0-.5.1-.2 0-.5.1-.2 0-.4.1-.2.2-.4.3l-.1-7.3h19.5zm-6-.6H8.3V8.6c0-.8.7-1.5 1.5-1.5h4.5c.9 0 1.5.7 1.5 1.5zM2.3 13.5c0-1.1.9-1.9 1.9-1.9H20c1 0 1.8.8 1.8 1.9V15H2.3zm20.3 8.6h-1.4l-.9-1.8q-.1-.1-.1-.2-.1-.1-.2-.1-.1-.1-.2-.1H4.4q-.1 0-.2.1-.1 0-.2.1 0 .1-.1.2L3 22.1H1.6v-5.6h21z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Home living
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M20.6 6.3h.8c1.3 0 2.3-1.1 2.3-2.4V2.3c0-1.2-1-2.3-2.3-2.3H2.6C1.3 0 .3 1.1.3 2.3v1.6c0 1.3 1 2.4 2.3 2.4h.8V13h-.8C1.3 13 .3 14.1.3 15.4v4.7c0 1.3 1 2.3 2.3 2.3h.9c.3.9 1.2 1.6 2.2 1.6h12.6c1 0 1.9-.7 2.2-1.6h.9c1.3 0 2.3-1 2.3-2.3v-4.7c0-1.3-1-2.4-2.3-2.4h-.8V6.3zM3.4 20.9h-.8c-.4 0-.8-.4-.8-.8v-2.4h1.6zm0-4.7H1.8v-.7c0-.5.4-.8.8-.8h.8v1.5zM8.1 1.6h7.8v3.2H8.1zM2.6 4.7c-.4 0-.8-.4-.8-.8V2.3c0-.4.4-.7.8-.7h3.9v3.1zm16.5 17c0 .4-.4.7-.8.7H5.8c-.5 0-.8-.3-.8-.7v-2.4h9.4v.8c0 .4.3.8.7.8.5 0 .8-.4.8-.8v-.8h3.2v2.4zm0-4H5v-5.3c1 1.1 2.4 1.7 3.9 1.7h.8v.8c0 .4.3.8.7.8h3.2c.4 0 .8-.4.8-.8v-.8h.7c1.6 0 3-.6 4-1.7zm-7.9-3.6v-1.6h1.6v1.6h-1.6zm7.9-5.5c0 2.2-1.8 3.9-4 3.9h-.7v-.8c0-.4-.4-.7-.8-.7h-3.2c-.4 0-.7.3-.7.7v.8h-.8C6.7 12.5 5 10.8 5 8.6V6.3h14.1v2.3zm3.1 11.5c0 .4-.4.8-.8.8h-.8v-3.2h1.6v2.4zm-.8-5.5c.4 0 .8.4.8.8v.8h-1.6v-1.6h.8zm-3.9-9.9V1.6h3.9c.4 0 .8.3.8.7v1.6c0 .4-.4.8-.8.8z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Travel &amp; outdoor
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center justify-center gap-8 bg-pink-200 relative p-6 group group-hover:bg-orange-500 sm:p-10'>
                        <svg
                            className='w-12 h-12 fill-stone-700 transition-colors ease-in-out duration-300 group-hover:fill-orange-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M5.5 11c-1.3 0-2.4 1-2.4 2.3v2.6c0 .4.4.8.8.8s.8-.4.8-.8v-2.6c0-.4.3-.8.8-.8.4 0 .8-.3.8-.8 0-.4-.4-.7-.8-.7z'
                            />
                            <path
                                d='M23.2 17H22c2.1-6.5 2-6.1 2-6.1.1-.5-.3-1-.8-1h-3.1q-.1 0-.3.1-.1 0-.2.1l-.2.2q0 .1-.1.2c-.3 1.4-.3 1.3-.3 1.4-.2.7-.6 1.3-1.3 1.7v-.3c0-1.5-.6-2.8-1.5-3.8v-4c0-3-2.5-5.5-5.5-5.5H7C4 0 1.6 2.5 1.6 5.5v4c-1 1-1.6 2.3-1.6 3.8v5.2c0 3 2.5 5.5 5.5 5.5h6.8c.9 0 1.7-.2 2.5-.6.6.4 1.4.6 2.2.6h3.1c2.1 0 3.9-1.8 3.9-3.9v-2.4c0-.4-.4-.7-.8-.7zm-5.5-1.8c1.5-.4 2.5-1.6 2.8-3l.2-.7h1.4c-1.9 5.8-1.8 5.4-1.8 5.5h-2.6zM3.1 5.4c0-2.2 1.8-3.9 3.9-3.9h3.7c2.2 0 3.9 1.7 3.9 3.9v2.9l-.4-.2Q14 8 13.8 8q-.2-.1-.4-.1-.2-.1-.4-.1V7c0-1.3-1-2.4-2.3-2.4h-1v-.8c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.8H7C5.7 4.6 4.7 5.7 4.7 7v.8q-.2 0-.4.1-.2 0-.4.1-.2 0-.4.1l-.4.2V5.4zM11.5 7v.7H6.3V7c0-.5.3-.8.7-.8h3.7c.4 0 .8.3.8.8zm2.2 15.1q-.2.1-.4.1-.2.1-.3.1h-.4q-.2.1-.3.1H5.5c-2.2 0-3.9-1.8-3.9-4v-5.2c0-2.1 1.7-3.9 3.9-3.9h6.8c2.1 0 3.9 1.8 3.9 3.9v3.7h-2.4c-.4 0-.8.3-.8.8V20c0 .8.3 1.5.7 2.1zm8.7-2.1c0 1.3-1 2.4-2.3 2.4H17c-1.3 0-2.4-1.1-2.4-2.4v-1.6h7.8z'
                            />
                        </svg>
                        <p className='text-center'>
                            <Link
                                href='#'
                                className='transition-all ease-in-out duration-300 text-stone-700 font-bold uppercase tracking-widest text-xs mt-auto hover:text-orange-500 after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                            >
                                Drinkware
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategoriesGrid;