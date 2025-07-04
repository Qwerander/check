// import { ReactComponent as Logo } from "../../../img/logo/logo-light.svg";
import { Title } from "../../../shared/title/Title";
import heroImg from "../../../assets/icons/services/main.png";
// import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/implementation.svg";
// import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/sales.svg";
// import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/service.svg";
import cls from "./Hero.module.scss";
import { HeroList } from "./HeroList";
// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Hero = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <div className={cls.hero}>
        <Title
          title={"Сервисы и услуги 1С"}
          className={cls.hero__titleMobile}
        />
        <div className={cls.hero__content}>
          <div className={cls.hero__left}>
            {/* <Title title={"ПрофЭксперт продажа, внедрение и обслуживание продуктов 1С"} className={cls.hero__titleDesktop} /> */}
            <p className={cls.hero__text}>
              Выбирайте дополнительные возможности программ, которые
              обеспечивают эффективную работу вашей организации и создают
              комфортные условия труда для ваших сотрудников.
            </p>
          </div>
          <img className={cls.hero__img} src={heroImg} alt="" />
        </div>
      </div>
      {/* <Modal isOpen={isOpen} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal> */}
    </>
  );
};
