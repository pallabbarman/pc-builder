import { Button, Col, Grid, Row, Typography } from 'antd';
import Link from 'next/link';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Banner = () => {
    const { md } = useBreakpoint();
    return (
        <Row
            style={{
                backgroundImage: 'url(/banner.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '600px',
                color: 'white',
            }}
            align="middle"
        >
            <Col
                xl={{ span: 15 }}
                style={{
                    padding: md ? '0 50px' : '0 1rem',
                }}
            >
                <div
                    style={{
                        padding: md ? '3rem' : '1rem',
                        background: 'rgb(33 32 32 / 60%)',
                        borderRadius: '10px',
                    }}
                >
                    <Title level={1} style={{ color: 'white' }}>
                        Welcome to PC Builder
                    </Title>
                    <Paragraph style={{ color: 'white' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus laudantium est quas molestiae nihil, eligendi
                        doloribus, enim error sequi quisquam, excepturi
                        provident cum nostrum nemo voluptas vitae necessitatibus
                        voluptatem reprehenderit?
                    </Paragraph>
                    <Link href="/">
                        <Button
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                            }}
                        >
                            PC Builder
                        </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    );
};

export default Banner;
