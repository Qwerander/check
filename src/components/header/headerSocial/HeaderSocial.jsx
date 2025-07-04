import cls from "./HeaderSocial.module.scss";
// import { ReactComponent as Logo } from '../../img/logo/logo-dark.svg';
import { ReactComponent as WhatsUpSVG } from "../../../assets/icons/whatsUp.svg";
import { ReactComponent as TelegramSVG } from "../../../assets/icons/telegram.svg";
import { ReactComponent as YoutubeSVG } from "../../../assets/icons/youtube.svg";

export const HeaderSocial = () => {
  return (
    <div className={cls.social}>
      <a
        className={cls.social__link}
        href="https://wa.me/79991330444"
      >
        <WhatsUpSVG />
      </a>
      <a
        className={cls.social__link}
        href="https://t.me/kvant_shop_channel"
      >
        <TelegramSVG />
      </a>
      <a
        className={cls.social__link}
        href="https://youtube.com/@KvantShop?si=RDhPXQVYzSA9j0p0"
      >
        <YoutubeSVG />
      </a>
    </div>
  );
};
