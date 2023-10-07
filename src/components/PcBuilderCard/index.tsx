import { selectedProducts } from '@/redux/features/pc-builder';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Product } from '@/types/product';
import { Button, Card, ConfigProvider, Rate, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const { Title } = Typography;
const { Meta } = Card;

interface PcBuilderCardProps {
    product: Product;
}

const PcBuilderCard = ({ product }: PcBuilderCardProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const selectedProduct = useAppSelector(
        (state) => state.pcBuilder.productsSelected
    );

    const isSelectedProduct = selectedProduct?.find(
        (p) => p.category === product.category
    );

    const handleSelectedProducts = () => {
        if (!isSelectedProduct) {
            toast.success('Product added to card!');
            dispatch(selectedProducts(product));
            router.push('/pc-builder');
        } else {
            toast.error('You can select only one product from each category!');
            router.push('/pc-builder');
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        actionsLiMargin: '12px',
                    },
                },
            }}
        >
            <Card
                hoverable
                cover={
                    <Image
                        alt={product.name}
                        src={product.image}
                        width={200}
                        height={200}
                        style={{ objectFit: 'cover' }}
                    />
                }
                actions={[
                    <Button
                        type="primary"
                        key="add"
                        block
                        onClick={handleSelectedProducts}
                    >
                        Add
                    </Button>,
                ]}
            >
                <Meta
                    title={product?.name}
                    description={
                        <div
                            style={{
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                            }}
                        >
                            {product.description}
                        </div>
                    }
                />
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
                    <Rate
                        disabled
                        allowHalf
                        defaultValue={product?.avg_rating}
                    />
                </div>
            </Card>
        </ConfigProvider>
    );
};

export default PcBuilderCard;
