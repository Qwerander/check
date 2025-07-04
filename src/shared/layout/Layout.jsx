import cls from './layout.module.scss';

export const Layout = ({ children, clsCustom }) => {
  return <div className={`${cls.layout} ${clsCustom}`}>{children}</div>;
};
