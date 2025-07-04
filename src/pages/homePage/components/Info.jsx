import infoImg from '../../../assets/img/info/info-img.webp';
import { Layout } from '../../../shared/layout/Layout';


export const Info = ({ toggleIsOpenForm }) => {
  return (
      <div className="info__center container">
        <div className="info__item info__item--1">
          <div className="info__text-wrap container">
            <p className="info__text">
              Предлагаем войти в&nbsp;число наших клиентов лиц, отправившихся
              в&nbsp;командировку. Мы&nbsp;занимаемся изготовлением отчётных
              документов за&nbsp;проживание в&nbsp;квартирах, хостелах
              и&nbsp;гостиницах, с&nbsp;подтверждением и&nbsp;QR-кодом. Все
              предоставляемые нами гостиничные чеки и&nbsp;прочие документы
              абсолютно легитимны!
            </p>
          </div>
          <div className="info__img ">
            <img
              src={infoImg}
              alt="Гостинница"
            />
          </div>
        </div>
      </div>
  );
};
