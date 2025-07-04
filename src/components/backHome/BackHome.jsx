import { Link } from 'react-router-dom';
import cls from './backHome.module.scss';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { Layout } from '../../shared/layout/Layout';

export const BackHome = () => {
    return (
        <div className={cls.backHome}>
            <Layout>
                <Link to={'/'} className={cls.backHome__link}>
                    <ArrowLeft /> вернутся на главную
                </Link>
            </Layout>
        </div>
    );
};
