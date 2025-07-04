import img1 from "../../../assets/img/adventages/adventages-1.webp";
import img2 from "../../../assets/img/adventages/adventages-2.webp";
import img3 from "../../../assets/img/adventages/adventages-3.webp";
import { Layout } from "../../../shared/layout/Layout";

export const Adventages = ({ toggleIsOpenForm }) => {
  return (
    <section className="adventages" id="adventages">
      <Layout>
        <h2 className="adventages__title">Наши особенности:</h2>
        <div className="adventages__list">
          <div className="adventages__item adventages__item--1">
            <div className="adventages__block">
              <h4 className="adventages__block-title adventages__block-title--mobile">
                Гостиничные чеки с валидным QR-кодом
              </h4>
              <div className="adventages__image-wrap">
                <img src={img1} alt="QR-код" />
              </div>
              <div className="adventages__description">
                <h4 className="adventages__block-title">
                  Гостиничные чеки с валидным QR-кодом
                </h4>
                <p className="adventages__text">
                  Чеки выписываются в соответствии с законодательством, через
                  зарегестрированную онлайн кассу и имеют корректный QR-код.
                  Гарантируем 100% подтверждение чека!
                </p>
              </div>
            </div>
          </div>
          <div className="adventages__item adventages__item--2">
            <div className="adventages__block">
              <h4 className="adventages__block-title adventages__block-title--mobile">
                У нас все необходимые отчетные документы
              </h4>
              <div className="adventages__image-wrap">
                <img src={img2} alt="Документы" />
              </div>
              <div className="adventages__description">
                <h4 className="adventages__block-title">
                  У нас все необходимые отчетные документы
                </h4>
                <p className="adventages__text">
                  Клиент получает все, что необходимо для отчета по проживанию:
                  кассовый чек с QR-кодом, счет 3Г, акт об оказании услуг,
                  прейскурант цен, счет- фактура, копия свидетельства о
                  регистрации.
                </p>
              </div>
            </div>
          </div>
          <div className="adventages__item adventages__item--3">
            <div className="adventages__block">
              <h4 className="adventages__block-title adventages__block-title--mobile">
                Оплата ниличными или через терминал
              </h4>
              <div className="adventages__image-wrap">
                <img src={img3} alt="Терминал" />
              </div>
              <div className="adventages__description">
                <h4 className="adventages__block-title">
                  Оплата ниличными или через терминал
                </h4>
                <p className="adventages__text">
                  Оплата заказываемых командировочных документов возможно как
                  наличными, так и картой через кассовый терминал. Стоимость
                  чека - 5% от суммы за проживание.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
