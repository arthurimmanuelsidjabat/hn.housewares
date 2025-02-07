/**
 * Site Footer
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import { siteName } from '../siteData';
import menuItems from '../components/product-menu-lists.json';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id='siteFooter' className='border-solid border-t border-t-stone-300'>
            <div className='mx-auto max-w-screen-xl md:px-3 xl:max-w-screen-2xl'>
                <div className='hidden md:grid grid-cols-1 divide-stone-300 sm:grid-cols-3 md:grid-cols-5 md:divide-x'>
                    {menuItems.map((section, index) => (
                        <div key={index} className='p-3 flex flex-col gap-y-4 first:sm:border-l last:sm:border-r sm:border-stone-300'>
                            <h5 className='text-xs font-bold leading-none tracking-widest uppercase'>
                                <Link href={section.category.href}>{section.category.name}</Link>
                            </h5>
                            <ul className='space-y-2 md:space-y-3'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className='text-sm tracking-wide leading-none'>
                                        <Link
                                            href={link.href}
                                            className='text-stone-700 transition-colors ease-in-out duration-100 hover:text-orange-500'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {section.category.name === 'Company' && (
                                <div className='flex items-center space-x-4'>
                                    <Link
                                        href='#'
                                        className='text-stone-700 transition-colors ease-in-out duration-100 hover:text-orange-500'
                                    >
                                        <span className='sr-only'>Facebook</span>
                                        <svg
                                            className='h-6 w-6'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.3 2.6.3v2.9h-1.5c-1.5 0-1.9 1-1.9 1.9v2.3h3.3l-.5 3.5h-2.8V24c5.7-.9 10.1-5.9 10.1-11.9z'
                                            />
                                        </svg>
                                    </Link>
                                    <Link
                                        href='#'
                                        className='text-stone-700 transition-colors ease-in-out duration-100 hover:text-orange-500'
                                    >
                                        <span className='sr-only'>X</span>
                                        <svg
                                            className='h-6 w-6'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
                                        </svg>
                                    </Link>
                                    <Link
                                        href='#'
                                        className='text-stone-700 transition-colors ease-in-out duration-100 hover:text-orange-500'
                                    >
                                        <span className='sr-only'>Instagram</span>
                                        <svg
                                            className='h-6 w-6'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                            {section.category.name === 'Company' && (
                                <div className='inline-block'>
                                    <Link
                                        href='#'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 152 70'
                                            className='h-16'
                                        >
                                            <path
                                                fill='#191919'
                                                d='M40.214 13.19h15.427v2.91h-5.933v15.706h-3.56V16.1h-5.934v-2.91Zm14.537 4.945h2.967v2.618c0-.291.297-.582.593-1.164.297-.581.594-.581.89-.872.297-.291.89-.582 1.187-.582.297-.29.89-.29 1.483-.29h.89v2.908h-1.186c-.594 0-.89 0-1.484.29-.593.291-.89.582-1.186.873-.297.29-.594.873-.89 1.454-.297.582-.297 1.164-.297 2.036v6.4h-2.967V18.134Zm21.954 13.67h-2.967V30.06c-.296.582-.89 1.163-1.78 1.745-.593.291-1.483.582-2.373.582-1.78 0-2.967-.291-3.857-1.454-.89-1.164-1.186-2.327-1.186-4.072v-8.435h2.966v8.144c0 1.163.297 2.036.594 2.617.593.582 1.186.873 2.076.873.594 0 1.187 0 1.484-.29.296-.292.89-.583.89-.873.296-.291.593-.582.593-1.164s.297-.872.297-1.454v-7.853h2.966v13.38h.297Zm5.043-4.363c0 .873.297 1.455.89 1.745.594.291 1.187.582 2.077.582h.89c.297 0 .593 0 .89-.29.297 0 .593-.292.89-.582.297-.291.297-.582.297-.873 0-.29-.297-.582-.297-.873-.297-.29-.593-.29-.89-.581-.297 0-.89-.291-1.483-.291-.594 0-1.187-.291-1.484-.291-.593 0-1.186-.29-1.483-.582-.297-.29-.89-.29-1.483-.581-.297-.291-.89-.582-.89-1.164-.297-.582-.297-1.163-.297-1.745 0-.872.297-1.454.593-1.745.297-.29.89-.873 1.484-1.163.593-.291 1.186-.582 1.78-.582.593 0 1.483-.291 2.076-.291.594 0 1.484 0 2.077.29.593 0 1.187.292 1.78.582.594.291.89.873 1.187 1.164.297.582.593 1.163.593 2.036h-3.263c0-.582-.594-1.163-.89-1.454-.89-.291-1.484-.582-2.077-.582h-.89c-.297 0-.593 0-.89.29-.297 0-.593.292-.593.292-.297.29-.297.29-.297.581s0 .582.297.873c.296.29.593.29.89.582.296 0 .89.29 1.483.29.593 0 1.187.291 1.78.291s1.187.291 1.483.582c.594.29.89.29 1.484.582.593.29.89.582.89 1.163.297.582.297.873.297 1.745 0 .873-.297 1.455-.594 2.036-.296.582-.89.873-1.483 1.455-.297.581-.89.872-1.484.872-.593 0-1.483.291-2.076.291-.89 0-1.78 0-2.374-.29-.593-.292-1.483-.583-1.78-.873-.593-.291-.89-.873-1.186-1.455-.594-.581-.89-1.163-.89-2.036h2.966Zm10.087-9.307h2.374v-3.781h2.966v4.072h2.67v2.327h-2.67v8.144c0 .29 0 .29.297.581l.297.291h2.076v2.036h-1.78c-.89 0-1.483 0-1.78-.29-.593 0-.89-.292-1.186-.582-.297-.291-.594-.582-.594-1.164 0-.29-.296-.872-.296-1.454v-7.853h-2.374v-2.327Zm10.087 0h2.967v2.036c.297-.873.89-1.454 1.78-1.745.89-.291 1.483-.582 2.373-.582 1.187 0 2.077.291 2.967.582.89.29 1.483.872 2.077 1.454.593.582.89 1.454 1.186 2.327.297.872.297 1.745.297 2.909 0 .872 0 1.745-.297 2.617-.296.873-.593 1.454-1.186 2.327-.594.582-1.187 1.163-1.78 1.454-.89.291-1.484.582-2.67.582h-1.187c-.297 0-.89-.29-1.187-.29-.296-.292-.89-.292-1.186-.583l-.89-.872v6.69h-2.967V18.135h-.297Zm10.68 6.98c0-.581 0-1.163-.296-1.745-.297-.581-.297-1.163-.594-1.454-.296-.29-.593-.872-1.186-1.163-.594-.291-.89-.291-1.78-.291-1.187 0-2.374.29-2.967 1.163-.594.873-.89 2.036-.89 3.49 0 .582 0 1.455.297 1.746.296.581.296 1.163.89 1.454.296.29.593.872 1.186.872.594.291.89.291 1.484.291.593 0 1.186 0 1.78-.29.593-.291.89-.582 1.186-1.164.297-.582.594-.873.594-1.454 0-.291.296-.873.296-1.454Zm5.34-11.925h2.967v2.91h-2.967v-2.91Zm0 4.945h2.967v13.67h-2.967v-13.67Zm5.637-4.945h2.967v18.615h-2.967V13.19Zm12.164 18.906c-1.187 0-2.077-.29-2.967-.582-.89-.29-1.483-.872-2.077-1.454-.593-.582-1.186-1.454-1.483-2.327-.297-.872-.593-1.745-.593-2.908 0-1.164.296-2.036.593-2.909.297-.872.89-1.745 1.483-2.327.594-.581 1.187-1.163 2.077-1.454.89-.29 1.78-.582 2.967-.582 1.186 0 2.076.291 2.966.582.89.29 1.484.872 2.077 1.454s1.187 1.455 1.483 2.327c.297.873.594 1.745.594 2.909 0 1.163-.297 2.036-.594 2.908-.296.873-.89 1.745-1.483 2.327-.593.582-1.187 1.163-2.077 1.454-.89.291-1.78.582-2.966.582Zm0-2.327c.593 0 1.186 0 1.78-.29.593-.292.89-.582 1.186-1.164.297-.582.594-.873.594-1.454 0-.582.296-1.164.296-1.745 0-.582 0-1.164-.296-1.746 0-.581-.297-1.163-.594-1.454-.296-.29-.593-.872-1.186-1.163-.594-.291-1.187-.291-1.78-.291-.594 0-1.187 0-1.78.29-.594.292-.89.582-1.187 1.164-.297.582-.593.873-.593 1.454 0 .582-.297 1.164-.297 1.745 0 .582 0 1.164.297 1.746 0 .581.296 1.163.593 1.454.297.582.593.872 1.187 1.163.593 0 1.186.291 1.78.291Zm8.01-11.634h2.373v-3.781h2.967v4.072h2.67v2.327h-2.67v8.144c0 .29 0 .29.297.581l.296.291h2.077v2.036h-1.78c-.89 0-1.483 0-1.78-.29-.593 0-.89-.292-1.187-.582-.296-.291-.593-.582-.593-1.164 0-.29-.297-.872-.297-1.454v-7.853h-2.373v-2.327Z'
                                            />
                                            <path
                                                fill='#00B67A'
                                                d='M36.654 13.19H22.711L18.557.103l-4.45 13.088H.46l10.977 7.854-4.153 13.088 11.273-8.144 10.977 8.144-4.153-13.088 11.273-7.854Z'
                                            />
                                            <path fill='#005128' d='m26.27 23.952-.89-2.909-6.823 4.945 7.714-2.036Z' />
                                            <path
                                                fill='#00B67A'
                                                d='M28.94 42.276H.46v27.922h28.48V42.276Zm30.558 0h-28.48v27.922h28.48V42.276Zm30.854 0h-28.48v27.922h28.48V42.276Zm30.557 0h-28.48v27.922h28.48V42.276Z'
                                            />
                                            <path
                                                className='fill-stone-100' d='M151.763 42.276h-28.481v27.922h28.481V42.276Z' 
                                            />
                                            <path
                                                fill='#00b67a'
                                                d='M123.282 42.276h14.241v27.632h-14.241V42.276Z'
                                            />
                                            <path
                                                className='fill-white'
                                                d='m14.404 60.89 4.45-1.163 1.78 5.527-6.23-4.363Zm10.087-6.98h-7.714l-2.373-6.98-2.373 6.98H4.614l6.23 4.363-2.373 6.98 6.23-4.362 3.856-2.618 5.934-4.363Zm20.767 6.98 4.45-1.163 1.78 5.527-6.23-4.363Zm9.79-6.98h-7.714l-2.373-6.98-2.373 6.98h-7.714l6.23 4.363-2.373 6.98 6.23-4.362 3.857-2.618 6.23-4.363Zm21.064 6.98 4.45-1.163 1.78 5.527-6.23-4.363Zm9.79-6.98h-7.714l-2.373-6.98-2.373 6.98h-7.714l6.23 4.363-2.076 6.98 6.23-4.362 3.856-2.618 5.934-4.363Zm20.767 6.98 4.45-1.163 1.78 5.527-6.23-4.363Zm10.087-6.98h-7.714l-2.373-6.98-2.374 6.98h-7.713l6.23 4.363-2.373 6.98 6.23-4.362 3.857-2.618 6.23-4.363Zm20.767 6.98 4.45-1.163 1.78 5.527-6.23-4.363Zm9.79-6.98h-7.714l-2.373-6.98-2.077 6.98h-7.713l6.23 4.363-2.373 6.98 6.23-4.362 3.856-2.618 5.934-4.363Z'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='md:hidden divide-y divide-stone-300'>
                    {menuItems.map((section, index) => (
                        <details key={index} className='group cursor-pointer'>
                            <summary className='flex list-none items-center justify-between px-3 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden'>
                                <span className='text-left text-lg'>{section.category.name}</span>
                                <div className='text-black'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='block h-5 w-5 transition-all duration-300 group-open:rotate-180'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                        />
                                    </svg>
                                </div>
                            </summary>
                            <ul className='px-3 pb-4 space-y-2 text-left'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className='text-sm tracking-wide leading-none'>
                                        <Link
                                            href={link.href}
                                            className='text-stone-700 transition-colors ease-in-out duration-100 hover:text-orange-500'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ))}
                </div>
                <div
                    className='border-t border-stone-300 p-3 flex flex-col gap-y-2 md:border-x'
                >
                    <p
                        className='text-orange-500 leading-none font-semibold text-sm'
                    >
                        {`${siteName}`}: Your Ultimate Home Housewares & Kitchen Supply Shop
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        {`${siteName}`} stands as a beacon for those seeking premium house kitchen ware and home housewares, 
                        offering an extensive range of products that blend functionality with style. As a leading kitchen supply store, 
                        we pride ourselves on providing everything from essential cookware to decorative kitchen accessories, 
                        making us the ultimate kitchen boutique for home chefs and decor enthusiasts alike.
                    </p>
                    <p
                        className='text-orange-500 leading-none font-semibold text-sm'
                    >
                        Your One-Stop Kitchen Supply Shop
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        Our kitchen supply shop caters to all culinary needs, featuring a vast selection of kitchenware from top brands. 
                        Whether you&#39;re renovating your kitchen or simply looking to update your cooking tools, {`${siteName}`} offers quality and 
                        variety in one convenient location. Our online kitchen outlet store allows you to shop for kitchenware, accessories, and 
                        decor from the comfort of your home, with a collection that&#39;s continuously updated to reflect the latest trends and 
                        innovations.
                    </p>
                    <p
                        className='text-orange-500 leading-none font-semibold text-sm'
                    >
                        Elevate Your Cooking Experience with Home Kitchen Accessories
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        At {`${siteName}`}, we understand that the right kitchen accessories can transform cooking from a daily chore into a 
                        delightful experience. From innovative gadgets to stylish utensils, our range of home kitchen accessories is designed to 
                        enhance your culinary skills and kitchen aesthetics.
                    </p>
                    <p
                        className='text-stone-600 font-bold leading-none text-sm'
                    >
                        Shop the Latest Kitchen Collection Online
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        Our kitchen collection shop online features an array of products carefully selected for their quality and performance. 
                        With everything from cookware to kitchen decor stores included in our catalogue, you&#39;ll find the perfect items to 
                        complement your kitchen&#39;s theme and functionality.
                    </p>
                    <p
                        className='text-stone-600 font-bold leading-none text-sm'
                    >
                        Why Choose {`${siteName}`} for Your Kitchen Needs?
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        Choosing {`${siteName}`} means opting for a retailer that values quality, variety, and customer satisfaction. 
                        Our kitchen boutique is dedicated to offering the best in kitchenware and home accessories, ensuring you have access to 
                        the tools and decor that align with your cooking and styling preferences.
                    </p>
                    <p
                        className='text-stone-600 leading-4 text-sm'
                    >
                        Explore the world of kitchen and home essentials at {`${siteName}`}, where you&#39;ll discover a curated selection of house 
                        kitchen ware that combines quality, functionality, and aesthetic appeal. Whether you&#39;re a culinary enthusiast or simply 
                        looking to enhance your home&#39;s charm, {`${siteName}`} is your premier destination for kitchen and housewares that inspire 
                        and delight.
                    </p>
                </div>
            </div>
            <div className='border-t border-stone-300 py-4 md:px-3'>
                <div className='mx-auto px-3 max-w-screen-xl xl:max-w-screen-2xl'>
                    <p className='text-sm font-light tracking-wide'>
                        &copy; 2025 <span
                                className='font-medium'
                            >
                                    {`${siteName}`}
                            </span> <svg
                                className='h-4 inline-block'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill='#e02d2d'
                                    d='M21.7 6.4V4.2h-2V1.9H15v2.3h-2.1v2.2h-1.8V4.2H9V1.9H4.3v2.3H2.2v2.2H.4v4.5h1.8v2.2H4v2.2h1.8v2.3h2v2.2h2.4V22h3.6v-2.2h2.3v-2.2h2.1v-2.3H20v-2.2h1.7v-2.2h1.9V6.4z'
                                />
                            </svg> Arthur 
                        Immanuel Sidjabat
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
