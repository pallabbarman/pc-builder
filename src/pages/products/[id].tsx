import RootLayout from '@/layouts/RootLayout';
import { Product } from '@/types/product';
import { Col, Grid, Rate, Row, Typography } from 'antd';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';

const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const { md, lg } = useBreakpoint();

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
                    <Title level={5}>Category: {product?.category}</Title>
                    <Title level={5}>Status: {product?.status}</Title>
                    <Rate disabled defaultValue={product?.avg_rating} />
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

    return { props: { product } };
};

export default ProductDetails;
