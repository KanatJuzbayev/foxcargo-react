import React from "react";
import CustomHashLink from "./CustomHashLink";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section footer">
      <div className="wrapper footer__wrapper">
        <a className="logo footer__logo" href="#promo__section">
          <object
            type="image/svg+xml"
            data="assets/svg/logo/logo-light.svg"
            className="logo-object footer__logo-object"
          >
            Your browser does not support SVG
          </object>
        </a>
        <div className="layout-2-column footer__navigation">
          <div className="navigation__column first">
            <ul className="footer__navigation_links">
              <li>
                <CustomHashLink className="footer__link transition" to="#promo">
                  Главная
                </CustomHashLink>
                <CustomHashLink
                  className="footer__link transition"
                  to="#about-us"
                >
                  О нас
                </CustomHashLink>
              </li>
            </ul>
          </div>
          <div className="navigation__column second">
            <ul className="footer__navigation_links">
              <CustomHashLink
                className="footer__link transition"
                to="#work-scheme"
              >
                Схема работы
              </CustomHashLink>
              <CustomHashLink
                className="footer__link transition"
                to="#contacts"
              >
                Контакты
              </CustomHashLink>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a
            className="social-media__link instagram"
            href="https://www.instagram.com/"
            target="_blank"
          ></a>
          <a
            className="social-media__link facebook"
            href="https://www.facebook.com/"
            target="_blank"
          ></a>
          <a
            className="social-media__link twitter"
            href="http://twitter.com/"
            target="_blank"
          ></a>
        </div>
      </div>
      <div className="wrapper creates__wrapper">
        <p className="creates">© {year}</p>
        <a className="creator" target="_blank" href="#">
          <p className="creates">Masahiro co</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
