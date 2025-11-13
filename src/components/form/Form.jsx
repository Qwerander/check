// import { NavLink } from 'react-router-dom';
import cls from './form.module.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Modal } from '../../shared/Modal/Modal';
import { ThankYouBox } from '../thankYouBox/ThankYouBox';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import TrackedButton from '../TrackedButton/TrackedButton';
import { usePhoneMask } from '../../hooks/usePhoneMask';

// Добавляем функцию для отправки событий в Яндекс.Метрику
const sendMetrikaEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(105284877, 'reachGoal', eventName, eventParams);
  }
};

export const Form = ({ toggleIsOpen, onClose }) => {
    const [isOpenThanks, toggleIsOpenThanks] = useState(false);
    const [phone, handlePhoneChange] = usePhoneMask(); // Используем кастомный хук
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [checkBox, toggleCheckbox] = useState(false);
    const [error, setError] = useState(false);
    const phoneRegExp = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && checkBox && emailRegex.test(email)) {
            // Отправляем событие в Яндекс.Метрику при успешной валидации формы
            sendMetrikaEvent('consultation_order', {
                form_type: 'contact_form',
                phone_provided: !!phone,
                email_provided: !!email,
                name_provided: !!name,
                message_provided: !!message,
                source: 'modal_form'
            });

            // Получите значения полей формы
            const data = { phone, email, name, message };

            // Замените 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' на ваши значения из EmailJS
            emailjs
                .send('service_f3d3gpm', 'template_46r6p8s', data, '9UYBO40lGP0XwuZ7m')
                .then((response) => {
                    console.log('Успешно отправлено', response);
                    
                    // Дополнительное событие при успешной отправке на сервер
                    sendMetrikaEvent('consultation_success', {
                        form_type: 'contact_form',
                        status: 'success'
                    });
                })
                .catch((error) => {
                    console.error('Ошибка при отправке', error);
                    
                    // Событие при ошибке отправки
                    sendMetrikaEvent('consultation_error', {
                        form_type: 'contact_form',
                        status: 'error',
                        error_type: 'emailjs_failed'
                    });
                });

            toggleIsOpenThanks(true);
            toggleIsOpen(false);
        } else {
            setError(true);
            
            // Отслеживаем ошибки валидации формы
            sendMetrikaEvent('consultation_validation_error', {
                form_type: 'contact_form',
                errors: {
                    email_invalid: !emailRegex.test(email),
                    checkbox_not_checked: !checkBox,
                    email_empty: !email
                }
            });
        }
    };

    return (
        <>
            <div className={cls.form}>
                {onClose ? <CloseSVG className={cls.form__close} onClick={onClose} /> : null}
                <h4 className={cls.form__title}>Свяжемся и уточним все детали</h4>
                <p className={cls.form__descr}>
                    Оставьте свои контакты, мы ответим в ближайшее время
                </p>
                <form className={cls.form__form} onSubmit={handleSubmit}>
                    <label className={cls.form__label}>
                        <span>
                            Номер телефона <span>*</span>
                        </span>
                        <input
                            onChange={(e) => {
                                setError(false);
                                handlePhoneChange(e);
                            }}
                            className={cls.form__input}
                            value={phone}
                            inputMode="numeric"
                            placeholder={'+7 (___) ___-__-__'}
                            type="tel"
                        />
                        {error && !phoneRegExp.test(phone) ? <span className={cls.error}>Введите корректный номер</span> : '' }
                    </label>
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
                            type="email"
                        />
                        {error && !emailRegex.test(email) ? <span className={cls.error}>Введите корректный адрес</span> : ''}
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
                            checked={checkBox}
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
                            {/* <NavLink className={cls.form__link} to="/politics" target='_blank'>
                                политикой конфиденциальности
                            </NavLink> */}
                            <span>
                                политикой конфиденциальности
                            </span>
                        </span>
                    </label>
                    <TrackedButton
                        className={cls.form__btn}
                        eventName="consultation_button_click"
                        eventParams={{
                            button_type: 'consultation_order',
                            form_type: 'contact_form'
                        }}
                        type="submit"
                    >
                        Заказать консультацию
                    </TrackedButton>
                </form>
            </div>
            <Modal isOpen={isOpenThanks} onClose={toggleIsOpenThanks}>
                <ThankYouBox />
            </Modal>
        </>
    );
};