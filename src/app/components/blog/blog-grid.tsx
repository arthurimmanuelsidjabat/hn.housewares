/**
 *  Blog Grids
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
    return (
        <section
            id='Blog'
        >
            <div
                className='relative w-full px-3 flex flex-col gap-4 mx-auto max-w-screen-xl xl:max-w-screen-2xl'
            >
                <p
                    className='font-bold text-sm tracking-widest uppercase'    
                >
                    <span
                        className='flex items-center'
                    >
                        <span
                            className='pr-6'
                        >
                            Our latest article
                        </span>
                        <span
                            className='h-px flex-1 bg-stone-300'
                        >
                        </span>
                    </span>
                </p>
                <div className='mx-auto grid gap-5 lg:grid-cols-3'>
                    <div className='flex flex-col overflow-hidden rounded-2xl'>
                        <div className='flex-shrink-0'>
                            <Image
                                alt='Blog Post 1'
                                src='/blog-img-01.webp'
                                width={2457}
                                height={1566}
                                className='size-full object-cover h-48 lg:h-64'
                            />
                        </div>
                        <div className='flex flex-1 flex-col justify-between bg-white p-6 gap-4'>
                            <div className='flex-1'>
                                <p className='text-sm font-medium text-orange-500'>
                                    <Link
                                        href='#'
                                        className='hover:underline'
                                    >
                                        Article
                                    </Link>
                                </p>
                                <Link href='#' className='flex flex-col gap-4'>
                                    <p className='text-xl font-semibold text-gray-900 leading-tight'>
                                        Boost your conversion rate
                                    </p>
                                    <p className='text-base line-clamp-2 text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </Link>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href='#'>
                                        <span className='sr-only'>Roel Aufderehar</span>
                                        <Image
                                            alt='Author Post 1'
                                            src='/author-1.webp'
                                            width={256}
                                            height={256}
                                            className='h-10 w-10 rounded-full'
                                        />
                                    </Link>
                                </div>
                                <div className='ml-3'>
                                    <p className='text-sm font-medium text-gray-900'>
                                        <Link href='#' className='hover:underline'>
                                            Roel Aufderehar
                                        </Link>
                                    </p>
                                    <div className='flex space-x-1 text-sm text-gray-500'>
                                        <time dateTime='2020-03-16'>Mar 16, 2020</time>
                                        <span aria-hidden='true'>·</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-hidden rounded-2xl'>
                        <div className='flex-shrink-0'>
                            <Image
                                alt='Blog Post 2'
                                src='/blog-img-02.webp'
                                width={2457}
                                height={1566}
                                className='size-full object-cover h-48 lg:h-64'
                            />
                        </div>
                        <div className='flex flex-1 flex-col justify-between bg-white p-6 gap-4'>
                            <div className='flex-1'>
                                <p className='text-sm font-medium text-orange-500'>
                                    <Link
                                        href='#'
                                        className='hover:underline'
                                    >
                                        Video
                                    </Link>
                                </p>
                                <Link href='#' className='flex flex-col gap-4'>
                                    <p className='text-xl font-semibold text-gray-900 leading-tight'>
                                        How to use search engine optimization to drive sales
                                    </p>
                                    <p className='text-base line-clamp-2 text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </Link>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href='#'>
                                        <span className='sr-only'>Brenna Goyette</span>
                                        <Image
                                            alt='Author Post 2'
                                            src='/author-2.webp'
                                            width={256}
                                            height={256}
                                            className='h-10 w-10 rounded-full'
                                        />
                                    </Link>
                                </div>
                                <div className='ml-3'>
                                    <p className='text-sm font-medium text-gray-900'>
                                        <Link href='#' className='hover:underline'>
                                            Roel Aufderehar
                                        </Link>
                                    </p>
                                    <div className='flex space-x-1 text-sm text-gray-500'>
                                        <time dateTime='2020-03-16'>Mar 10, 2020</time>
                                        <span aria-hidden='true'>·</span>
                                        <span>4 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-hidden rounded-2xl'>
                        <div className='flex-shrink-0'>
                            <Image
                                alt='Blog Post 3'
                                src='/blog-img-03.webp'
                                width={2457}
                                height={1566}
                                className='size-full object-cover h-48 lg:h-64'
                            />
                        </div>
                        <div className='flex flex-1 flex-col justify-between bg-white p-6 gap-4'>
                            <div className='flex-1'>
                                <p className='text-sm font-medium text-orange-500'>
                                    <Link
                                        href='#'
                                        className='hover:underline'
                                    >
                                        Case Study
                                    </Link>
                                </p>
                                <Link href='#' className='flex flex-col gap-4'>
                                    <p className='text-xl font-semibold text-gray-900 leading-tight'>
                                    Improve your customer experience
                                    </p>
                                    <p className='text-base line-clamp-2 text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </Link>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href='#'>
                                        <span className='sr-only'>Roel Aufderehar</span>
                                        <Image
                                            alt='Author Post 3'
                                            src='/author-3.webp'
                                            width={256}
                                            height={256}
                                            className='h-10 w-10 rounded-full'
                                        />
                                    </Link>
                                </div>
                                <div className='ml-3'>
                                    <p className='text-sm font-medium text-gray-900'>
                                        <Link href='#' className='hover:underline'>
                                            Daniela Metz
                                        </Link>
                                    </p>
                                    <div className='flex space-x-1 text-sm text-gray-500'>
                                        <time dateTime='2020-03-16'>Mar 16, 2020</time>
                                        <span aria-hidden='true'>·</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;