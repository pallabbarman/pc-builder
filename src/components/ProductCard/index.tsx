import { Product } from '@/types/product';
import { Card, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;
const { Meta } = Card;

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
                title={product?.product_name}
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
                <p style={{ margin: 0 }}>{product?.category}</p>
                <Title level={5} style={{ margin: 0 }}>
                    $ {product?.price}
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
                <p>Status: {product?.status}</p>
                <p>{product?.rating}</p>
            </div>
        </Card>
    );
};

export default ProductCard;
