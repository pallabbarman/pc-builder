import { Grid, Typography } from 'antd';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface FeaturedTitleProps {
    title: string;
    description: string;
}

const FeaturedTitle = ({ title, description }: FeaturedTitleProps) => {
    const { md } = useBreakpoint();

    return (
        <>
            <Title
                level={md ? 2 : 4}
                style={{ textAlign: 'center', fontWeight: 'bold' }}
            >
                {title}
            </Title>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {description}
            </p>
        </>
    );
};

export default FeaturedTitle;
