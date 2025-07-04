import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { Layout } from "../../shared/layout/Layout";
import cls from "./AboutPage.module.scss";
import homeImg from "../../assets/img/contacts-img.svg";
import { Advantages } from "../../components/advantages/Advantages";
import { Title } from "../../shared/title/Title";
import task from '../../assets/img/contacts/task-img.svg'

export const AboutPage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Layout>
        <div className={cls.AboutPage}>
          <Intro
            title={"О компании"}
            text={
              "Более 10 лет мы помогаем нашим клиентам решать сложные задачи, и наш энтузиазм только растет! Мы ценим порядок, структуру и гордимся спокойствием и улыбками наших клиентов. Для нас важна комфортная коммуникация, поэтому мы работаем с небольшими компаниями, продавцами на маркетплейсах, IT-компаниями и крупными холдингами со сложной структурой. Теперь мы предлагаем вам стать частью нашей успешной истории! Присоединяйтесь к франшизе 1С и получите готовое решение для бизнеса, которое уже проверено временем. Мы обеспечим вас всем необходимым: от качественного программного обеспечения до обучения и поддержки. Начните свой путь к успеху с нами — доверьтесь опыту, который работает!"
            }
            imageSrc={homeImg}
            buttonText={"Заказать консультацию"}
            buttonOnClick={() => {
              toggleIsOpenForm(true);
            }}
          />
          <div className={cls.AboutPageTask}>
            <div className={cls.AboutPageTask__left}>
              <Title title={"Наша задача"} />
              <p className={cls.AboutPageTask__text}>
                Мы снимаем с предпринимателей бюрократическую нагрузку,
                минимизируем риски при общении с государственными инстанциями,
                решаем сложные спорные задачи и защищаем интересы наших
                клиентов. Работать с нами приятно, удобно и безопасно.
              </p>
            </div>
            <div className={cls.AboutPageTask__img}>
              <img src={task} alt="Наша задача" />
            </div>
          </div>
          <Advantages />
        </div>
      </Layout>
    </>
  );
};
