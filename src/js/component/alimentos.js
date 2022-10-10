import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/alimentos.css";
import pollo from "../../img/receta0.png";
import receta1 from "../../img/receta1.png";
import receta2 from "../../img/receta2.png";
import receta3 from "../../img/receta3.png";

export const Alimentos = () => (

<div className="jumbotron jumbotron-fluid">


  <div className="container alimentos">
  
  <div className="d-flex justify-content-around">
  <div className="card border-0" >
  <img src={pollo} className="card-img-top pollo" alt="..." />
  <div className="card-body">
    <h3 className="card-title">Pollo y Pimiento</h3>
    <p className="card-text ">Energética, con ingredientes antioxidantes</p>
  </div>
</div>

<div className="card border-0" >
  <img src={receta1} className="card-img-top pollo" alt="..." />
  <div className="card-body">
    <h3 className="card-title ">Salmón y Arroz</h3>
    <p className="card-text ">Ipoalergénica, con Omega 3 y 6</p>
  </div>
</div>

<div className="card border-0" >
  <img src={receta2} className="card-img-top pollo" alt="..." />
  <div className="card-body">
    <h3 className="card-title ">Cerdo y Calabaza</h3>
    <p className="card-text ">para dar vitalidad buena para el sistema inmune</p>
  </div>
</div>

<div className="card border-0" >
  <img src={receta3} className="card-img-top pollo" alt="..." />
  <div className="card-body">
  <button type="button" className="btn rounded-pill text-white badge ">Tu Receta</button>
    <p className="card-text last ">Ayúdanos a decidir nuestra nueva receta</p>
  </div>
</div>
</div>
  </div>
</div>
);
