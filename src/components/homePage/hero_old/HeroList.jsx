import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/hero/implementation.svg";
import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/hero/sales.svg";
import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/hero/service.svg";
import cls from "./Hero.module.scss";

export const HeroList = () => {
  return (
    <div className={cls.hero__list}>
      <div className={cls.hero__item}>
        <SalesIcon />
        <span className={cls.hero__itemText}>Продажи</span>
      </div>
      <div className={cls.hero__item}>
        <ImplementationIcon />
        <span className={cls.hero__itemText}>Внедрение</span>
      </div>
      <div className={cls.hero__item}>
        <ServiceIcon />
        <span className={cls.hero__itemText}>Обслуживание</span>
      </div>
    </div>
  );
};
