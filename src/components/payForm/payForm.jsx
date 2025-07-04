import React, { useState, useEffect } from 'react';
import cls from './payForm.module.scss';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';

export const PayForm = ({ toggleIsOpen, onClose }) => {
    const [isTinkoffLoaded, setTinkoffLoaded] = useState(false);

    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!isTinkoffLoaded) {
        //     console.error('Библиотека Tinkoff не загружена');
        //     return;
        // }

        const { description, amount, email, phone } = formData;

        if (!email && !phone) {
            alert('Поле E-mail или Phone не должно быть пустым');
            return;
        }

        const receipt = JSON.stringify({
            EmailCompany: 'activetranzit@bk.ru',
            Taxation: 'osn',
            FfdVersion: '1.2',
            Items: [
                {
                    Name: description || 'Оплата',
                    Price: +amount,
                    Quantity: 1.0,
                    Amount: +amount,
                    PaymentMethod: 'full_prepayment',
                    PaymentObject: 'service',
                    Tax: 'none',
                    MeasurementUnit: 'pc',
                },

            ],
        });

        // pay({ ...formData, receipt });
        const TPF = {
            ...formData,
            receipt,
        };
        // const TPF = {
        //     description: "Оплата услуг",
        //     amount: 1000,
        //     email: "test@mail.com",
        //     phone: "1234567890",
        //     receipt: JSON.stringify({
        //         EmailCompany: "mail@mail.com",
        //         Taxation: "patent",
        //         FfdVersion: "1.2",
        //         Items: [
        //             {
        //                 Name: "Предмет 1",
        //                 Price: 50000,
        //                 Quantity: 1.0,
        //                 Amount: 50000",
        //                 PaymentMethod: "full_prepayment",
        //                 PaymentObject: "service",
        //                 Tax: "none",
        //                 MeasurementUnit: "pc",
        //             }
        //         ]
        //     })
        // };



        if (window.pay) {
            console.log(TPF);

            window.pay(TPF); // Вызов метода из подключенной библиотеки
            onClose()
        } else {
            console.error('Метод pay не найден. Убедитесь, что tinkoff_v2.js подключён.');
        }
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'http://localhost:5000/tinkoff';
        script.async = true;
        script.onload = () => console.log('Скрипт Tinkoff загружен');
        script.onerror = () => console.error('Ошибка загрузки скрипта');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // const pay = (data) => {
    //     console.log('Submitting payment data:', data);
    //     // Здесь можно добавить логику отправки данных на сервер
    // };

    return (
        <div className={cls.form}>
            <CloseSVG className={cls.form__close} onClick={onClose} />
            <form className={cls.payform_tbank} name="payform-tbank" onSubmit={handleSubmit}>
                <input
                    className={cls.payform_tbank_row}
                    type="hidden"
                    name="terminalkey"
                    value="1732467302863DEMO"
                />
                <input className={cls.payform_tbank_row} type="hidden" name="frame" value="true" />
                <input className={cls.payform_tbank_row} type="hidden" name="language" value="ru" />
                <input
                    className={cls.payform_tbank_row}
                    type="text"
                    placeholder="Сумма заказа"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
                <input
                    className={cls.payform_tbank_row}
                    type="hidden"
                    placeholder="Номер заказа"
                    name="order"
                />
                <input
                    className={cls.payform_tbank_row}
                    type="text"
                    placeholder="Описание заказа"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    className={cls.payform_tbank_row}
                    type="text"
                    placeholder="ФИО плательщика"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className={cls.payform_tbank_row}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className={cls.payform_tbank_row}
                    type="tel"
                    placeholder="Контактный телефон"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    className={`${cls.payform_tbank_row} ${cls.payform_tbank_btn}`}
                    type="submit"
                    value="Оплатить"
                />
            </form>
        </div>
    );
};
