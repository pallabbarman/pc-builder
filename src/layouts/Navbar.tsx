import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
    {
        label: <Link href="/">CPU / Processor</Link>,
        key: 'cpu',
    },
    {
        label: <Link href="/">Motherboard</Link>,
        key: 'motherboard',
    },
];

const Navbar = () => {
    return <Menu theme="dark" mode="horizontal" items={items} />;
};

export default Navbar;
