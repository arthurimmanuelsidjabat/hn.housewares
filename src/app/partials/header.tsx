/**
 * Site Header
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import { siteName } from '../siteData';
import { siteDescription } from '../siteData';
import Link from 'next/link';

const Header = () => {
    return (
        <header
            id='mainNavHeader'
            className='relative border-solid border-b border-b-stone-300'
        >
            <div className='flex items-center gap-x-6 bg-stone-700 px-4 py-2.5 sm:px-3.5 sm:before:flex-1'>
                <p className='text-sm leading-6 text-white truncate'>
                    <Link
                        href='#'
                    >
                        <svg
                            className='h-4 inline-block align-[-0.18em]'
                            aria-hidden='true'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                        >
                            <path d='M12.79 21 3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z' />
                            <path d='M11.38 17.41c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM5 2h6.21L19 9.79 12.79 16 5 8.21z' />
                            <circle cx='7.25' cy='4.25' r='1.25' />
                        </svg><strong
                            className='font-semibold ml-1'>Ready to Save?</strong> Warehouse Sale Now On — Up to <strong
                            className='font-semibold'>65% Off</strong> Everything! <span
                            className='text-orange-500 ml-1 font-semibold'>Learn More</span>
                    </Link>
                </p>
                <div className='flex flex-1 justify-end'>
                    <button
                        type='button'
                        className='-my-3 p-3 focus-visible:outline-offset-[-4px] cursor-pointer'
                    >
                        <span className='sr-only'>Dismiss</span>
                        <svg
                            className='h-5 w-5 text-white'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z'
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <nav
                className='relative w-full py-4 px-3 mx-auto max-w-screen-xl lg:py-6 xl:max-w-screen-2xl'>
                <div
                    className='flex flex-wrap -mx-3'>
                    <div
                        className='flex-shrink-0 flex-grow-0 basis-auto w-full px-3 lg:w-9/12 xl:w-10/12'
                    >
                        <div
                            className='flex justify-between items-center'>
                            <h1
                                className='inline-block text-lg font-extrabold text-orange-500'    
                            >
                                <Link
                                    href='/'
                                    className='whitespace-nowrap flex items-center gap-x-2'
                                >
                                    <svg
                                        className='h-8'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 26 24'
                                    >
                                        <path
                                            fill='#f8d1c3'
                                            fillRule='evenodd'
                                            d='m24.5 10.4-.9-.7v12.5h1.5c.5 0 .9.4.9.9s-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h1.5V9.7l-.9.7c-.4.4-1 .3-1.3-.1-.3-.4-.3-1 .1-1.3l9.9-7.9c1.6-1.3 4-1.3 5.6 0L25.7 9c.4.3.4.9.1 1.3-.3.4-.9.5-1.3.1zM16.3 8c0-1.9-1.5-3.4-3.3-3.4-1.8 0-3.3 1.5-3.3 3.4 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3zm-1.2 4.5h-4.2c-.6.1-1.2.3-1.6.8-.5.4-.7 1-.8 1.6v7.3h9v-7.3c-.1-.6-.3-1.2-.8-1.6-.4-.5-1-.7-1.6-.8z'
                                        />
                                        <path
                                            fill='#009689'
                                            fillRule='evenodd'
                                            d='M13 9.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z'
                                        />
                                        <path
                                            fill='#333'
                                            fillRule='evenodd'
                                            d='M13 9.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z'
                                        />
                                        <path
                                            d='M13.1 12.5h2c.6.1 1.2.3 1.6.8.5.4.7 1 .8 1.6v7.3h-9v-7.3c.1-.6.3-1.2.8-1.6.4-.5 1-.7 1.6-.8h2zM17.8 0h3.1c.3 0 .6.3.6.6v5.1l-4.3-3.4V.6c0-.3.3-.6.6-.6z'
                                            fill='#f97316'
                                        />
                                    </svg>
                                    <span
                                        className='inline-block leading-none'
                                    >
                                        {`${siteName}`}<br /><span
                                            className='text-stone-700 font-semibold text-base'
                                        >
                                            {`${siteDescription}`}
                                        </span>
                                    </span>
                                </Link>
                            </h1>
                            <button
                                aria-label='Product Category'
                                className='cursor-pointer flex flex-shrink-0 flex-grow-0 basis-auto h-11 w-11 p-3 items-center justify-center transition-all ease-in-out duration-100 text-black rounded-full border border-stone-300 hover:border-black/20 hover:bg-zinc-100 hover:border-stone-400 lg:w-30 lg:mx-4'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    aria-hidden='true'
                                    data-slot='icon'
                                    className='h-5 inline-block align-middle'
                                >
                                    <path d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z'/>
                                </svg>
                                <span className='hidden ml-1 lg:inline-block text-base align-middle'>Shop</span>
                            </button>
                            <div
                                className='flex-shrink-0 flex-grow-1 basis-auto hidden lg:flex'
                            >
                                <form
                                    className='w-full'
                                    action='/search'
                                >
                                    <div
                                        className='relative
                                                flex
                                                items-stretch
                                                w-full
                                                border
                                                border-stone-300
                                                rounded-full
                                                transition-all group
                                                focus-within:border-stone-400'>
                                        <input
                                            type='text'
                                            placeholder='Search houseware product&hellip;'
                                            autoComplete='off'
                                            className='block px-4 py-2 w-full appearance-none bg-clip-padding rounded-full rounded-e-none border-0 transition-all ease-in-out duration-100 placeholder:text-gray-800 focus:outline-none group-focus:border-stone-400'
                                            name='q'
                                            defaultValue=''
                                        />
                                        <button className='cursor-pointer flex h-11 w-11 items-center justify-center transition-all ease-in-out duration-100 text-black rounded-full rounded-s-none border-0 group-focus:text-stone-400'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 24 24'
                                                aria-hidden='true'
                                                className='h-5'
                                            >
                                                <path
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M15.8 15.8 21 21m-3-10.5c0 4.1-3.4 7.5-7.5 7.5S3 14.6 3 10.5 6.4 3 10.5 3 18 6.4 18 10.5z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        className='hidden flex-shrink-0 flex-grow-0 basis-auto items-center px-3 lg:flex md:justify-end lg:w-3/12 xl:w-2/12'
                    >
                        <button
                            className='cursor-pointer flex h-11 w-11 items-center justify-center ease-in-out duration-100 border border-transparent rounded-full transition-all hover:border-stone-300 hover:bg-zinc-100'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                className='h-5'
                            >
                                <path
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M3.8 22.6c0-4.6 3.7-8.3 8.2-8.3 4.5 0 8.2 3.7 8.2 8.3M16.7 6.1c0 2.6-2.1 4.7-4.7 4.7S7.3 8.7 7.3 6.1 9.4 1.4 12 1.4s4.7 2.1 4.7 4.7z'
                                />
                            </svg>
                        </button>
                        <button
                            className='cursor-pointer flex h-11 w-11 items-center justify-center ease-in-out duration-100 border border-transparent rounded-full transition-all hover:border-stone-300 hover:bg-zinc-100'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                className='h-5'
                            >
                                <path
                                    d='m17.3 6-.1-.8c0-1.3-.5-2.7-1.5-3.7C14.7.6 13.4 0 12 0c-1.4 0-2.7.6-3.7 1.5-1 1-1.6 2.4-1.5 3.7l-.1.8H1.5v15q0 .6.2 1.1.3.6.7 1 .4.4 1 .7.5.2 1.1.2h15q.6 0 1.1-.2.6-.3 1-.7.4-.4.7-1 .2-.5.2-1.1V6zM12 1.5q.8 0 1.5.3t1.2.8q.5.5.8 1.2.3.7.3 1.5V6H8.3v-.8q0-.7.3-1.4t.8-1.2q.5-.5 1.2-.8.7-.3 1.4-.3zm-9 6h18.1L21 21q0 .3-.1.6-.1.2-.3.5-.2.2-.5.3-.3.1-.6.1h-15q-.2 0-.5-.1t-.5-.3q-.2-.3-.3-.5L3 21z'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>                
        </header>
    );
};

export default Header;