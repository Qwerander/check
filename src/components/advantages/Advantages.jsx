import { Title } from "../../shared/title/Title";
import cls from "./Advantages.module.scss";
import img1 from "../../assets/img/contacts/contacts-benefits-img-1.svg"
import img2 from "../../assets/img/contacts/contacts-benefits-img-2.svg"
import img3 from "../../assets/img/contacts/contacts-benefits-img-3.svg"

import { AdvantagesBlock } from "./AdvantagesBlock";

const advantages = [
  {
    items: [
      'Быстрое погружение в особенности работы клиента',
      'Творческий подход к работе с каждым клиентом',
      'Принятие специалистом самостоятельных решения при работе с клиентом и способность нести за них ответственность',
    ],
    image: img1
  },
  {
    items: [
      'Способность максимально эффективного общения с различными компаниями, государственными органами и учреждениями при выполнении задач клиента',
      'Командная работа в решении проблем клиента',
    ],
    image: img2
  },
  {
    items: [
      'Работа «на опережение»',
      'Быстрое выполнение разноплановых задач клиента',
      'Постоянное самообучение и повышение квалификации;',
    ],
    image: img3
  },

];

export const Advantages = () => {
  return (
    <>
      <Title
        Tag={"h2"}
        title={"Наши премущества"}
      />
      <div className={cls.Advantages}>
        {advantages.map((item, i) => {
          return <AdvantagesBlock items={item.items} image={item.image} key={i}/>
        })}
      </div>
    </>
  );
};
