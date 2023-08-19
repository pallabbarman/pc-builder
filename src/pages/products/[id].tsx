import RootLayout from '@/layouts/RootLayout';
import { getAllCategories } from '@/redux/features/categories';
import { useAppDispatch } from '@/redux/hooks';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Col, Grid, Rate, Row, Typography } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactElement, useEffect } from 'react';

const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

interface ProductDetailsProps {
    product: Product;
    categories: Category[];
}

const ProductDetails = ({ product, categories }: ProductDetailsProps) => {
    const { md, lg } = useBreakpoint();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories(categories));
    }, [categories, dispatch]);

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '2rem 1rem',
            }}
        >
            <Row
                gutter={[24, 24]}
                style={{ marginTop: '2rem' }}
                justify="center"
                align="middle"
            >
                <Col
                    md={{ span: 12 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        src={product?.image}
                        loading="lazy"
                        alt={product?.name}
                        width={lg ? 400 : 300}
                        height={lg ? 400 : 300}
                    />
                </Col>
                <Col md={{ span: 12 }}>
                    <Title level={lg ? 1 : 3}>{product?.name}</Title>
                    <Title level={3}>Price: {product?.price}$</Title>
                    <Paragraph>Description: {product?.description}</Paragraph>
                    <Title level={5} style={{ marginTop: 0 }}>
                        Category: {product?.category}
                    </Title>
                    {product?.key_features.map((feature) => (
                        <Title level={5} key={feature} style={{ marginTop: 0 }}>
                            {feature}
                        </Title>
                    ))}
                    <Title level={5} style={{ marginTop: 0 }}>
                        Status: {product?.status}
                    </Title>
                    <Rate
                        disabled
                        allowHalf
                        defaultValue={product?.avg_rating}
                    />
                </Col>
            </Row>
        </div>
    );
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const baseUrl = process.env.BASE_URL;
    const productResponse = await fetch(`${baseUrl}/api/products`);
    const products = await productResponse.json();

    return {
        paths: products?.map((product: Product) => ({
            params: {
                id: product?._id,
            },
        })),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async ({
    params,
}) => {
    const baseUrl = process.env.BASE_URL;
    const productResponse = await fetch(
        `${baseUrl}/api/products/${params?.id}`
    );
    const product = await productResponse.json();

    const categoriesResponse = await fetch(`${baseUrl}/api/categories`);
    const categories = await categoriesResponse.json();

    return { props: { product, categories } };
};

export default ProductDetails;
