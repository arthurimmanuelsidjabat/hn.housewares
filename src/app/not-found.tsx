/**
 * 404 Template
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Link from 'next/link';
import Header from './partials/header';
import Footer from './partials/footer';

const NotFound = () => {
    return (
        <div
            id='app'
            className='relative overflow-hidden'
        >
            <Header />
            <main className='mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8'>
                <div className='mx-auto mt-20 max-w-2xl text-center sm:mt-24'>
                    <p className='text-base font-semibold leading-8 text-orange-500'>404</p>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                        This page does not exist
                    </h1>
                    <p className='mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8'>
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                </div>
                <div className='mt-10 flex justify-center'>
                    <Link
                        href='/'
                        className='text-sm font-semibold leading-6 text-orange-500'
                    >
                        <span
                            aria-hidden='true'
                        >
                            ←
                        </span>
                        Back to home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;