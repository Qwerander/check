import { useState, useRef, useEffect } from "react";
import { Layout } from "../../../shared/layout/Layout";

export const Know = ({ toggleIsOpenForm }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      header: "Бланки строгой отчётности (БСО, БО-18) – отменены!",
      text: "54-ФЗ «Об онлайн-кассах», вступивший в силу в июле 2018 года, избавил от необходимости заполнения и предоставления бланков строгой отчётности. Принимая наличные от граждан, все организации обязаны выдавать чеки с QR-кодами.",
    },
    {
      header: "Обязательно ли присутствие QR-кода на гостиничном чеке?",
      text: "Его присутствие - обязательно! Потому что в QR-коде заключена зашифрованная информация, подтверждающая подлинность предоставляемой услуги и легальность работы отеля.",
    },
    {
      header: "Как проверить гостиничный чек на подлинность?",
      text: "Сначала чек подвергается визуальной проверке, а потом – сканируется QR-код, который проверяется через мобильное приложение ФНС.",
    },
  ];

  // Анимация высоты контента
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`;
        } else {
          ref.style.height = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="know" id="know">
      <Layout>
        <h2 className="know__title">
          Что нужно знать про оформление чеков в 2024 году:
        </h2>
        <div className="know__wrapper">
          <div className="know__list">
            {items.map((item, index) => (
              <div
                key={index}
                className={`know__item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className="know__header">{item.header}</div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="know__content"
                >
                  <p className="know__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};
