import infoImg from "../../../assets/img/info/info-img.webp";
import { Layout } from "../../../shared/layout/Layout";

export const Info = ({ toggleIsOpenForm }) => {
  return (
    <div className="info__center container">
      <div className="info__item info__item--1">
        <div className="info__text-wrap container">
          <p className="info__text">
            Коллеги, приглашаем в&nbsp;клиенты лиц, выезжающих
            в&nbsp;командировку. Мы&nbsp;изготавливаем отчётные документы
            за&nbsp;проживание в&nbsp;гостиницах Уфы, Челябинска и&nbsp;других
            городов, с&nbsp;QR-кодом и&nbsp;подтверждением. Все предоставляемые
            нами чеки и&nbsp;документы абсолютно легитимны!
          </p>
        </div>
        <div className="info__img ">
          <img src={infoImg} alt="Гостинница" />
        </div>
      </div>
    </div>
  );
};
