import { Col, Grid, Row, Typography } from 'antd';

const { Title } = Typography;
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus laudantium est quas molestiae nihil, eligendi
                        doloribus, enim error sequi quisquam, excepturi
                        provident cum nostrum nemo voluptas vitae necessitatibus
                        voluptatem reprehenderit?
                    </p>
                </div>
            </Col>
        </Row>
    );
};

export default Banner;
