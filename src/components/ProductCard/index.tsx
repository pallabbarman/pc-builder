import { Card, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;
const { Meta } = Card;

const ProductCard = () => {
    return (
        <Card
            hoverable
            cover={
                <Image
                    alt="example"
                    src="/banner.jpg"
                    width={200}
                    height={200}
                />
            }
        >
            <Meta
                title="Europe Street beat"
                description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}
            >
                <p style={{ margin: 0 }}>Category</p>
                <Title level={5} style={{ margin: 0 }}>
                    $ Price
                </Title>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}
            >
                <p>Status: In stock</p>
                <p>Rating</p>
            </div>
        </Card>
    );
};

export default ProductCard;
