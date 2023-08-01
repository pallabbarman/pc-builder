import { Col, Row } from 'antd';

const Banner = () => {
    return (
        <Row
            style={{
                backgroundImage: 'url(/banner.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '600px',
                color: 'white',
            }}
        >
            <Col md={{ span: 12 }}>
                <h1>Welcome To PC Builder</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus laudantium est quas molestiae nihil, eligendi
                    doloribus, enim error sequi quisquam, excepturi provident
                    cum nostrum nemo voluptas vitae necessitatibus voluptatem
                    reprehenderit?
                </p>
            </Col>
        </Row>
    );
};

export default Banner;
