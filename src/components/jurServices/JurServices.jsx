import cls from "./JurServices.module.scss";
import { Usluga } from "../usluga/Usluga";

export const JurServices = ({ toggleIsOpenForm }) => {
  return (
    <div className={cls.JurServices}>
      <Usluga
        title="Ликвидация ООО"
        description="Делаем ликвидацию ООО любой сложности — от простых нулевок до проблемных фирм."
        price={20000}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Регистрация изменений в учредительные документы ЮЛ и внесение сведений в ЕГРЮЛ"
        description="Готовим документы, которые нужны для регистрации изменений в учредительные документы и для других типов документов."
        price={3000}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Регистрация ИП"
        description="Поможем зарегистрировать ИП — подготовим документы и подскажем, какую систему налогообложения выбрать."
        price={3000}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Регистрация ООО"
        description="Поможем зарегистрировать ООО — подготовим документы и подскажем, какую систему налогообложения выбрать."
        features={[
          "Регистрируем за 3 дня",
          "Готовим пакет документов",
          "Подбираем ОКВЭДЫ",
          "Отвечаем на все вопросы",
        ]}
        price={5000}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
    </div>
  );
};
