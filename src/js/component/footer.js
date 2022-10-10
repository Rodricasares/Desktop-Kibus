import React, { Component } from "react";
import "../../styles/footer.css";
import contact from "../../img/contact.png";
import logo from "../../img/logo1.png";
import pago from "../../img/pago.png";


export const Footer = () => (
	<footer className="mt-auto py-3 text-center">
	  <div className="container footer">
  
  <div className="d-flex justify-content-around">
  <div className="card border-0 bg-transparent" >
  <img className="logo1" src={logo}/>
    <div className="card-body">
    <h3 className="card-titulo text-white">Sobre KIBUS</h3>
    <p className="card-texto text-white text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
  </div>
</div>

  <div className="card border-0 bg-transparent politica" >
    <div className="card-body">
    <h3 className="card-titulo1 text-white text-start ">Políticas</h3>
    <p className="text-white polit text-start">Políticas de Privacidad</p>
	<p className="text-white polit text-start">Condiciones de uso</p>
	<p className="text-white polit text-start">Cookies</p>
	<p className="text-white polit text-start">FAQ</p>
    </div>
</div>

<div className="card border-0 bg-transparent contacto " >
  <img className="card-titulo imgContacto" src={contact}/>

 
</div>
  
<div className="card border-0 bg-transparent pago" >
    <div className="card-body">
	<h6 className="card-titulo2 text-white text-start">Métods de pago</h6>
	<img className="imgPago" src={pago}/>
  </div>
</div>


</div>
</div>

	</footer>
);
