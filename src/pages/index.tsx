import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import RootLayout from '@/layouts/RootLayout';
import Head from 'next/head';
import type { ReactElement } from 'react';
export default function Home() {
    return (
        <>
            <Head>
                <title>PC Builder</title>
                <meta
                    name="description"
                    content="This is PC Builder web application"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <FeaturedProducts />
        </>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};
