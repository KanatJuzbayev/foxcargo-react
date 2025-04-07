import React from "react";

const Schema: React.FC = () => {
  return (
    <section id="work-scheme" className="section work-scheme">
      <div className="wrapper work-scheme__wrapper">
        <h2 className="section__title">Схема работы</h2>
        <p>Активная связь и поддержка на каждом этапе работы</p>
        <object
          type="image/svg+xml"
          data="assets/svg/scheme.svg"
          className="scheme-object"
        >
          Your browser does not support SVG
        </object>
        <object
          type="image/svg+xml"
          data="assets/svg/scheme-small.svg"
          className="scheme-object_small"
        >
          Your browser does not support SVG
        </object>
      </div>
    </section>
  );
};

export default Schema;
