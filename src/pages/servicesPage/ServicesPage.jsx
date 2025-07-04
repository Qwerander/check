import { Hero } from "../../components/servicesPage/hero/Hero";
import { Kp } from "../../components/servicesPage/kp/Kp";
import { Services } from "../../components/servicesPage/services/Services";
import { Layout } from "../../shared/layout/Layout";
import cls from "./ServicesPage.module.scss";

export const ServicesPage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <div className={cls.background}>
        <Layout clsCustom={cls.background}>
          <Hero />
        </Layout>
      </div>
      <Layout>
        <Services toggleIsOpenForm={toggleIsOpenForm} />
      </Layout>
      <Layout>
        <Kp toggleIsOpenForm={toggleIsOpenForm} />
      </Layout>
    </>
  );
};
