import cls from './whyChooseUs.module.scss';

export const WhyChooseUsItem = ({ icon, title, description }) => {
  return (
    <div className={cls.item}>
      <div className={cls.iconContainer}>
        {icon}
      </div>
      <h3 className={cls.title}>{title}</h3>
      <p className={cls.description}>{description}</p>
    </div>
  );
};