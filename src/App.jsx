// import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Route, Routes  } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Modal } from "./shared/Modal/Modal";
import { Header } from "./pages/homePage/components/Header";
import { Form } from "./components/form/Form";
import { useState } from "react";

import './styles/index.scss';
import { Footer } from "./pages/homePage/components/Footer";
export const App = () => {
  // const { pathname } = useLocation();
  const [isOpenForm, toggleIsOpenForm] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage toggleIsOpenForm={toggleIsOpenForm}/>} />
        {/* <Route path="/about" element={<AboutPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/services" element={<ServicesPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/contacts" element={<ContactsPage toggleIsOpenForm={toggleIsOpenForm}/>} /> */}
      </Routes>
      <Footer />
      <Modal isOpen={isOpenForm} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal>
    </>
  );
};
