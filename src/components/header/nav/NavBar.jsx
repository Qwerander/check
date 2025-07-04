import { useResize } from '../../../hooks/useRessize';
import { Menu } from './menu/Menu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import cls from './navBar.module.scss';

export const NavBar = () => {
    const resize992 = useResize(992);

    return (
        <div className={cls.navBar}>
           {resize992 ? <Menu /> : <MobileMenu />}
        </div>
    );
};
