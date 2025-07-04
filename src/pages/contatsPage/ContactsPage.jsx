import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./ContactsPage.module.scss";
import homeImg from "../../assets/img/home-img.jpg";
import { Form } from "../../components/form/Form";
import { ReactComponent as PhoneSVG } from "../../assets/icons/phone.svg";
import { ReactComponent as MailSVG } from "../../assets/icons/mail.svg";
import { HeaderSocial } from "../../components/header/headerSocial/HeaderSocial";

export const ContactsPage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Layout >
        <div className={cls.ContactsPage}>
          <div className={cls.ContactsPage__contacts}>
            <h3>Пункт выдачи документов:</h3>
            <p>г. Уфа, ул.Красина, 21, офис ???</p>
            <h3>Всегда ответим:</h3>
            <div className={cls.ContactsPage__contacts}>
              <div className={cls.ContactsPage__phone}>
                <PhoneSVG />
                <a href="tel:+375445551919">+375 (44) 555-19-19</a>
              </div>
              <div className={cls.ContactsPage__mail}>
                <MailSVG />
                <a href="mailto: info@kvant.shop">info@kvant.shop</a>
              </div>
            </div>

            <div className={cls.ContactsPage__social}>
              <h4>Мы в соц. сетях:</h4>
              <HeaderSocial />
            </div>
          </div>
          <Form />
        </div>
      </Layout>
    </>
  );
};
