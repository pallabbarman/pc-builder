import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const items: MenuProps['items'] = [
    {
        label: <Link href="/">Home</Link>,
        key: 'home',
    },
    {
        label: 'Categories',
        key: 'categories',
        children: [
            {
                label: <Link href="/">CPU / Processor</Link>,
                key: 'cpu',
            },
            {
                label: <Link href="/">Motherboard</Link>,
                key: 'motherboard',
            },
        ],
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

const Navbar = () => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            theme="dark"
            mode="horizontal"
            items={items}
        />
    );
};

export default Navbar;
