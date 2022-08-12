import {
  Badge,
  Grid,
  TextField,
  Box,
  FormControlLabel,
  Link,
  Avatar,
} from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  SearchOutlined,
  LockOutlined,
} from "@material-ui/icons";
import React from "react";
import "../css/navbar.css";
import logo from "../assets/macropay.jpg";
import { useState } from "react";
// import Modal from "../components/Modal";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Navbars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container" id="inicio">
      <div className="wrapper">
        <div className="left">
          <p>
            <a className="menuItem" href="#products">
              Productos
            </a>
          </p>
          <p>
            <a className="menuItem" href="#about">
              Acerca de Nosotros
            </a>
          </p>
          <p>
            <a className="menuItem" href="#contact">
              Contacto
            </a>
          </p>
        </div>
        <div className="center">
          <img className="immagen" src={logo} alt="Logo" />
        </div>
        <div className="right">
          <div className="menuItem">Register</div>

          <button
            type="button"
            className="buttonlogin"
            onClick={handleShow}
            value="Ir"
          >
            Inicio de Sesion
          </button>

          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title> Iniciar Sesion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="contenedorlog">
              <Avatar>
                <LockOutlined />
              </Avatar>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="Correo"
                label="Correo Electronico"
                name="Correo"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <button type="button" className="buttonloginmodal" value="Ir">
                Inicio de Sesion
              </button>
            </div>
          </Modal.Body>
          
        </Modal>
      </>
    </div>
  );
}

export default Navbars;
