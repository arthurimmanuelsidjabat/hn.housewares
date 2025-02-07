/**
 * App Layout
 * @package Hamanami
 * @author Arthur Immanuel
 * @license MIT
 */
import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { siteName } from './siteData';
import { separator } from './siteData';
import { siteDescription } from './siteData';
import { siteMetaDescription } from './siteData';
import noiseBg from '../../public/noise.webp';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: `${siteName} ${separator} ${siteDescription}`,
    description: siteMetaDescription,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name="apple-mobile-web-app-title" content="Hamanami Houseware"
                />
            </head>
            <body
                className={
                    `${interSans.variable} ${geistMono.variable} h-full relative text-gray-950 antialiased bg-stone-100`
                }
            >
                <div
                    className="absolute inset-0 w-full h-full bg-repeat"
                    style={{ backgroundImage: `url(${noiseBg.src})` }}
                ></div>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}