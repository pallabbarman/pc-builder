import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
interface NavbarProps {
    items: MenuProps['items'];
}

const Navbar = ({ items }: NavbarProps) => {
    const [current, setCurrent] = useState('');
    const router = useRouter();
    const { data: session } = useSession();

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
            style={{ width: session?.user ? '402px' : '361px' }}
        />
    );
};

export default Navbar;
