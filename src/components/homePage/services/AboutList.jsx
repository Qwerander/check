import implementationIcon from "../../../assets/icons/homePage/about/main__01.png";
import salesIcon from "../../../assets/icons/homePage/about/main__02.png";
import serviceIcon from "../../../assets/icons/homePage/about/main__03.png";
import cls from "./Services.module.scss";

export const AboutList = () => {
  return (
    <div className={cls.about__list}>
      <div className={cls.about__item}>
        <img src={implementationIcon} alt="" />
        <span className={cls.about__itemText}>Наша компания также занимается разработкой собственных программных продуктов на платформе «1С Предприятие 8»</span>
      </div>
      <div className={cls.about__item}>
        <img src={salesIcon} alt="" />
        <span className={cls.about__itemText}>В нашей компании работают сертифицированные фирмой «1С» специалисты, которые постоянно совершенствуют свои знания и навыки. Они помогут качественно и оперативно решить задачи по автоматизации управления и учета на вашем предприятии</span>
      </div>
      <div className={cls.about__item}>
        <img src={serviceIcon} alt="" />
        <span className={cls.about__itemText}>Компания «KvantExpert» опирается в своей работе на знание и повседневное применение стандартов качества, проектных методов в управлении, процессного подхода в организации нашей деятельности.</span>
      </div>
    </div>
  );
};
