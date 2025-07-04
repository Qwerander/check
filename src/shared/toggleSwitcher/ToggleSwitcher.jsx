import cls from "./ToggleSwitcher.module.scss";

export const ToggleSwitcher = ({
  active,
  toggle,
  leftTitle,
  rightTitle,
}) => {
  return (
    <div className={cls.ToggleSwitcher} onClick={() => toggle(active === 'left' ? 'right' : 'left')}>
      <p className={active === 'left' ? `${cls.ToggleSwitcher__text} ${cls.ToggleSwitcher__text__active}` : `${cls.ToggleSwitcher__text}`}>{leftTitle}</p>
      <p className={active === 'right' ? `${cls.ToggleSwitcher__text} ${cls.ToggleSwitcher__text__active}` : `${cls.ToggleSwitcher__text}`}>{rightTitle}</p>
    </div>
  );
};
