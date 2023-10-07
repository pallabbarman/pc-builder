import PcBuilderTable from '@/components/PcBuilderTable';
import RootLayout from '@/layouts/RootLayout';
import { getAllCategories } from '@/redux/features/categories';
import { useAppDispatch } from '@/redux/hooks';
import { Category } from '@/types/category';
import { Grid } from 'antd';
import { GetStaticProps } from 'next';
import { ReactElement, useEffect } from 'react';

const { useBreakpoint } = Grid;

export interface PcBuilderProps {
    categories: Category[];
}

const PcBuilder = ({ categories }: PcBuilderProps) => {
    const { md } = useBreakpoint();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories(categories));
    }, [categories, dispatch]);

    return (
        <div
            style={{
                padding: md ? '3rem 50px' : '2rem 1rem',
                overflowX: 'auto',
            }}
        >
            <PcBuilderTable categories={categories} />
        </div>
    );
};

PcBuilder.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps: GetStaticProps<PcBuilderProps> = async () => {
    const baseUrl = process.env.BASE_URL;

    const categoriesResponse = await fetch(`${baseUrl}/api/categories`);
    const categories = await categoriesResponse.json();

    return { props: { categories } };
};

export default PcBuilder;
