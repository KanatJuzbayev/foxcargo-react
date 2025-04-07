import React, { useState } from "react";
import "./Promo.css";
import Request from "./Request";

const Promo: React.FC = () => {
  const [isRequestVisible, setIsRequestVisible] = useState(false);

  return (
    <section id="promo" className="section promo">
      <div className="wrapper">
        <div className="promo__wrapper">
          <div className="promo__content">
            <h1 className="section__title">Fox Cargo</h1>
            <p className="promo__text">
              — быстроразвивающаяся железнодорожная экспедиторская компания
              нового формата
            </p>
            <p className="promo__text">
              Готовы предложить выгодные условия по предоставлению вагонов, с
              Нами вы получаете минимальные расценки по интересующим Вас
              направлениям.
            </p>
            <p className="promo__text">
              Для получения актуальной ставки в кратчайшие сроки заполните форму
              Расчета ставки
            </p>
            <button
              onClick={() => setIsRequestVisible(true)}
              className="button request__button"
            >
              Расчет ставки
            </button>
          </div>
          <img
            className="promo__image"
            src="assets/image/background-1.jpg"
            alt="Train"
          />
        </div>

        <div className="layout-3-column we-do__elements">
          <div className="service">
            <object
              type="image/svg+xml"
              data="assets/svg/group1.svg"
              className="we-do-object"
            >
              Your browser does not support SVG
            </object>
            <h3 className="service__title">Подвижной состав</h3>
            <p className="service__text">
              Обеспечением вагонами широкого вида подвижного состава.
              Полувагоны, Крытые, Платформы и т.д.
            </p>
          </div>
          <div className="service">
            <object
              type="image/svg+xml"
              data="assets/svg/group3.svg"
              className="we-do-object"
            >
              Your browser does not support SVG
            </object>
            <h3 className="service__title">ЖД сборы</h3>
            <p className="service__text">
              Оплата тарифов по путям следования по территории ближнего и
              дальнего зарубежья.
            </p>
          </div>
          <div className="service">
            <object
              type="image/svg+xml"
              data="assets/svg/group2.svg"
              className="we-do-object"
            >
              Your browser does not support SVG
            </object>
            <h3 className="service__title">Грузы</h3>
            <p className="service__text">
              Поиск погрузки в интересующем вас регионе. Широкая география
              сотрудничества с отправителями.
            </p>
          </div>
        </div>
      </div>
      {isRequestVisible && (
        <Request onClose={() => setIsRequestVisible(false)} />
      )}
    </section>
  );
};

export default Promo;
