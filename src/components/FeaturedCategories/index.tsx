import { useAppSelector } from '@/redux/hooks';
import { Card, Col, Grid, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedTitle from '../FeaturedTitle';

const { useBreakpoint } = Grid;
const { Meta } = Card;

const FeaturedCategories = () => {
    const { md } = useBreakpoint();
    const { categories } = useAppSelector((state) => state.categories);

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '0 1rem',
            }}
        >
            <FeaturedTitle
                title="Featured Categories"
                description="Get Your Desired Product from Featured Category!"
            />
            <Row
                gutter={[24, 24]}
                style={{ marginTop: '2rem' }}
                justify="center"
            >
                {categories?.map((category) => (
                    <Col key={category.key}>
                        <Link href={`/category/${category.url}`}>
                            <Card
                                hoverable
                                style={{ width: 150 }}
                                bodyStyle={{ padding: '1rem' }}
                                cover={
                                    <Image
                                        alt={category.name}
                                        src={category.image}
                                        width={120}
                                        height={120}
                                    />
                                }
                            >
                                <p style={{ textAlign: 'center' }}>
                                    {category.name}
                                </p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeaturedCategories;
