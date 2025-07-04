import { Title } from "../../shared/title/Title";
import cls from "./HowWork.module.scss";

export const HowWorkBlock = ({ title, text, num }) => {
  return (
    <div className={cls.HowWorkBlock}>
      <div className={cls.HowWorkBlock__num}>{num}</div>
      <Title Tag={"h4"} title={title} className={cls.HowWork__title} />
      <p className={cls.HowWork__text}>{text}</p>
    </div>
  );
};
