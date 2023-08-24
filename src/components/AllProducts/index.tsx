import { Product } from '@/types/product';
import { Col, Grid, Row } from 'antd';
import FeaturedTitle from '../FeaturedTitle';
import ProductCard from '../ProductCard';

const { useBreakpoint } = Grid;

interface AllProductsProps {
    products: Product[];
}

const AllProducts = ({ products }: AllProductsProps) => {
    const { md } = useBreakpoint();

    return (
        <div style={{ padding: md ? '3rem 50px' : '2rem 1rem' }}>
            <FeaturedTitle
                title="All Products"
                description="Check Out All PC Building Components!"
            />
            <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
                {products?.map((product) => (
                    <Col
                        xxl={{ span: 4 }}
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

export default AllProducts;
