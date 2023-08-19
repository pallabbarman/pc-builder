import ProductCard from '@/components/ProductCard';
import RootLayout from '@/layouts/RootLayout';
import { getAllCategories } from '@/redux/features/categories';
import { useAppDispatch } from '@/redux/hooks';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Col, Grid, Row, Typography } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement, useEffect } from 'react';

const { useBreakpoint } = Grid;
const { Title } = Typography;

interface ProductCategoryProps {
    products: Product[];
    categories: Category[];
}

const ProductCategory = ({ products, categories }: ProductCategoryProps) => {
    const { md } = useBreakpoint();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories(categories));
    }, [categories, dispatch]);

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '2rem 1rem',
                minHeight: '100vh',
            }}
        >
            {products?.length === 0 && (
                <Title level={md ? 1 : 4} style={{ textAlign: 'center' }}>
                    No Data Found!
                </Title>
            )}
            <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
                {products?.map((product) => (
                    <Col
                        xl={{ span: 6 }}
                        lg={{ span: 8 }}
                        md={{ span: 12 }}
                        key={product._id}
                    >
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

ProductCategory.getLayout = function getLayout(page: ReactElement) {
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

export const getStaticProps: GetStaticProps<ProductCategoryProps> = async ({
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

export default ProductCategory;
