import type { MenuProps } from 'antd';
import { Drawer, Menu } from 'antd';
import { useState } from 'react';
import { items } from './NavItems';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Drawer
            title="PC Builder"
            placement="left"
            onClose={onClose}
            open={open}
            width={280}
        >
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </Drawer>
    );
};

export default Sidebar;
