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
                    alt={product.name}
                    src={product.image}
                    width={200}
                    height={200}
                />
            }
        >
            <Meta title={product?.name} description={product.description} />
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
                <p>{product?.avg_rating}</p>
            </div>
        </Card>
    );
};

export default ProductCard;
