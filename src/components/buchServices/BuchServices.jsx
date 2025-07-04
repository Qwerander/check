
import cls from "./BuchServices.module.scss";
import { Usluga } from "../usluga/Usluga";

export const BuchServices = ({ toggleIsOpenForm }) => {
  return (
    <div className={cls.BuchServices}>
      <Usluga
        title="Аутсорсинг бухгалтерии"
        description="Нужен надежный подрядчик на аутсорсинг бухгалтерии? Вы его нашли!"
        price={6500}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Бухгалтерские услуги для ООО"
        description="Бухгалтерские услуги для ООО. Любая деятельность, возьмем бухучет на себя."
        price={6500}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Бухгалтерские услуги для ИП"
        description="Маленький бизнес — большая ответственность. Заберем на себя бухгалтерскую ее часть."
        features={[
          "Сведем к минимуму риск блокировки р/с",
          "Ответим на все ваши вопросы",
          "Отчеты будут сдаваться вовремя — вам не нужно будет за этим следить",
        ]}
        price={6500}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
      <Usluga
        title="Возмещение НДС"
        features={[
          "Помогаем вернуть НДС",
          "Рассказываем, кто может вернуть НДС и в каком случае",
          "Помогаем на всех этапах",
        ]}
        price={20000}
        buttonText="Заказать"
        onOrderClick={() => {
          toggleIsOpenForm(true);
        }}
      />
    </div>
  );
};
