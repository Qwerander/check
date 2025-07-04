import { Title } from "../../../shared/title/Title";
import cls from "./Program.module.scss";
import { ProgramList } from "./ProgramList";

export const Program = ({ toggleIsOpenForm }) => {
  return (
    <>
      <div className={cls.program}>
        <Title title={"Программные продукты 1С"} />
        <div className={cls.program__list}>
          <ProgramList toggleIsOpenForm={toggleIsOpenForm}/>
        </div>
      </div>
    </>
  );
};
