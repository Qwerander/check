// import { ReactComponent as Logo } from "../../../img/logo/logo-light.svg";
import { Title } from "../../../shared/title/Title";
import aboutImg from "../../../assets/icons/homePage/about/main__illustration.png";
// import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/implementation.svg";
// import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/sales.svg";
// import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/service.svg";
import cls from "./Services.module.scss";
import { AboutList } from "./AboutList";
import { ServicesList } from "./ServicesList";
// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Services = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <div className={cls.about}>
        <Title
          title={"Полный спектр услуг"}
          className={cls.about__titleMobile}
          center
        />
        <p className={cls.about__text}>
          Для получения более подробной информации об услугах свяжитесь с нами
          по почте или телефону либо закажите обратный звонок
        </p>
        <ServicesList  />
        <div className={cls.about__content}>
          <div className={cls.about__left}>
            {/* <Title title={"ПрофЭксперт продажа, внедрение и обслуживание продуктов 1С"} className={cls.about__titleDesktop} /> */}
            {/* <AboutList /> */}
            {/* <button
              onClick={() => toggleIsOpenForm(true)}
              className={cls.about__btn}
            >
              Задать вопрос
            </button> */}
          </div>
          {/* <img className={cls.about__img}  src={aboutImg} alt="" /> */}
        </div>
      </div>
      {/* <Modal isOpen={isOpen} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal> */}
    </>
  );
};
