import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/destacados.css";


export const Destacado = () => (
<div className="row justify-content-center cont">
    <div className="col-4 caru">
    


<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" class="d-block w-100" alt="..."/>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="col-4 ps-4">
      <h1 className="text0" >Mejor para ellos, más fácil y cómodo para ti</h1>
      <p className="">Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana y natural a tu perro de forma cómoda y rápida. Nuestro dispositivo cocina automáticamente la cantidad exacta en cada comida e incluso lo puedes programar a través de la app. Tu perro disfrutará comida de casera de primera calidad, con el mínimo esfuerzo.</p>
      <div className="btnhome1">
          {" "}
          <button type="button" className="btn2 text-white">
            Reserva Ahora
          </button>
          <button type="button" className="btn3">
            Quiero Saber Más
          </button>
        </div>
    
    </div>
  </div>
);
