import cls from "./Services.module.scss";

export const ServicesList = () => {
  return (
    <div className={cls.about__list}>
      <div className={cls.about__item}>
        <span className={cls.about__num}>1</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Бухгалтерское обслуживание</h3>
          <span className={cls.about__itemText}>
            Ведение, постановка и восстановление бухгалтерского и налогового
            учета
          </span>
        </div>
      </div>
      <div className={cls.about__item}>
        <span className={cls.about__num}>2</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Нулевая отчетность</h3>
          <span className={cls.about__itemText}>
            Составление и сдача нулевой отчетности для ООО и ИП
          </span>
        </div>
      </div>
      <div className={cls.about__item}>
        <span className={cls.about__num}>3</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Персонифицированный учет</h3>
          <span className={cls.about__itemText}>
            Персонифицированный учет, отчетность по справкам 2-НДФЛ и 6-НДФЛ
          </span>
        </div>
      </div>
      <div className={cls.about__item}>
        <span className={cls.about__num}>4</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Кадровое делопроизводство</h3>
          <span className={cls.about__itemText}>
            Оформление трудовых отношений, ведение и восстановление кадрового
            учета
          </span>
        </div>
      </div>
      <div className={cls.about__item}>
        <span className={cls.about__num}>5</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Расчет заработной платы</h3>
          <span className={cls.about__itemText}>
            Расчет з/п, сдача полного цикла отчетности по заработной плате,
            консультации
          </span>
        </div>
      </div>
      <div className={cls.about__item}>
        <span className={cls.about__num}>6</span>
        <div className={cls.about__wrap}>
          <h3 className={cls.about__subtitle}>Дополнительные услуги</h3>
          <span className={cls.about__itemText}>
            Смена юр. адреса, добавление/изменение кодов ОКВЭД, закрытие ИП и
            др.
          </span>
        </div>
      </div>
    </div>
  );
};
