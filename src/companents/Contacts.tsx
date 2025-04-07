import React from "react";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="section contacts">
      <div className="wrapper contacts__wrapper">
        <div className="layout-2-column">
          <div className="contacts__content">
            <p className="section__title">ТОО Фокс Карго</p>
            <div className="contacts-info">
              <p>
                Адрес: 161300 Казахстан, Туркестанская обл., <br />
                г. Шымкент, ул. Биназар Батыр 193А
              </p>
              <p>
                тел:
                <a className="contacts-info__link" href="tel:+77273270007">
                  + 7 727 327 0007
                </a>
              </p>
              <p>
                моб:
                <a className="contacts-info__link" href="tel:+77079009392">
                  + 7 707 900 9392
                </a>
              </p>
              <p>
                email:
                <a
                  className="contacts-info__link"
                  href="mailto:info@foxcargo.kz"
                >
                  info@foxcargo.kz
                </a>
                <a
                  className="contacts-info__link"
                  href="mailto:logistic.specialist@foxcargo.kz"
                >
                  {" "}
                  logistic.specialist@foxcargo.kz
                </a>
              </p>
            </div>
            <form action="" method="post">
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Имя"
                required
              />
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Ваш email"
                required
              />
              <div className="contact-us__button">
                <button className="button contacts__button" type="submit">
                  Связаться с нами →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
