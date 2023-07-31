import { Layout, Typography, theme } from 'antd';
import { ReactNode } from 'react';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Title level={3} style={{ color: 'white', margin: 0 }}>
                    PC Builder
                </Title>
                <Navbar />
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
