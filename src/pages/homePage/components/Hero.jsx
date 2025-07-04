// import { ReactComponent as Logo } from "../../../img/logo/logo-light.svg";
import { Layout } from "../../../shared/layout/Layout";
import { Title } from "../../../shared/title/Title";
// import { ReactComponent as HeroImg } from "../../../assets/img/home-img.svg";
// import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/implementation.svg";
// import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/sales.svg";
// import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/service.svg";
// import cls from "./Hero.module.scss";
// import { HeroList } from "./HeroList";
// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Hero = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <div className={"hero"}>
      <Layout>
        <Title
          title={"Отчётные документы для командированных"}
          className={"hero__titleMobile"}
        />
        <div className={"hero__content"}>
          <div className={"hero__left"}>
            <Title
              title={"Отчётные документы для командированных"}
              className={"hero__titleDesktop"}
            />
            <button
              onClick={() => toggleIsOpenForm(true)}
              className={"hero__btn"}
            >
              Оформить
            </button>
          </div>
          {/* <HeroList /> */}
        </div>
      </Layout>
    </div>
  );
};
