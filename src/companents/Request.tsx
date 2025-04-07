import React from "react";
import "./Request.css";

interface RequestProps {
  onClose: () => void;
}

const Request: React.FC<RequestProps> = ({ onClose }) => {
  return (
    <div onClick={onClose} id="request" className="request">
      <div onClick={(e) => e.stopPropagation()} className="wrapper">
        <form className="layout-2-column request__wrapper" action="">
          <div className="inputs">
            <h3 className="content__title request-form__title">
              Расчет ставки
            </h3>
            <input
              type="text"
              name="name"
              className="request__input name"
              placeholder="Ваше имя"
              required
            />
            <input
              type="email"
              name="email"
              className="request__input email"
              placeholder="email"
              required
            />
            <input
              type="tel"
              name="tel"
              className="request__input tel"
              placeholder="+ 7 ( _ _ _ ) _ _ _  _ _  _ _"
              required
            />
            <input
              type="text"
              name="departure"
              className="request__input departure"
              placeholder="Станция отправления"
              required
            />
            <input
              type="text"
              name="arrival"
              className="request__input arrival"
              placeholder="Станция назначения"
              required
            />
            <input
              type="text"
              name="cargo"
              className="request__input cargo"
              placeholder="Груз"
              required
            />
            <select
              name="type"
              className="request__input select__type"
              required
            >
              <option value="" selected>
                -- Тип вагона --
              </option>
              <option value="Крытый">Крытый</option>
              <option value="Полувагон">Полувагон</option>
              <option value="Хоппер">Хоппер</option>
              <option value="Цистерна">Цистерна</option>
              <option value="Изотерм. вагон-термос">
                Изотерм. вагон-термос
              </option>
            </select>
          </div>
          <div className="form__submit">
            <button
              type="submit"
              className="request__input request-form__submit"
            >
              Отправить заявку
            </button>
          </div>
          <button
            type="button"
            name="button"
            className="button__close request__close"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </div>
  );
};

export default Request;
