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
                <a href="mailto:info@attoyolom-praekt.pro" className="footer__link">
                  info@attoyolom-praekt.pro
                </a>
              </p>
            </address>

            <div className="footer__phones">
              <p>
                <a href="tel:+73472576039" className="footer__link">
                  +7 (347) 257-60-39
                </a>
              </p>
              <p>
                <a href="tel:+79870389565" className="footer__link">
                  +7 (987) 038-95-65
                </a>
              </p>
            </div>
          </div>

          <div className="footer__actions">
            <button className="footer__checkButton">Позвонить</button>
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
