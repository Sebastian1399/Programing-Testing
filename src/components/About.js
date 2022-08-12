import { Send } from "@material-ui/icons";
import logo from '../assets/logos.jpg';

const About = () => {
  return (
    <div className="containerabout" id="about">
     <div class='contenedor'>
 <div class="contenido">
    <div class="inner">
    <h1 className="titleabout">¿Quines Somos?</h1>
    <br></br>
    <p>Somos una empresa que ha revolucionado la industria retail con una nueva forma de conectar a las personas a través de la venta de celulares a crédito. 
      Ofrecemos diversos productos financieros, de manera eficiente, ágil, cómoda y confiable.</p>
    </div>
    <div class="inner"> <img className="immagenabout" src={logo} alt="Logo" /></div>
  </div>
</div>
    </div>
  );
};

export default About;
