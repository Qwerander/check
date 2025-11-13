import TrackedButton from "../../../components/TrackedButton/TrackedButton";
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
                <TrackedButton
                  component="a"
                  href="mailto:oooural@internet.ru"
                  className="footer__link"
                  eventName="email_click"
                  eventParams={{
                    location: "footer",
                    email_type: "contact"
                  }}
                >
                  oooural@internet.ru
                </TrackedButton>
              </p>
            </address>

            <div className="footer__phones">
              <p>
                <TrackedButton
                  component="a"
                  href="tel:+79871329881"
                  className="footer__link"
                  eventName="phone_click"
                  eventParams={{
                    location: "footer",
                    phone_type: "main"
                  }}
                >
                  +7 (987) 132-98-81
                </TrackedButton>
              </p>
            </div>
          </div>

          <div className="footer__actions">
            <TrackedButton
              component="a"
              href="tel:+79871329881"
              className="footer__checkButton"
              eventName="call_button_click"
              eventParams={{
                location: "footer",
                button_type: "call",
                phone_number: "+79871329881"
              }}
            >
              Позвонить
            </TrackedButton>
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