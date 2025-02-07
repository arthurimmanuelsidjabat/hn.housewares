/**
 * Products - Grid
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Cookware Set',
        category: 'Cookware',
        image: '/product-1.webp',
        price: '$56.99',
        regularPrice: '$139.95',
        rating: 4.5,
        badge: { text: 'Best deal', color: 'bg-stone-700' }
    },
    {
        id: 2,
        name: 'Personal Blender®',
        category: 'Appliances',
        image: '/product-2.webp',
        price: '$16.80',
        regularPrice: '$29.95',
        rating: 5
    },
    {
        id: 3,
        name: 'Sillicon Baking Mates',
        category: 'Cookware',
        image: '/product-3.webp',
        price: '$18.99',
        regularPrice: '$22.99',
        rating: 4,
        badge: { text: 'Store pickup', color: 'bg-blue-500' }
    },
    {
        id: 4,
        name: 'Cast Iron Pot',
        category: 'Dinnerware',
        image: '/product-4.webp',
        price: '$38.00',
        regularPrice: '$69.95',
        rating: 5
    },
    {
        id: 5,
        name: 'Complete Stacking Set',
        category: 'Dinnerware',
        image: '/product-5.webp',
        price: '$38.00',
        regularPrice: '$69.95',
        rating: 5
    },
    {
        id: 6,
        name: 'Knife Trio',
        category: 'Knives',
        image: '/product-6.webp',
        price: '$29.00',
        regularPrice: '$69.95',
        rating: 5,
        badge: { text: 'Featured product', color: 'bg-stone-700' }
    },
    {
        id: 7,
        name: 'Beechwood Spoons',
        category: 'Appliances',
        image: '/product-7.webp',
        price: '$21.00',
        regularPrice: '$32.95',
        rating: 4.5
    }
];

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className='flex items-center space-x-0.5'>
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    size={16}
                    className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
            ))}
        </div>
    );
};
  
export default function ShopGrid() {
    return (
        <section
            id='productsGrid'
        >
            <div
                className='relative w-full px-3 mx-auto max-w-screen-xl xl:max-w-screen-2xl'
            >
                <div
                    className='grid grid-cols-2 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 xl:grid-cols-5'
                >
                    {products.slice(0, 2).map((product) => (
                        <div
                            key={product.id}
                            className='rounded-2xl group relative flex flex-col min-w-0 break-words bg-clip-border bg-neutral-100 overflow-hidden'
                        >
                            <div
                                className='relative px-3 pt-3'
                            >
                                <Link
                                    href='#!'
                                    className='after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className='max-w-full rounded-2xl w-full h-auto duration-200 md:group-hover:rounded-none md:group-hover:scale-110'
                                    />
                                </Link>
                                {product.badge && (
                                    <span
                                        className={`absolute top-3 left-2 text-[10px] font-bold tracking-wide leading-none uppercase py-[0.35em] px-[0.65em] rounded text-white ${product.badge.color}`}
                                    >
                                        {product.badge.text}
                                    </span>
                                )}
                            </div>
                            <div
                                className='flex flex-shrink-1 flex-grow-1 basis-auto flex-col gap-1 px-3 pt-4 bg-neutral-100 relative overflow-hidden'
                            >
                                <span
                                    className='text-[10px] font-light uppercase leading-none tracking-widest text-gray-500 block'
                                >
                                    {product.category}
                                </span>
                                <h3
                                    className='text-xs leading-tight line-clamp-2 sm:text-base'
                                >
                                    <Link
                                        href='#'
                                        className='after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                                    >
                                        {product.name}
                                    </Link>
                                </h3>
                            </div>
                            <div
                                className='px-3 pt-2 pb-3 flex flex-col gap-1'
                            >
                                <StarRating
                                    rating={product.rating}
                                />
                                <div
                                    className='flex justify-between items-center'
                                >
                                    <div>
                                        <span
                                            className='text-xs font-bold text-orange-500 sm:text-lg'
                                        >
                                            {product.price}
                                        </span>
                                        <span
                                            className='text-xs text-gray-400 line-through ml-2'
                                        >
                                            {product.regularPrice}
                                        </span>
                                    </div>
                                    <div
                                        className='flex items-center'
                                    >
                                        <span
                                            className='text-[10px] uppercase leading-none font-extrabold text-gray-300'
                                        >
                                            Save<br />${Math.max(
                                                parseFloat(product.regularPrice.replace('$', '').replace(',', '')) - 
                                                parseFloat(product.price.replace('$', '').replace(',', '')),
                                                0
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='relative overflow-hidden bg-purple-50 text-center px-3 py-12 rounded-2xl flex flex-col items-center justify-center min-w-0 break-words bg-clip-border md:col-span-1 xl:col-span-3'>
                        <div className='relative isolate'>
                            <h3 className='text-6xl inline-flex items-center leading-none -tracking-wide font-extrabold sm:text-8xl xl:text-9xl 2xl:text-12xl'>
                                <span
                                    className='text-xs text-orange-500 sm:text-xl 2xl:text-2xl font-bold tracking-widest uppercase sm:inline-block'
                                    style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
                                >
                                    up to
                                </span> 65
                                <span className='flex flex-col items-center'>
                                    <span className='text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-9xl'>
                                        %
                                    </span> 
                                    <span className='text-xs sm:text-2xl xl:text-4xl font-extrabold uppercase tracking-normal'>
                                        off
                                    </span>
                                </span>
                            </h3>
                            <p className='text-xs text-purple-800 uppercase font-extrabold leading-none sm:text-xl md:text-3xl xl:text-4xl 2xl:text-6xl'>
                                Warehouse sale
                            </p>
                        </div>
                    </div>
                    {products.slice(2).map((product) => (
                        <div
                            key={product.id}
                            className='rounded-2xl group relative flex flex-col min-w-0 break-words bg-clip-border bg-neutral-100 overflow-hidden'
                        >
                            <div
                                className='relative px-3 pt-3'
                            >
                                <Link
                                    href='#!'
                                    className='after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className='max-w-full rounded-2xl w-full h-auto duration-200 md:group-hover:rounded-none md:group-hover:scale-110'
                                    />
                                </Link>
                                {product.badge && (
                                    <span
                                        className={`absolute top-3 left-2 text-[10px] font-bold tracking-wide leading-none uppercase py-[0.35em] px-[0.65em] rounded text-white ${product.badge.color}`}
                                    >
                                        {product.badge.text}
                                    </span>
                                )}
                            </div>
                            <div className='flex flex-shrink-1 flex-grow-1 basis-auto flex-col gap-1 px-3 pt-4 bg-neutral-100 relative overflow-hidden'>
                                <span className='text-[10px] font-light uppercase leading-none tracking-widest text-gray-500 block'>
                                    {product.category}
                                </span>
                                <h3 className='text-xs leading-tight line-clamp-2 sm:text-base'>
                                    <Link
                                        href='#'
                                        className='after:absolute after:inset-0 after:z-[1] after:pointer-events-auto after:bg-black/0 after:content-[""]'
                                    >
                                        {product.name}
                                    </Link>
                                </h3>
                            </div>
                            <div className='px-3 pt-2 pb-3 flex flex-col gap-1'>
                                <StarRating rating={product.rating} />
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-xs font-bold text-orange-500 sm:text-lg'>
                                            {product.price}
                                        </span>
                                        <span className='text-xs text-gray-400 line-through ml-2'>
                                            {product.regularPrice}
                                        </span>
                                    </div>
                                    <div
                                        className='flex items-center'
                                    >
                                        <span
                                            className='text-[10px] uppercase leading-none font-extrabold text-gray-300'
                                        >
                                            Save<br />${Math.max(
                                                parseFloat(product.regularPrice.replace('$', '').replace(',', '')) - 
                                                parseFloat(product.price.replace('$', '').replace(',', '')),
                                                0
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}