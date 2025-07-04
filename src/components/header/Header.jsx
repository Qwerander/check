import cls from "./Header.module.scss";
import { NavBar } from "./nav/NavBar";
import { Layout } from "../../shared/layout/Layout";
import { Modal } from "../../shared/Modal/Modal";
import { useState } from "react";
import { PayForm } from "../payForm/payForm";
import { HeaderTop } from "./headerTop/HeaderTop";
import { ReactComponent as LogoSVG } from "../../assets/icons/logo-kvant-expert-1с.svg";
import { useResize } from "../../hooks/useRessize";
import { HeaderSocial } from "./headerSocial/HeaderSocial";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpenPayForm, toggleIsOpenPayForm] = useState(false);
  const resize560 = useResize(570);
  return (
    <>
      <div className={cls.header}>
        <Layout>
          <div className={cls.header__wrap}>
            <HeaderTop />

            <div className={cls.header__bottom}>
              {resize560 ? (
                <NavLink to="/">
                  <LogoSVG />
                </NavLink>
              ) : (
                <HeaderSocial />
              )}
              <NavBar />
            </div>
          </div>
        </Layout>
      </div>
      <Modal isOpen={isOpenPayForm} onClose={toggleIsOpenPayForm}>
        <PayForm toggleIsOpen={toggleIsOpenPayForm} />
      </Modal>
    </>
  );
};
