/**
 *  Perks
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
const Perks = () => {
    return (
        <section
            id='Perks'
        >
            <h2 className='sr-only'>Our perks</h2>
            <div
                className='relative w-full px-3 mx-auto max-w-screen-xl xl:max-w-screen-2xl'
            >
                <div
                    className="bg-stone-200 divide-y divide-stone-300 lg:flex lg:justify-center lg:divide-x lg:py-8 rounded-2xl lg:divide-y-0"
                >
                    <div className='py-8 lg:w-1/3 lg:py-0'>
                        <div className='mx-auto flex max-w-xs items-center px-4 lg:px-8'>
                            <svg
                                className='h-8 w-8 flex-shrink-0'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d="m23.9 14.1-3.6-4q-.1-.2-.3-.2h-3.1V7c0-.2-.2-.5-.5-.5H9.5C9 4.4 7.1 2.8 4.8 2.8 2.2 2.8 0 5 0 7.6c0 1.1.3 2 .9 2.8v7.1H.5c-.3 0-.5.2-.5.5s.2.5.5.5h.4v.5c0 .3.2.5.5.5h.9c.2 1 1.1 1.7 2.1 1.7 1.1 0 1.9-.7 2.2-1.7h11.2c.2 1 1.1 1.7 2.1 1.7s1.9-.7 2.1-1.7h1.5c.3 0 .5-.2.5-.5v-4.6q0-.2-.1-.3zM9.7 7.5h6.2v8h-14v-4.1c.8.7 1.8 1 2.9 1 2.7 0 4.9-2.1 4.9-4.8v-.1zM1 7.6c0-2.1 1.7-3.9 3.8-3.9 2.2 0 3.9 1.8 3.9 3.9 0 2.2-1.7 3.9-3.9 3.9C2.7 11.5 1 9.8 1 7.6zm3.4 12.7c-.6 0-1.2-.6-1.2-1.3 0-.6.6-1.2 1.2-1.2.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.3 1.3zm11.5-1.7H6.6c-.3-1-1.1-1.7-2.2-1.7-1 0-1.9.7-2.1 1.7h-.4v-2.1h14v2.1zm7.1 0h-1c-.2-1-1.1-1.7-2.1-1.7s-1.9.7-2.1 1.7h-.9v-7.8h2.6v3.7c0 .2.2.4.4.4H23v3.7zm-3.1 1.7c-.7 0-1.2-.6-1.2-1.3 0-.6.5-1.2 1.2-1.2s1.2.6 1.2 1.2c0 .7-.5 1.3-1.2 1.3zm.5-8.7 2.1 2.4h-2.1z"
                                />
                                <path
                                    d="M14.8 14h-4c-.3 0-.5.2-.5.5s.2.5.5.5h4c.2 0 .5-.2.5-.5s-.3-.5-.5-.5zm-5.5 0H9c-.3 0-.5.2-.5.5s.2.5.5.5h.3c.2 0 .5-.2.5-.5s-.3-.5-.5-.5zM6.2 8.3l-.9-.9V4.7c0-.2-.2-.4-.5-.4-.2 0-.4.2-.4.4v2.9q0 .2.1.4l1 1q.2.1.4.1t.3-.1c.2-.2.2-.5 0-.7z"
                                />
                            </svg>
                            <div className='ml-4 flex flex-auto flex-col'>
                                <h4 className='text-xs uppercase tracking-widest font-bold text-gray-500'>
                                    Free shipping
                                </h4>
                                <p className='capitalize font-medium text-gray-900'>for orders above $99</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-8 lg:w-1/3 lg:py-0'>
                        <div className='mx-auto flex max-w-xs items-center px-4 lg:px-8'>
                            <svg
                                className='h-8 w-8 flex-shrink-0'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    d="M10.5 2.6c.8-.8 2.2-.8 3 0l1 1.1c.4.5 1 .7 1.6.7l1.5-.1c1.2 0 2.1.9 2.1 2.1l-.1 1.5c0 .6.2 1.2.7 1.6l1.1 1c.8.8.8 2.2 0 3l-1.1 1c-.5.4-.7 1-.7 1.6l.1 1.5c0 1.2-.9 2.1-2.1 2.1l-1.5-.1c-.6 0-1.2.2-1.6.7l-1 1.1c-.8.8-2.2.8-3 0l-1-1.1c-.4-.5-1-.7-1.6-.7l-1.5.1c-1.2 0-2.1-.9-2.1-2.1l.1-1.5c0-.6-.2-1.2-.7-1.6l-1.1-1c-.8-.8-.8-2.2 0-3l1.1-1c.5-.4.7-1 .7-1.6l-.1-1.5c0-1.2.9-2.1 2.1-2.1l1.5.1c.6 0 1.2-.2 1.6-.7z"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m9 12 2 2 4-4"
                                />
                            </svg>
                            <div className='ml-4 flex flex-auto flex-col'>
                                <h4 className='text-xs uppercase tracking-widest font-bold text-gray-500'>
                                    Extended Coverage
                                </h4>
                                <p className='capitalize font-medium text-gray-900'>manufacturer&#39;s warranty</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-8 lg:w-1/3 lg:py-0'>
                        <div className='mx-auto flex max-w-xs items-center px-4 lg:px-8'>
                            <svg
                                className='h-8 w-8 flex-shrink-0'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d="M18.6 7.2h.6V6c0-.4-.2-.8-.5-1l-3.6-2.4q-.3-.2-.7-.2H4.8q-.4 0-.7.2L.5 5c-.3.2-.5.6-.5 1v14.4c0 .7.5 1.2 1.2 1.2H18c.7 0 1.2-.5 1.2-1.2h-18V6.6h6v7.8H12V6.6h6v.6h.6zM7.2 5.4H2.1l2.7-1.8h2.4zm3.6 7.8H8.4V6.6h2.4zm0-7.8H8.4V3.6h2.4zm1.2 0V3.6h2.4l2.7 1.8z"
                                />
                                <path
                                    d="M18.6 8.4c-1.7 0-3.2.8-4.2 2v-1c0-.3-.3-.6-.6-.6s-.6.3-.6.6v2.4c0 .4.3.6.6.6h2.4c.3 0 .6-.2.6-.6 0-.3-.3-.6-.6-.6h-.9c.8-1 2-1.6 3.3-1.6 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2-1.2 0-2.2-.5-2.9-1.3l-.9.9c1 1 2.3 1.6 3.8 1.6 3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.4-5.4-5.4z"
                                />
                            </svg>
                            <div className='ml-4 flex flex-auto flex-col'>
                                <h4 className='text-xs uppercase tracking-widest font-bold text-gray-500'>
                                    100 days returns
                                </h4>
                                <p className='capitalize font-medium text-gray-900'>Industry-leading policy</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-8 lg:w-1/3 lg:py-0'>
                        <div className='mx-auto flex max-w-xs items-center px-4 lg:px-8'>
                            <svg
                                className='h-8 w-8 flex-shrink-0'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M20 22q.1.1.2.1h.3q.1.1.2.1h.2c.3.1.5-.2.4-.5q0-.1-.1-.2 0-.1-.1-.2v-.2q-.1-.1-.1-.2v-.1c-.4-.9-.6-2.1-.7-3.1 1.6-1.7 2.7-3.9 2.7-6.3 0-5.3-4.9-9.6-11-9.6S1 6.1 1 11.4 5.9 21 12 21q.4 0 .8-.1.4 0 .8-.1.4 0 .8-.1l.8-.2c.7.4 2.3 1 4.8 1.5zm-.7-5.3-.2.2q-.1.2-.1.3-.1.1-.1.3v.3q0 .3.1.7 0 .3.1.7.1.3.2.7 0 .3.1.6c-1.9-.4-3-.9-3.6-1.2q-.1 0-.2-.1h-.7q-.4.1-.7.2-.4 0-.8.1-.3 0-.7.1H12c-5.5 0-9.6-3.9-9.6-8.2C2.4 7 6.5 3.1 12 3.1s9.6 3.9 9.6 8.3c0 2-.9 3.8-2.3 5.3z'
                                />
                            </svg>
                            <div className='ml-4 flex flex-auto flex-col'>
                                <h4 className='text-xs uppercase tracking-widest font-bold text-gray-500'>
                                    Chat with us
                                </h4>
                                <p className='capitalize font-medium text-gray-900'>Live support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perks;