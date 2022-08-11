import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import "../css/navbar.css";

import { useNavigate } from "react-router-dom";
import Home from "../views/Home";
import { useState } from "react";
// import Modal from "../components/Modal";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Product = ({ item }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="containerproducto" id="products">
      <div className="circle" />

      <img className="imageproducto" src={item.img} />

    
      <div className="infoproducto">
        <div>
          <p className="spanprodcutos">{item.marca}</p>
          <p className="spanprodcutos">{item.modelo}</p>
          <p className="spanprodcutos">{item.precio}</p>
          <div>
          
    
            <>
      <Button onClick={handleShow} >
      <SearchOutlined />
      </Button>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.marca}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img className="imageproducto2" src={item.img} />
        <p className="modalproductos"> {item.modelo}</p>
        <p className="modalproductos">  {item.precio}</p>
      
        <table>
  <tr>
    <th className="th">Pantalla</th>
    <th className="th">Cámara</th>
    <th className="th">Chip</th>
  </tr>
  <tr className="tr">
    <td>{item.pantalla}</td>
    <td>{item.camara}</td>
    <td>{item.chip}</td>
  </tr>
  </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
            
        </Modal.Footer>
      </Modal>
    </>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
