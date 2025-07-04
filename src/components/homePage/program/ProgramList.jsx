
import cls from "./Program.module.scss";
import program1 from '../../../assets/icons/homePage/program/program-1.png';
import program2 from '../../../assets/icons/homePage/program/program-2.png';
import program3 from '../../../assets/icons/homePage/program/program-3.png';
import program4 from '../../../assets/icons/homePage/program/program-4.png';
import program5 from '../../../assets/icons/homePage/program/program-5.png';
import program6 from '../../../assets/icons/homePage/program/program-6.png';
import program7 from '../../../assets/icons/homePage/program/program-7.png';
import program8 from '../../../assets/icons/homePage/program/program-8.png';
import program9 from '../../../assets/icons/homePage/program/program-9.png';
import program10 from '../../../assets/icons/homePage/program/program-10.png';
import programPrice from '../../../assets/icons/homePage/program/program-price.png';

const programArr = [
  {
    id: 1,
    image: program1,
    title: <span>1С Бухгалтерия&nbsp;8</span>,
    price: '3 600'
  },
  {
    id: 2,
    image: program2,
    title: <span>1С Управление торговлей&nbsp;8</span>,
    price: '8 200'
  },
  {
    id: 3,
    image: program3,
    title: <span>1С Зарплата и управление персоналом&nbsp;8</span>,
    price: '9 100'
  },
  {
    id: 4,
    image: program4,
    title: <span>1С Комплексная автоматизация&nbsp;8</span>,
    price: '83 000'
  },
  {
    id: 5,
    image: program5,
    title: <span>1С Управление нашей фирмой</span>,
    price: '6 600'
  },
  {
    id: 6,
    image: program6,
    title: <span>1С Розница&nbsp;8</span>,
    price: '4 000'
  },
  {
    id: 7,
    image: program7,
    title: <span>1С Документооборот&nbsp;8</span>,
    price: '48 500'
  },
  {
    id: 8,
    image: program8,
    title: <span>1С Управляющий&nbsp;8</span>,
    price: '17 700'
  },
  {
    id: 9,
    image: program9,
    title: <span>1С ERP 2</span>,
    price: '581 400'
  },
  {
    id: 10,
    image: program10,
    title: <span>Лицензии 1С Предприятие&nbsp;8</span>,
    price: '7 600'
  },
]

export const ProgramList = ({toggleIsOpenForm}) => {
  return (
    <>
      {programArr.map(p => {
        return <div className={cls.program__item} key={p.id} onClick={() => toggleIsOpenForm(true)}>
          <img className={cls.program__img} src={p.image} alt={p.title} />
          <h4 className={cls.program__subtitle}>{p.title}</h4>
          <div className={cls.program__priceWrap}>
            {/* <img className={cls.program__icon} src={programPrice} alt="цена" /> */}
            <span className={cls.program__priceImg}></span>
            <p className={cls.program__price}>от <span>{p.price} ₽</span></p>
          </div>
        </div>
      })}
    </>
  );
};
