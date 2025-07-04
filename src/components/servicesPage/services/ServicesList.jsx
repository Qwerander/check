import cls from "./Services.module.scss";

export const ServicesList = ({ toggleIsOpenForm }) => {
  return (
    <div className={cls.services__list}>
      <div
        className={cls.services__item}
        onClick={() => toggleIsOpenForm(true)}
      >
        <h3 className={cls.services__subtitle}>Установка и настройка 1С</h3>
        <p className={cls.services__itemText}>
          Внедрение — это комплексный подход к установке программы,
          обеспечивающий их 100% совместимость с ежедневной работой предприятия
        </p>
      </div>
      <div
        className={cls.services__item}
        onClick={() => toggleIsOpenForm(true)}
      >
        <h3 className={cls.services__subtitle}>Обслуживание 1С</h3>
        <p className={cls.services__itemText}>
          Абонентское обслуживание — это комплексная поддержка информационной
          системы офиса на регулярной основе
        </p>
      </div>
      <div
        className={cls.services__item}
        onClick={() => toggleIsOpenForm(true)}
      >
        <h3 className={cls.services__subtitle}>Электронная подпись 1С-ЭТП</h3>
        <p className={cls.services__itemText}>
          1С-ЭТП позволяет получить электронно цифровую подпись, оформить
          банковскую гарантию, подобрать тендеры.
        </p>
      </div>
    </div>
  );
};
