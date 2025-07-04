import { Title } from "../../shared/title/Title";
import cls from "./HowWork.module.scss";
import { HowWorkBlock } from "./HowWorkBlock";

export const HowWork = ({howWork}) => {
  return (
    <>
      <Title Tag={"h2"} title={howWork.title} />
      <div className={cls.HowWork}>
        {howWork.items.map((item, i) => {
          return (
            <HowWorkBlock
              title={item.title}
              text={item.text}
              num={i + 1}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};
