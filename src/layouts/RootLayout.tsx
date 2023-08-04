import { useAppSelector } from '@/redux/hooks';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
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
    const { categories } = useAppSelector((state) => state.categories);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const items: MenuProps['items'] = [
        {
            label: <Link href="/">Home</Link>,
            key: '',
        },
        {
            label: 'Categories',
            key: 'categories',
            children: categories?.map((category) => ({
                label: (
                    <Link href={`/category/${category.url}`}>
                        {category.name}
                    </Link>
                ),
                key: category.key,
            })),
        },
        {
            label: <Link href="/">PC Builder</Link>,
            key: 'pc-builder',
        },
        {
            label: <Link href="/signin">SignIn</Link>,
            key: 'signin',
        },
    ];

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                }}
            >
                <Link href="/">
                    <Title level={3} style={{ color: 'white', margin: 0 }}>
                        PC Builder
                    </Title>
                </Link>
                {lg ? (
                    <Navbar items={items} />
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
                <Sidebar open={open} onClose={onClose} items={items} />
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
