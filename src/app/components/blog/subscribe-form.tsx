/**
 *  Subscribe Form
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
export default function SubscribeForm() {
    return (
        <section
            id='subscribeForm'
            className='relative py-16 sm:py-24 lg:py-32 bg-orange-200'
        >
            <div className='absolute top-0 left-0'>
            </div>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-3 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
                <div className='max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:col-span-7'>
                    <h3
                        className='inline sm:block lg:inline xl:block'
                    >
                        Want product <span
                            className='text-orange-500'
                        >
                            news and updates</span>?
                    </h3>
                    <p className='inline sm:block lg:inline xl:block'>Sign up for our newsletter.</p>
                </div>
                <form
                    className='w-full max-w-md lg:col-span-5 lg:pt-2'
                    action='/subscribe'
                >
                    <div
                        className='relative
                                    flex
                                    items-stretch
                                    w-full
                                    border
                                    border-stone-400
                                    rounded-full
                                    transition-all group
                                    focus-within:border-black'
                    >
                        <input
                            type='email'
                            placeholder='Enter your email'
                            autoComplete='off'
                            className='block px-4 py-2 w-full appearance-none bg-clip-padding rounded-full rounded-e-none border-0 transition-all ease-in-out duration-100 placeholder:text-stone-500 focus:outline-none group-focus:border-black'
                            defaultValue=''
                            required
                        />
                        <button className='cursor-pointer flex h-11 w-11 items-center justify-center transition-all ease-in-out duration-100 text-stone-500 rounded-full rounded-s-none border-0 group-focus:text-black'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                className='h-5 fill-stone-500'
                            >
                                <path
                                    d='M23.8.9c-.1-.2-.3-.2-.5-.1L.3 9.6c-.2 0-.3.2-.3.4 0 .1.1.3.2.4l7.1 5.5v3.9c0 .2.1.4.3.5h.2q.2 0 .3-.1l2.6-1.7 6.1 4.7q.2.1.3.1.1 0 .2-.1.2 0 .3-.3L24 1.4c0-.2 0-.4-.2-.5zM8 15.1h-.1l-6.4-4.9 19.9-7.6zm.3 3.8v-2.3l1.6 1.3zm8.6 3-5.7-4.4q-.1-.1-.3-.2l-2.2-1.6L22.5 2.8z'
                                />
                            </svg>
                        </button>
                    </div>
                    <p className='mt-2 text-sm leading-6 text-gray-500 text-right'>
                        We care about your data. Read our <a href='#' className='font-semibold hover:text-orange-500'>
                            privacy&nbsp;policy
                        </a>
                    </p>
                </form>
            </div>
        </section>
    )
}