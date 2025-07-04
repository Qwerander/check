import { Layout } from "../../shared/layout/Layout";
import { Adventages } from "./components/Adventages";
import { Benefits } from "./components/Benefits";
import { Docs } from "./components/Docs";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Know } from "./components/Know";
import cls from "./HomePage.module.scss";
// import { useState } from "react";

// import { WhyChooseUs } from "../../components/homePage/whyChooseUs/WhyChooseUs";
// import { Program } from "../../components/homePage/program/program";
// import { About } from "../../components/homePage/about/About";
// import { Services } from "../../components/homePage/services/Services";

export const HomePage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <Hero toggleIsOpenForm={toggleIsOpenForm} />
      <Info />
      <Benefits />
      <Adventages />
      <Docs />
      <Know />
    </>
  );
};
