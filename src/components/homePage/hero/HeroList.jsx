import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/hero/implementation.svg";
import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/hero/sales.svg";
import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/hero/service.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/homePage/hero/check-icon.svg";
import cls from "./Hero.module.scss";

export const HeroList = () => {
  return (
    <div className={cls.hero__list}>
      <div className={cls.hero__item}>
        <CheckIcon />
        <span className={cls.hero__itemText}>Бесплатный аудит бухгалтерии</span>
      </div>
      <div className={cls.hero__item}>
        <CheckIcon />
        <span className={cls.hero__itemText}>Одна бесплатная лицензия в облачную 1С</span>
      </div>
      <div className={cls.hero__item}>
        <CheckIcon />
        <span className={cls.hero__itemText}>Бесплатная консультация</span>
      </div>
    </div>
  );
};
