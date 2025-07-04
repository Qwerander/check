// import { ReactComponent as DownloadSVG } from '../../../assets/icons/download.svg';
import { ReactComponent as WhatsUpSVG } from "../../../assets/icons/whatsUp.svg";
import { ReactComponent as TelegramSVG } from "../../../assets/icons/telegram.svg";
import { ReactComponent as YoutubeSVG } from "../../../assets/icons/youtube.svg";
// import { ReactComponent as KvantSVG } from "../../../assets/icons/logo-kvant-expert-1с-light.svg";
import { ReactComponent as KvantSVG } from "../../../assets/icons/logo-kvant-expert-1с.svg";
import cls from "./footerBlock.module.scss";

export const FooterPriceListBlock = () => {
  return (
    <div className={`${cls.footer__block} ${cls.footer__blockLogo}`}>
      {/* <h2 className={cls.footer__title}>Скачать прайс-лист:</h2> */}
      {/* <button>Кнрпка</button> */}

      <div className={cls.footer__socialWrap}>
        <span className={cls.footer__connection}>Связь в мессенджерах:</span>
        <div className={cls.footer__social}>
          <a
            className={cls.footer__social__link}
            href="https://wa.me/79991330444"
          >
            <WhatsUpSVG />
            {/* +7 (999) 133-0-444 */}
          </a>
          <a
            className={cls.footer__social__link}
            href="https://t.me/kvant_shop_channel"
          >
            <TelegramSVG />
            {/* @kvantshop_bot */}
          </a>
          <a
            className={cls.footer__social__link}
            href="https://youtube.com/@KvantShop?si=RDhPXQVYzSA9j0p0"
          >
            <YoutubeSVG />
            {/* @kvantshop_bot */}
          </a>
          {/* <a className={cls.footer__social__link} href="https://youtube.com/@KvantShop?si=RDhPXQVYzSA9j0p0"> */}
          {/* <KvantSVG/> */}
          {/* @kvantshop_bot */}
          {/* </a> */}
        </div>
      </div>
      <KvantSVG className={cls.footer__logo} />
    </div>
  );
};
