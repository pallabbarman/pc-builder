import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Grid, Layout, Typography, theme } from 'antd';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import Sidebar from './MobileMenu';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    const [open, setOpen] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { lg } = useBreakpoint();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
                {lg ? (
                    <Navbar />
                ) : (
                    <>
                        <Button
                            type="text"
                            icon={
                                open ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={showDrawer}
                            style={{
                                fontSize: '16px',
                                color: 'white',
                            }}
                        />
                    </>
                )}
                <Sidebar open={open} onClose={onClose} />
            </Header>
            <Content>
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
