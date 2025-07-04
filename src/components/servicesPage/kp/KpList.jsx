import cls from "./Kp.module.scss";
import { services } from "./services";

export const KpList = ({ toggleIsOpenForm }) => {
  return (
    <div className={cls.kp__list}>
      {services.map((s) => {
        return (
          <div
            className={cls.kp__item}
            key={s.id}
            onClick={() => toggleIsOpenForm(true)}
          >
            <div className={cls.kp__itemTop}>
              <img src={s.image} alt={s.title} />
              <h3 className={cls.kp__subtitle}>{s.title}</h3>
            </div>
            <p className={cls.kp__itemText}>{s.text}</p>
          </div>
        );
      })}
    </div>
  );
};
