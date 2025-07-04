import { Layout } from "../../shared/layout/Layout";
import cls from "./Usluga.module.scss";

export const Usluga = ({
  title,
  description,
  features,
  price,
  buttonText = "Заказать",
  onOrderClick,
}) => {
  return (
    <div className={cls.usluga}>
      <div className={cls.usluga__left}>
        <h3 className={cls.usluga__title}>{title}</h3>
        {description && (
          <p className={cls.usluga__description}>{description}</p>
        )}
        {features && (
          <ul className={cls.usluga__features}>
            {features.map((feature, index) => (
              <li key={index} className={cls.usluga__feature}>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className={cls.usluga__price}>от {price} ₽</div>
      </div>
      <div className={cls.usluga__right}>
        <button className={cls.usluga__button} onClick={onOrderClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
