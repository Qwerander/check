// import { ReactComponent as Logo } from "../../../img/logo/logo-light.svg";
import { Title } from "../../../shared/title/Title";
import aboutImg from "../../../assets/icons/homePage/about/main__illustration.png";
// import { ReactComponent as ImplementationIcon } from "../../../assets/icons/homePage/implementation.svg";
// import { ReactComponent as SalesIcon } from "../../../assets/icons/homePage/sales.svg";
// import { ReactComponent as ServiceIcon } from "../../../assets/icons/homePage/service.svg";
import cls from "./Services.module.scss";
import { ServicesList } from "./ServicesList";

// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Services = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <div className={cls.services}>
        <Title title={"Услуги"} className={cls.services__titleMobile} />
        <ServicesList toggleIsOpenForm={toggleIsOpenForm} />
      </div>
      {/* <Modal isOpen={isOpen} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal> */}
    </>
  );
};
