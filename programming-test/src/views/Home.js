import React, { Component, useState, useEffect } from "react";
import {
    Modal,
    Paper,
    Avatar,
    CardActions,
    CardContent,
    // CardHeader,
    CssBaseline,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Box,
    Grid,
    Typography,
    Card,
    Hidden,
    IconButton,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Container
} from '@material-ui/core'

import { Add } from "@material-ui/icons";

import {
    DeleteForever,
    AddBox,
    Edit,
    Search,
    Clear,
    Close,
    ChevronRight,
    ChevronLeft,
    FilterList,
    FirstPage,
    LastPage,
    ViewColumn,
    Remove,
    ArrowDownward,
    Check,
    SaveAlt
} from "@material-ui/icons";
import Navbars from "../components/Navbar"


function Home() {
    

    return (
        <>
            <Container >
               
                <Navbars/>
                {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
        Somos una empresa de manufactura y desarrollo de productos innovadores en materia de control, distribución, cuidado, del agua y energía. Tenemos el compromiso de hacer estos productos de la mejor calidad para nuestros clientes porque consideramos un privilegio servirles, cumplir, o mejor exceder sus expectativas.
Nuestra visión es ser referente y líder en el mercado internacional de nuevas tecnologías sustentables y mas eficientes en la distribución de agua y energía, ser sinónimo del cambio de paradigma. 
Establecidos en México con el honor de tener clientes en mas de 10 países, no dude en contactarnos y permitirnos darle la atención que nos distingue, desde cualquier lugar que se encuentre seguro tenemos una solución a su medida.
        </Typography> */}
          
            </Container >

        </>
    )
}

export default Home
