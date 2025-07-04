import { ReactComponent as VisaSVG } from '../../../assets/icons/visa.svg';
import { ReactComponent as MasterCardSVG } from '../../../assets/icons/masterCard.svg';
import { ReactComponent as MirSVG } from '../../../assets/icons/mir.svg';
import { ReactComponent as EposSVG } from '../../../assets/icons/e-pos-combo.svg';
import cls from './footerBlock.module.scss';
import { useState } from 'react';
import { Modal } from '../../../shared/Modal/Modal';
import { Form } from '../../form/Form';

export const FooterContactsBlock = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <>
            <div className={cls.footer__block}>
                <h2 className={cls.footer__title}>Контакты:</h2>
                <div className={cls.footer__phone}>
                    <a href="tel:+375445551919">+375 (44) 555-19-19</a>
                    <span>время работы: 9:00-20:00</span>
                    <button onClick={() => toggleIsOpen(true)} className={cls.footer__btn}>
                        Задать вопрос
                    </button>
                </div>
                <div className={cls.footer__mail}>
                    <a href="mailto: info@kvant.shop">info@kvant.shop</a>
                    <span>На связи в любое время</span>
                </div>
                <div className={cls.footer__cards}>
                    <VisaSVG />
                    <MasterCardSVG />
                    <a className={cls.footer__pay} href="https://www.tbank.ru/kassa/dev/payments/" target='_blank'>
                        <MirSVG />
                    </a>
                    <a className={cls.footer__pay} href="https://express-pay.by/docs/api/v1#erip_system" target='_blank'>
                        <EposSVG />
                    </a>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={toggleIsOpen}>
                <Form toggleIsOpen={toggleIsOpen} />
            </Modal>
        </>
    );
};
