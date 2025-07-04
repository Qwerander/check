// import { ReactComponent as Logo } from "../../../img/logo/logo-light.svg";
import { Title } from "../../../shared/title/Title";
import { ReactComponent as HeroImg } from "../../../assets/img/home-img.svg";
// import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/implementation.svg";
// import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/sales.svg";
// import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/service.svg";
import cls from "./Hero.module.scss";
import { HeroList } from "./HeroList";
// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Hero = ({toggleIsOpenForm}) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <div className={cls.hero}>
        <Title title={"Бухгалтерское обслуживание от лидера рынка от 2500₽/мес.!"} className={cls.hero__titleMobile} />
        <div className={cls.hero__content}>
          <div className={cls.hero__left}>
            <Title title={"Бухгалтерское обслуживание от лидера рынка от 2500₽/мес.!"} className={cls.hero__titleDesktop} />
            <button
              onClick={() => toggleIsOpenForm(true)}
              className={cls.hero__btn}
            >
              Задать вопрос
            </button>
          </div>
            <HeroList />
          {/* <HeroImg className={cls.hero__img} /> */}
        </div>
      </div>
      {/* <Modal isOpen={isOpen} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal> */}
    </>
  );
};
