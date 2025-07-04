import { NavLink } from 'react-router-dom';
import cls from './form.module.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Modal } from '../../shared/Modal/Modal';
import { ThankYouBox } from '../thankYouBox/ThankYouBox';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
// import ReactInputMask from 'react-input-mask';

export const Form = ({ toggleIsOpen, onClose}) => {
    const [isOpenThanks, toggleIsOpenThanks] = useState(false);
    // const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [checkBox, toggleCheckbox] = useState(false);
    const [error, setError] = useState(false);
    const phoneRegExp = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        // e.preventDefault();

        // if (email && checkBox && emailRegex.test(email)) {
        //     // Получите значения полей формы
        //     const data = { email, name, message };

        //     // Замените 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' на ваши значения из EmailJS
        //     emailjs
        //         .send('service_2gn2q3q', 'template_dq42u02', data, 'ONIBtbVK1DV-Mnxow')
        //         .then((response) => {
        //             console.log('Успешно отправлено', response);
        //         })
        //         .catch((error) => {
        //             console.error('Ошибка при отправке', error);
        //         });

        //     toggleIsOpenThanks(true);
        //     toggleIsOpen(false);
        // } else {
        //     setError(true);
        // }
    };

    return (
        <>
            <div className={cls.form}>
                {onClose ? <CloseSVG className={cls.form__close} onClick={onClose}/> : null}
                <h4 className={cls.form__title}>Свяжемся и уточним все детали</h4>
                <p className={cls.form__descr}>
                    Оставьте свои контакты, мы ответим в ближайшее время
                </p>
                <form className={cls.form__form} onSubmit={handleSubmit}>
                    {/* <label className={cls.form__label}>
                        <span>
                            Номер телефона <span>*</span>
                        </span>
                        <ReactInputMask
                            onChange={(e) => {
                                setError(false);
                                setPhone(e.target.value);
                            }}
                            className={cls.form__input}
                            mask={'+7 (999) 999-99-99'}
                            inputMode="numeric"
                            placeholder={'+7 (___) - ___ - __ - __'}
                            id={name}
                            type="tel"
                            maskChar={''}
                        />
                        {error && !phoneRegExp.test(phone) ? <span className={cls.error}>Введите корректный номер</span> : '' }
                    </label> */}
                    <label className={cls.form__label}>
                        <span>
                           Email <span>*</span>
                        </span>
                        <input
                            onChange={(e) => {
                                setError(false);
                                setEmail(e.target.value);
                            }}
                            className={cls.form__input}
                            type="text"
                        />
                        {error && !phoneRegExp.test(email) ? <span className={cls.error}>Введите корректный адрес</span> : '' }
                    </label>
                    <label className={cls.form__label}>
                        Имя
                        <input
                            className={cls.form__input}
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setError(false);
                                setName(e.target.value);
                            }}
                        />
                    </label>
                    <label className={cls.form__label}>
                        Сообщение
                        <input
                            className={cls.form__input}
                            type="text"
                            value={message}
                            onChange={(e) => {
                                setError(false);
                                setMessage(e.target.value);
                            }}
                        />
                    </label>
                    <label className={cls.form__labelCheckbox}>
                        <input
                            className={cls.form__checkbox}
                            type="checkbox"
                            value={checkBox}
                            onChange={(e) => {
                                setError(false);
                                toggleCheckbox(e.target.checked);
                            }}
                        />
                        {error && !checkBox ? (
                            <span className={cls.error}>Примите соглашение</span>
                        ) : (
                            ''
                        )}
                        <span>
                            Отправляя форму, вы соглашаетесь с{' '}
                            <NavLink className={cls.form__link} to="/politics" target='_blank'>
                                политикой конфиденциальности
                            </NavLink>
                        </span>
                    </label>
                    <button className={cls.form__btn}>Заказать консультацию</button>
                </form>
            </div>
            <Modal isOpen={isOpenThanks} onClose={toggleIsOpenThanks}>
                <ThankYouBox />
            </Modal>
        </>
    );
};
