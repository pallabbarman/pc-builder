import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { items } from './NavItems';

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
