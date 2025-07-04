import { NavLink } from 'react-router-dom';
import cls from './footerBlock.module.scss';

export const FooterCategoryBlock = () => {
    return (
        <div className={cls.footer__block}>
            <h2 className={cls.footer__title}>Категории:</h2>
            <NavLink to={'/'} className={cls.footer__link}>
                Бытовая химия
            </NavLink>
            <NavLink to={'/'} className={cls.footer__link}>
                Косметика и гигиена
            </NavLink>
            <NavLink to={'/'} className={cls.footer__link}>
                Товары для дома
            </NavLink>
            <NavLink to={'/'} className={cls.footer__link}>
                Товары для детей и мам
            </NavLink>
            <NavLink to={'/'} className={cls.footer__link}>
                Посуда
            </NavLink>
        </div>
    );
};
