import cls from "./Advantages.module.scss";

export const AdvantagesBlock = ({ items, image }) => {
  return (
    <div className={cls.AdvantagesBlock}>
      <div className={cls.AdvantagesBlock__list}>
        {items.map((item, i) => {
            return <p className={cls.AdvantagesBlock__text} key={i}>{item}</p>
        })}
      </div>
      <div className={cls.AdvantagesBlock__img}>
        <img src={image} alt="Преимущества" />
      </div>
    </div>
  );
};
