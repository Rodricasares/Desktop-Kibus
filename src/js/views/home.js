import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import kibus from "../../img/111kibus.png";
import point from "../../img/point.png";

export const Home = () => (
  <div className="container home">
    <div className="row justify-content-center">
      <div className="col-4">
        <h1 className="text1">
          Alimentar bien a tu perro es más fácil que nunca{" "}
          <img className="point rounded-circle" src={point} />
        </h1>
        <p className="lead text2">
          La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
          tu compañero comida sana, rica y recién cocinada de una forma fácil y
          cómoda
        </p>
        <div className="btnhome">
          {" "}
          <button type="button" className="boton  text-white">
            Reserva Ahora
          </button>
          <button type="button" className="botonDos  text-white">
            Reserva Ahora
          </button>
        </div>
      </div>
      <div className="col-4 d-flex ms-5">
        <img className="kibus" src={kibus} />
      </div>
    </div>
  </div>
);
