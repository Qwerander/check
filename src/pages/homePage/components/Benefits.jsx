import { useEffect, useRef, useState } from "react";
import icon1 from "../../../assets/icons/benefits/1.svg";
import icon2 from "../../../assets/icons/benefits/2.svg";
import icon3 from "../../../assets/icons/benefits/3.svg";
import icon4 from "../../../assets/icons/benefits/4.svg";
import icon5 from "../../../assets/icons/benefits/5.svg";
import icon6 from "../../../assets/icons/benefits/6.svg";
import { Layout } from "../../../shared/layout/Layout";

export const Benefits = ({ toggleIsOpenForm }) => {
  const benefitsSectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(Array(6).fill(false));

  const benefitsData = [
    {
      icon: icon1,
      alt: "Официальные документы",
      title: "Официальные документы",
      text: "Все легко проверяется",
      className: "benefits__item--1",
      animation: "from-left",
    },
    {
      icon: icon2,
      alt: "Полный комплект",
      title: "Полный комплект",
      text: "В пакете документов есть все",
      className: "benefits__item--2",
      animation: "from-top",
    },
    {
      icon: icon3,
      alt: "Доставка",
      title: "Доставка",
      text: "Доставка по городу Яндекс курьером",
      className: "benefits__item--3",
      animation: "from-bottom",
    },
    {
      icon: icon4,
      alt: "Любой период",
      title: "Любой период",
      text: "Отчётные документы предоставляются, даже если командировка длилась пару дней",
      className: "benefits__item--4",
      animation: "from-right",
    },
    {
      icon: icon5,
      alt: "Высокая скорость",
      title: "Высокая скорость",
      text: "Соберем пакет документов за два часа",
      className: "benefits__item--5",
      animation: "from-right",
    },
    {
      icon: icon6,
      alt: "Оплата по факту",
      title: "Оплата по факту",
      text: "Произвести оплату можно после проверки",
      className: "benefits__item--6",
      animation: "from-left",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            setVisibleItems((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="benefits" ref={benefitsSectionRef} id="benefits">
      <Layout>
        <h2 className="benefits__title">Наши преимущества:</h2>
        <div className="benefits__wrapper">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`
                benefits__item
                ${item.className}
                ${item.animation}
                ${visibleItems[index] ? "visible" : ""}
              `}
            >
              <img src={item.icon} alt={item.alt} />
              <p className="benefits__text">
                <span>{item.title}</span> <br /> {item.text}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};
