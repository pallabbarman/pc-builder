import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import RootLayout from '@/layouts/RootLayout';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import Head from 'next/head';
import type { ReactElement } from 'react';

export interface HomeProps {
    products: Product[];
    categories: Category[];
}

const Home = ({ products }: HomeProps) => {
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
            <FeaturedProducts products={products} />
        </>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout categories={page.props.categories}>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const productResponse = await fetch(`${process.env.BASE_URL}/api/products`);
    const products = await productResponse.json();

    const categoriesResponse = await fetch(
        `${process.env.BASE_URL}/api/categories`
    );
    const categories = await categoriesResponse.json();

    return { props: { products, categories } };
};

export default Home;
