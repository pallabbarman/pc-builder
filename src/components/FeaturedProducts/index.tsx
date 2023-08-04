import { Product } from '@/types/product';
import { Col, Grid, Row, Typography } from 'antd';
import ProductCard from '../ProductCard';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface FeaturedProductsProps {
    products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    const { md } = useBreakpoint();
    return (
        <div style={{ padding: md ? '3rem 50px' : '2rem 1rem' }}>
            <Title
                level={md ? 2 : 4}
                style={{ textAlign: 'center', fontWeight: 'bold' }}
            >
                Featured Products
            </Title>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Check & Get Your Desired Product!
            </p>
            <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
                {products.map((product) => (
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

export default FeaturedProducts;
