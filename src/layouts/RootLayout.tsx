import { Grid, Layout, Typography, theme } from 'antd';
import Link from 'next/link';
import { ReactNode } from 'react';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { lg } = useBreakpoint();

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Link href="/">
                    <Title level={3} style={{ color: 'white', margin: 0 }}>
                        PC Builder
                    </Title>
                </Link>
                {lg && <Navbar />}
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div
                    className="site-layout-content"
                    style={{ background: colorBgContainer }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                PC Builder ©2023 Created by PC Nerd
            </Footer>
        </Layout>
    );
};

export default RootLayout;
