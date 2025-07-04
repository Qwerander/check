
import { Title } from "../../../shared/title/Title";

import cls from "./Kp.module.scss";
import { KpList } from "./KpList";

// import { useState } from "react";
// import { Modal } from "../../../shared/Modal/Modal";
// import { Form } from "../../form/Form";

export const Kp = ({ toggleIsOpenForm }) => {
  // const [isOpen, toggleIsOpen] = useState(false);

  return (
    <>
      <div className={cls.kp}>
        <Title title={"Сервисы"} className={cls.kp__titleMobile} />
        <KpList toggleIsOpenForm={toggleIsOpenForm} />
      </div>
      {/* <Modal isOpen={isOpen} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal> */}
    </>
  );
};
