import cls from './Footer.module.scss';
import { Layout } from '../../shared/layout/Layout';
// import { FooterMenuBlock } from './footerComponents/FooterMenuBlock';
// import { FooterCategoryBlock } from './footerComponents/FooterCategoryBlock';
import { FooterPriceListBlock } from './footerComponents/FooterPriceListBlock';
import { FooterContactsBlock } from './footerComponents/FooterContactsBlock';
import { FooterMainBlock } from './footerComponents/FooterMainBlock';
import { FooterBottom } from './footerComponents/footerBottom';
import { FooterOutside } from './footerComponents/FooterOutside';

export const Footer = () => {
    return (
        <div className={cls.footer}>
            <Layout>
                <div className={cls.footer__wrapper}>
                    <FooterMainBlock />
                    {/* <FooterMenuBlock />
                    <FooterCategoryBlock /> */}
                    <FooterPriceListBlock />
                    <FooterContactsBlock />
                </div>
                {/* <FooterBottom /> */}
                <FooterOutside />
            </Layout>
        </div>
    );
};
