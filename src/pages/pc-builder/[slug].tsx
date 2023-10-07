import PcBuilderCard from '@/components/PcBuilderCard';
import RootLayout from '@/layouts/RootLayout';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Col, Grid, Row } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';

const { useBreakpoint } = Grid;

interface PcBuilderProductsProps {
    products: Product[];
    categories: Category[];
}

const PcBuilderProducts = ({ products }: PcBuilderProductsProps) => {
    const { md } = useBreakpoint();

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '2rem 1rem',
            }}
        >
            <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
                {products?.map((product) => (
                    <Col
                        xl={{ span: 6 }}
                        lg={{ span: 8 }}
                        md={{ span: 12 }}
                        key={product._id}
                    >
                        <PcBuilderCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

PcBuilderProducts.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const baseUrl = process.env.BASE_URL;
    const categoriesResponse = await fetch(`${baseUrl}/api/categories`);
    const categories = await categoriesResponse.json();

    return {
        paths: categories?.map((category: Category) => ({
            params: {
                slug: category.url,
            },
        })),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<PcBuilderProductsProps> = async ({
    params,
}) => {
    const baseUrl = process.env.BASE_URL;
    const productResponse = await fetch(
        `${baseUrl}/api/categories/products?category=${params?.slug}`
    );
    const products = await productResponse.json();

    const categoriesResponse = await fetch(`${baseUrl}/api/categories`);
    const categories = await categoriesResponse.json();

    return { props: { products, categories } };
};

export default PcBuilderProducts;
