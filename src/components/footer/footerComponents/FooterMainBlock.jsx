import cls from "./footerBlock.module.scss";
import { useResize } from "../../../hooks/useRessize";

export const FooterMainBlock = () => {
  const resize450 = useResize(448);
  return (
    <div className={`${cls.footer__block} ${cls.footer__block_main}`}>
      {!resize450 && (
        <div className={cls.footer__button}>
          {/* <button>Временная кнопка</button> */}
        </div>
      )}
      {/* Логотип */}
      <p className={cls.footer__text}>
        Оказание услуг по продаже, внедрению и обслуживанию франшиз 1С требует
        соблюдения технических стандартов и законодательства. Успех зависит от
        корректности настройки, полноты данных и изменений в нормативной базе.
        Результаты прошлых проектов не гарантируют аналогичных в будущем.
        Ответственность за решения лежит на клиенте, даже при наличии
        рекомендаций и поддержки.
      </p>
      {/* <span className={cls.footer__subscribe}>Подпишись на скидки и акции</span> */}
    </div>
  );
};
