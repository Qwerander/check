import { Title } from "../../shared/title/Title";
import cls from "./Benefits.module.scss";
import img1 from "../../assets/img/benefits/benefits-img-1.svg"
import img2 from "../../assets/img/benefits/benefits-img-2.svg"
import img3 from "../../assets/img/benefits/benefits-img-3.svg"
import img4 from "../../assets/img/benefits/benefits-img-4.svg"
import img5 from "../../assets/img/benefits/benefits-img-5.svg"
import { BenefitsBlock } from "./BenefitsBlock";

const benefits = [
  {
    title: "Организуем бухгалтерию под ключ",
    text: "Возьмем на себя ведение бухгалтерского и налогового учета, своевременное начисление налогов и выплату зарплат. Мы грамотно организуем работу, чтобы предприниматель мог сосредоточиться на бизнесе.",
    image: img1
  },
  {
    title: "Работает целая команда бухгалтеров и юристов",
    text: "За каждым клиентом закрепляется команда: главный бухгалтер, его заместитель, бухгалтер по зарплате, бухгалтер по первичной документации и юрист. Юрист необходим для предотвращения судебных споров, которые могут возникнуть из-за ошибок в договорах и первичной документации.",
    image: img2
  },
  {
    title: "Держим высокие стандарты",
    text: "Ведем бухгалтерский и налоговий учет клиента так, чтобы предотвратить налоговые риски, а не только минимизировать их. Этим у нас занимается служба внутреннего аудита.",
    image: img3
  },
  {
    title: "Несем ответственность и гарантируем результат",
    text: "Мы гарантируем результаты нашей работы. Наша гражданская ответственность перед клиентами застрахована на 4 миллиона рублей.",
    image: img4
  },
  {
    title: "Будем всегда на связи",
    text: "Оперативно и развернуто ответим на ваши вопросы по телефону, электронной почте ли в чате в Viber и Telegram.",
    image: img5
  },
];

export const Benefits = () => {
  return (
    <>
      <Title
        Tag={"h2"}
        title={"Чем мы лучше, чем онлайн-сервис или бухгалтер от вашего банка?"}
      />
      <div className={cls.Benefits}>
        {benefits.map((item, i) => {
          return <BenefitsBlock title={item.title} text={item.text} image={item.image} key={i}/>
        })}
      </div>
    </>
  );
};
