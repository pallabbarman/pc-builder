import { clearProduct, deleteProduct } from '@/redux/features/pc-builder';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface PcBuilderTableProps {
    categories: Category[];
}

const PcBuilderTable = ({ categories }: PcBuilderTableProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const selectedProducts = useAppSelector(
        (state) => state.pcBuilder.productsSelected
    );
    const isBtnDisable = selectedProducts?.length !== categories.length;

    const calculateTotalPrice = (selectedProducts: Product[] | undefined) => {
        return selectedProducts?.reduce(
            (total, product) => total + Number(product.price),
            0
        );
    };

    const totalPrice = calculateTotalPrice(selectedProducts);

    return (
        <table className="builder-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {categories?.map((category) => {
                    const selectedProduct: Product | undefined =
                        selectedProducts?.find(
                            (product) => product.category === category.key
                        );
                    return (
                        <tr key={category.key}>
                            <td>
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={50}
                                    height={50}
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                            </td>
                            <td>{category.name}</td>
                            <td>
                                {selectedProduct ? selectedProduct.name : 'N/A'}
                            </td>
                            <td>
                                {selectedProduct
                                    ? selectedProduct.price
                                    : 'N/A'}
                            </td>
                            <td>
                                <Link href={`/pc-builder/${category.url}`}>
                                    <Button type="primary">Choose</Button>
                                </Link>{' '}
                                {selectedProduct ? (
                                    <Button
                                        icon={<DeleteOutlined />}
                                        onClick={() => {
                                            dispatch(
                                                deleteProduct(
                                                    selectedProduct._id
                                                )
                                            );
                                            toast.error(
                                                'Product deleted from cart!'
                                            );
                                        }}
                                        danger
                                    />
                                ) : null}
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Total: {totalPrice?.toFixed(2)}</td>
                    <td>
                        <Button
                            disabled={isBtnDisable}
                            onClick={() => {
                                toast.success('Your PC build is completed!');
                                dispatch(clearProduct());
                                router.push('/');
                            }}
                        >
                            Complete Build
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default PcBuilderTable;
