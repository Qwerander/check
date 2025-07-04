import { useEffect, useRef, useState } from "react";
import { Layout } from "../../../shared/layout/Layout";

export const Docs = ({ toggleIsOpenForm }) => {
  const docsSectionRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const docsSection = docsSectionRef.current;

    if (!docsSection || animationStarted) return;

    const handleScroll = () => {
      if (isElementInViewport(docsSection)) {
        startAnimation();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationStarted]);

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  const startAnimation = () => {
    setAnimationStarted(true);

    const itemsCount = 7; // Количество элементов .docs__item
    const interval = 300;

    let index = 0;
    const timer = setInterval(() => {
      if (index < itemsCount) {
        setVisibleItems((prev) => prev + 1);
        index++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  return (
    <section className="docs" ref={docsSectionRef} id="docs">
      <Layout>
        <div className="docs__wrapper">
          <h2 className="docs__title">Cамый полный комплект документов:</h2>

          <div className="docs__block">
            <div className={`docs__left ${animationStarted ? "visible" : ""}`}>
              <h3 className="docs__subtitle">
                Официальные документы на проживание с подтверждением!
              </h3>
              <p className="docs__text">
                Мы гарантируем, что выдержим самую строгую проверку и вы – тоже!
                Потому что каждый клиент вносится в журнал проживания,
                следовательно, он есть в базе. В случае проверки со стороны
                службы безопасности или бухгалтерии компании (организации), мы
                легко докажем факт вашего проживания в отеле! Наши координаты
                для связи вы найдете в счете. Пишите или звоните, если в этом
                возникнет необходимость!.
              </p>
            </div>
            <div className="docs__inner">
              {[
                "Реквизиты организаций.",
                "Адрес проживания.",
                "Номер и его класс.",
                "Чек с QR-кодом, подлинность которого можно проверить на сайте ФНС.",
                "Копия свидетельства о регистрации ООО или ИП.",
                "Акт выполненных работ.",
                "Актуальный гостиничный прайс.",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`docs__item ${
                    index < visibleItems ? "visible" : ""
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
