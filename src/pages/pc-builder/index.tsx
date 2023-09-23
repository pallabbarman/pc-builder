import RootLayout from '@/layouts/RootLayout';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Button, Grid, Table } from 'antd';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

const { useBreakpoint } = Grid;

export interface PcBuilderProps {
    products: Product[];
    categories: Category[];
}

const columns = [
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image: any) => (
            <Image
                src={`${image}`}
                alt=""
                width={60}
                height={60}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
        ),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        dataIndex: 'url',
        key: 'url',
        render: (url: string) => (
            <Link href={`/pc-builder/${url}`}>
                <Button type="primary">Choose</Button>
            </Link>
        ),
    },
];

const PcBuilder = ({ categories }: PcBuilderProps) => {
    const { md } = useBreakpoint();

    console.log(categories);

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '2rem 1rem',
            }}
        >
            <Table
                dataSource={categories}
                columns={columns}
                pagination={false}
            />
        </div>
    );
};

PcBuilder.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps: GetStaticProps<PcBuilderProps> = async () => {
    const baseUrl = process.env.BASE_URL;
    const productResponse = await fetch(`${baseUrl}/api/products`);
    const products = await productResponse.json();

    const categoriesResponse = await fetch(`${baseUrl}/api/categories`);
    const categories = await categoriesResponse.json();

    return { props: { products, categories } };
};

export default PcBuilder;
