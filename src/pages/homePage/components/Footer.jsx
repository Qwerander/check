import { Layout } from "../../../shared/layout/Layout";


export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <Layout>
        <div className="footer__container">
          <div className="footer__contacts">
            <h3 className="footer__title">Контакты</h3>
            <address className="footer__address">
              <p>630591 г. Уфа, Республика</p>
              <p>Санис-восточная, 12</p>
              <p>Ежедневно с 10:00 до 19:00</p>
              <p>
                <a href="mailto:oooural@internet.ru" className="footer__link">
                  oooural@internet.ru
                </a>
              </p>
            </address>

            <div className="footer__phones">
              <p>
                <a href="tel:+79871329881" className="footer__link">
                  +7 (987) 132-98-81
                </a>
              </p>
            </div>
          </div>

          <div className="footer__actions">
            <a className="footer__checkButton" href="tel:+79871329881">Позвонить</a>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="footer__copyright">
          <p>2025 Отчетные документы</p>
        </div>
      </Layout>
    </footer>
  );
};
