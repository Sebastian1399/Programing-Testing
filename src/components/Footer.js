import { Badge, Grid } from "@material-ui/core";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
import React from "react";
import "../css/navbar.css"
import logo from '../assets/macropay.jpg';

function Footer() {
    return (
        <div className="containerf" id="contact">
        <div className="leftf">
        <img className="immagenf" src={logo} alt="Logo" />
          <p className="desc">
          Somos una empresa que ha revolucionado la industria retail con una nueva forma de conectar a las personas a través de la venta de celulares a crédito. 
          Ofrecemos diversos productos financieros, de manera eficiente, ágil, cómoda y confiable.


          </p>
          <div className="socialContainer">
            <div className="socialIcon" color="427ceb">
              <Facebook />
            </div>
            <div className="socialIcon" color="427ceb">
              <Instagram />
            </div>
            <div className="socialIcon" color="427ceb">
              <Twitter />
            </div>

          </div>
        </div>
        <div className="centerf">
          <h3 className="titlef">Enlaces</h3>
          <ul className="list">
            <li className="listItem"><p><a className="listItem" href="#inicio">Inicio</a></p></li>
            <li className="listItem" ><p><a className="listItem" href="#products">Productos</a></p></li>
            <li className="listItem" ><p><a className="listItem" href="#about">¿Quienes Somos?</a></p></li>
            <li className="listItem" ><p><a className="listItem" href="#">Mi cuenta</a></p></li>
          </ul>
        </div>
        <div className="rightf">
          <h3 className="titlef">Contacto</h3>
          <div className="contactItem">
            <Room style={{marginRight:"10px"}}/> Centro Calle 63, entre 58 y 60
          </div>
          <div className="contactItem">
            <Phone style={{marginRight:"10px"}}/> +52 999 181 0391
          </div>
          <div className="contactItem">
            <MailOutline style={{marginRight:"10px"}} /> macropay@gmail.com
          </div>
          <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    );
  }
  
  export default Footer;