import cls from './footerBlock.module.scss';
// import { ReactComponent as FooterLogo } from '../../../img/logo/logo-light.svg';
import { ReactComponent as FooterLogo } from '../../../img/logo/logo-kvant-shop.svg';
import { FooterMenuBlock } from './FooterMenuBlock';

export const FooterBottom = () => {
    return (
        <div className={cls.footer__bottom}>
            {/* <FooterLogo /> */}
            <FooterMenuBlock />
        </div>
    );
};
