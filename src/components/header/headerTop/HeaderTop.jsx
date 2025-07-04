import cls from "./HeaderTop.module.scss";
// import { ReactComponent as Logo } from '../../img/logo/logo-dark.svg';
import { ReactComponent as WhatsUpSVG } from "../../../assets/icons/whatsUp.svg";
import { ReactComponent as TelegramSVG } from "../../../assets/icons/telegram.svg";
import { ReactComponent as YoutubeSVG } from "../../../assets/icons/youtube.svg";
import { ReactComponent as PhoneSVG } from "../../../assets/icons/phone.svg";
import { ReactComponent as MailSVG } from "../../../assets/icons/mail.svg";
import { ReactComponent as LogoSVG } from "../../../assets/icons/logo-kvant-expert-1с.svg";
import { HeaderSocial } from "../headerSocial/HeaderSocial";
import { useResize } from "../../../hooks/useRessize";
import { NavLink } from "react-router-dom";

export const HeaderTop = () => {
  const resize560 = useResize(570);
  return (
    <div className={cls.headerTop}>
      {resize560 ? (
        <>
          <div className={cls.headerTop__contacts}>
            <div className={cls.headerTop__phone}>
              <PhoneSVG />
              <a href="tel:+375445551919">+375 (44) 555-19-19</a>
            </div>
            <div className={cls.headerTop__mail}>
              <MailSVG />
              <a href="mailto: info@kvant.shop">info@kvant.shop</a>
            </div>
          </div>

          <div className={cls.headerTop__social}>
            <HeaderSocial />
          </div>
        </>
      ) : (
        <>
          <div className={cls.headerTop__contacts}>
            <div className={cls.headerTop__phone}>
              <PhoneSVG />
              <a href="tel:+375445551919">+375 (44) 555-19-19</a>
            </div>
            <div className={cls.headerTop__mail}>
              <MailSVG />
              <a href="mailto: info@kvant.shop">info@kvant.shop</a>
            </div>
          </div>
          <NavLink to="/">
            <LogoSVG />
          </NavLink>
        </>
      )}
    </div>
  );
};
