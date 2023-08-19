import { Product } from '@/types/product';
import { Card, Rate, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Title } = Typography;
const { Meta } = Card;

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Link href={`/products/${product._id}`}>
            <Card
                hoverable
                style={{ maxWidth: '320px' }}
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
                    <p style={{ margin: 0 }}>Category: {product?.category}</p>
                    <Title level={5} style={{ margin: 0 }}>
                        Price: $ {product?.price}
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
                    <Rate disabled defaultValue={product.avg_rating} />
                </div>
            </Card>
        </Link>
    );
};

export default ProductCard;
