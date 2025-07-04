import cls from './footerBlock.module.scss';
import { NavLink } from 'react-router-dom';

export const FooterMenuBlock = () => {
    return (
        <div className={cls.footer__block}>
            <nav className={cls.footer__menu}>
                <NavLink to="/politics" className={cls.footer__link}>Политика конфиденциальности</NavLink>
                <NavLink to="/risk" className={cls.footer__link}>Уведомление о рисках</NavLink>
                <NavLink to="/oferta" className={cls.footer__link}>Публичнапя оферта</NavLink>
                <NavLink to="/parthner" className={cls.footer__link}>Соглашение по партнерке</NavLink>
            </nav>
        </div>
    );
};
