import React from "react";
import "./Header.css";

import CustomHashLink from "./CustomHashLink";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <a className="logo header__logo" href="#">
          <img
            src="/assets/svg/logo/logo.svg"
            alt="Company logo"
            className="logo-object"
          />
        </a>
        <nav className="header__navigation navigation" role="navigation">
          <CustomHashLink className="section__link transition" to="#promo">
            Главная
          </CustomHashLink>
          <CustomHashLink className="section__link transition" to="#about-us">
            О нас
          </CustomHashLink>
          <CustomHashLink
            className="section__link transition"
            to="#work-scheme"
          >
            Схема работы
          </CustomHashLink>
          <CustomHashLink className="section__link transition" to="#contacts">
            Контакты
          </CustomHashLink>
        </nav>

        <div className="header__contacts">
          <a
            className="contact__link mail__link"
            href="mailto:info@foxcargo.kz?subject=feedback"
          >
            info@foxcargo.kz
          </a>
          <a className="contact__link phone__link" href="tel:+77273270007">
            +7 727 327 0007
          </a>
        </div>
        <button className="hamburger" aria-label="Toggle navigation">
          <span className="hamburger__line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
