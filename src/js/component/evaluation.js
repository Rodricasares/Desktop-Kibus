import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/evaluation.css";
import eat from "../../img/eat.png";
import phone from "../../img/phone.png";
import icon from "../../img/icon.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";
import icon5 from "../../img/icon5.png";




export const Evaluation = () => (
  <div className="row evalu">
    <div className="col-4 iconCol  ">  
    <img className="icon" src={icon}  />
    <img className="icon" src={icon1}  />
    <img className="icon" src={icon2}  />
    <img className="icon" src={icon3}  />
    <img className="icon" src={icon4}  />
    <img className="icon" src={icon5}  />
    </div>
    <div className="col-4">
      <img className="eat" src={phone} />
    </div>
  </div>
);
