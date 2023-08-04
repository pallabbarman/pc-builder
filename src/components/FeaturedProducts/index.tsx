import { Col, Grid, Row, Typography } from 'antd';
import ProductCard from '../ProductCard';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const FeaturedProducts = () => {
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
                <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }}>
                    <ProductCard />
                </Col>
            </Row>
        </div>
    );
};

export default FeaturedProducts;
