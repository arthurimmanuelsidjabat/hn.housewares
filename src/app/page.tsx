/**
 * Homepage
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import Header from './partials/header';
import HomeCTASlider from './banners/home-cta-slider';
import HomeCTAGridBanner from './banners/home-cta-grid-banner';
import ProductBrands from './components/products/brands';
import ProductCategoriesGrid from './components/products/product-categories-grid';
import ShopGrid from './components/products/products';
import SubscribeForm from './components/blog/subscribe-form';
import Blog from './components/blog/blog-grid';
import Perks from './components/perks';
import Footer from './partials/footer';

export default function HamanamiHouseware() {
    return (
        <div
            id='app'
            className='relative overflow-hidden flex flex-col gap-y-6'
        >
            <Header />
                <main
                    id='main'
                    className='flex flex-col gap-y-12'
                >
                    <HomeCTASlider />
                    <HomeCTAGridBanner />
                    <ProductBrands />
                    <ProductCategoriesGrid />
                    <ShopGrid />
                    <SubscribeForm />
                    <Blog />
                    <Perks />
                    <Footer />
                </main>
        </div>
    );
}