import { Title } from "../../shared/title/Title";
import cls from "./Benefits.module.scss";

export const BenefitsBlock = ({ title, text, image }) => {
  return (
      <div className={cls.BenefitsBlock}>
        <Title Tag={'h4'} title={title} className={cls.Benefits__title}/>
        <p className={cls.Benefits__text}>{text}</p>
        <img src={image} alt="Преимущества" />
      </div>
  );
};
