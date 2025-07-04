import cls from "./Service.module.scss";
import { ReactComponent as SVG1 } from "../../assets/icons/service-icon1.svg";
import { ReactComponent as SVG2 } from "../../assets/icons/service-icon2.svg";
import { ReactComponent as SVG4 } from "../../assets/icons/service-icon3.svg";
import { ReactComponent as SVG3 } from "../../assets/icons/service-icon4.svg";

const icons = [
  <SVG1 />,
  <SVG2 />,
  <SVG3 />,
  <SVG4 />,
]

export const Service = ({ text }) => {

  return (
    <div className={cls.service}>
      {text.map((item, i) => {
           return <div className={cls.serviceBlock}>
            {icons[i]}
            <p className={cls.service__text}>{item}</p>
          </div>
      })}
    </div>
  );
};
