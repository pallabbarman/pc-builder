import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { items } from './NavItems';

const Navbar = () => {
    const [current, setCurrent] = useState('');
    const router = useRouter();

    useEffect(() => {
        const pathname = router.pathname;
        const lastSlashIndex = pathname.lastIndexOf('/');
        setCurrent(pathname.substring(lastSlashIndex + 1));
    }, [router.pathname]);

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
