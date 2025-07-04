import { WhyChooseUsItem } from "./WhyChooseUsItem";
import cls from "./whyChooseUs.module.scss";
import { ReactComponent as Icon1 } from "../../../assets/icons/homePage/whyChooseUs/icon1.svg";
import { ReactComponent as Icon2 } from "../../../assets/icons/homePage/whyChooseUs/icon2.svg";
import { ReactComponent as Icon3 } from "../../../assets/icons/homePage/whyChooseUs/icon3.svg";

export const WhyChooseUs = () => {
  const items = [
    {
      icon: <Icon1 />,
      title: "Опыт более 10 лет",
      description:
        "Мы работаем более 10 лет, за это время выполнили успешно более 2000 проектов."
    },
    {
      icon: <Icon2 />,
      title: "Сертифицированные специалисты",
      description:
        "Все специалисты имеют сертификаты фирмы 1С и ежегодно подтверждают свою квалификацию"
    },
    {
      icon: <Icon3 />,
      title: "Гарантия качества",
      description: "На все наши работы мы даем гарантию 1 год"
    }
  ];

  return (
    <section className={cls.section}>
      <h2 className={cls.heading}>Почему выбирают нас</h2>
      <p className={cls.subHeading}>
        Мы предоставляем все виды услуг по автоматизации 1С!
      </p>
      <div className={cls.itemsContainer}>
        {items.map((item, index) => (
          <WhyChooseUsItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
