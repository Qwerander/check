import cls from './thankYouBox.module.scss';

export const ThankYouBox = () => {
    return (
        <div className={cls.thankYouBox}>
            <p className={cls.thankYouBox__text}>
                Спасибо!! Мы свяжемся с Вами в ближайшее время!!
            </p>
        </div>
    );
};
