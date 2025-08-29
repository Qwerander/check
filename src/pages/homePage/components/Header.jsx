import { useState, useEffect } from "react";
import { Layout } from "../../../shared/layout/Layout";
import logo from "../../../assets/icons/header/logo.svg";

export const Header = ({ toggleIsOpenForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header header--scroll ${isMenuOpen ? "header-open" : ""}`}
    >
      <Layout>
        <div className="header__wrap">
          <a className="header__logo" href="/">
            <img src={logo} alt="Logo" loading="lazy" />
          </a>
          <nav className="header__navigation">
            <div className="header__nav-wrap">
              <div className="header__nav-inner">
                <ul className="header__menu">
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#benefits"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Преимущества
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#adventages"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Особенности
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#docs"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Документы
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#know"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Полезно знать
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#contacts"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
                <div className="header__buttons">
                  <button
                    className="header__link"
                    onClick={() => toggleIsOpenForm(true)}
                  >
                    Сделать заказ
                  </button>
                </div>
              </div>
            </div>
            <button
              className="header__burger"
              type="button"
              onClick={toggleMenu}
            >
              <span>открыть/закрыть меню</span>
            </button>
          </nav>
        </div>
      </Layout>
    </header>
  );
};
