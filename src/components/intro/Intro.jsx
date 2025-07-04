import { Layout } from "../../shared/layout/Layout";
import cls from "./Intro.module.scss";

export const Intro = ({
  title,
  text,
  buttonText,
  buttonOnClick,
  imageSrc,
  imageAlt = "Section image",
}) => {
  return (
    <div className={cls.intro}>
      <div className={cls.intro__left}>
        <h2 className={cls.intro__title}>{title}</h2>
        <p className={cls.intro__text}>{text}</p>
        <button className={cls.intro__button} onClick={buttonOnClick}>
          {buttonText}
        </button>
      </div>
      <div className={cls.intro__right}>
        <img className={cls.intro__image} src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};
