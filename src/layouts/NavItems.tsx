import type { MenuProps } from 'antd';
import Link from 'next/link';

export const items: MenuProps['items'] = [
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
