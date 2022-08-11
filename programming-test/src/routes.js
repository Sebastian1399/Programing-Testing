// core components
// import Home from "./views/Administrador/Home";
import Home from '../src/views/Home';
// import Usuario from './views/Administrador/Usuarios';
// import Roles from './views/Administrador/Roles';
// import Generadores from './views/Administrador/Generadores';
// import Compresores from './views/Administrador/Compresores';
// import Ventiladores from './views/Administrador/Ventiladores';
// import Climas from './views/Administrador/Climas';
// import Insumos from './views/Administrador/Insumos';
// import ArticulosLimpieza from './views/Administrador/ArticulosLimpieza';
// import Prestamo from './views/Administrador/Prestamo';
// import Vehiculo from './views/Administrador/Vehiculo';
// import Pruebas from './views/Administrador/Pruebas';
// import Register from "views/auth/Register.js";
// import Clientes from "views/admin/Clientes";
// import Empleados from "views/admin/Catalogos/Empledos";
// import Trabajos from "views/admin/Trabajos";
// import Ventas from "views/admin/Ventas";
// import ClientesDetalles from "views/admin/ClientesDetalles";
// import TrabajoDetalles from "views/admin/TrabajoDetalles";
// import Proveedores from "views/admin/Proveedores";
// @mui/icons-material components
// import HomeRoundedIcon from '@material-ui/icons-material/HomeRounded';
// import AssignmentRoundedIcon from '@material-ui/icons-material/AssignmentRounded';

// import WorkIcon from '@material-ui/icons-material/Work';
// import MonetizationOnRoundedIcon from '@material-ui/icons-material/MonetizationOnRounded';
// import AssignmentIndRoundedIcon from '@material-ui/icons-material/AssignmentIndRounded';
// import LibraryBooksIcon from '@material-ui/icons-material/LibraryBooks';
// import GroupWorkIcon from '@material-ui/icons-material/GroupWork';
// import AttachMoneyIcon from '@material-ui/icons-material/AttachMoney';
// import EventNoteRoundedIcon from '@material-ui/icons-material/EventNoteRounded';

import { ListRounded,AccountCircle, HowToReg, Cloud, Folder, LibraryBooks,HomeRounded,EvStation,Toys, SportsCricket, DirectionsCar, EventNote} from "@material-ui/icons";
// import RequestQuoteRoundedIcon from '@material-ui/icons-material/RequestQuoteRounded';
// import Agenda from "views/admin/Agenda";
// import Presupuestos from "views/admin/Presupuestos";

var routes = [
  {
    path: "/",
    display: true,
    name: "Home",
    icon: HomeRounded,
    iconColor: "Primary",
    component: <Home />,
    layout: "/",
  },
  // {
  //   path: "clientes",
  //   name: "Clientes",
  //   display: true,
  //   icon: AssignmentIndRoundedIcon,
  //   iconColor: "Primary",
  //   component: <Clientes />,
  //   layout: "/",
  // },
  // {
  //   path: "detalles-cliente/:id",
  //   name: "Detalles de cliente",
  //   display: false,
  //   component: <ClientesDetalles />,
  //   layout: "/",
  // }, 
  // {
  //   path: "trabajos",
  //   name: "Trabajos",
  //   display: true,
  //   icon: WorkIcon,
  //   iconColor: "Primary",
  //   component: <Trabajos />,
  //   layout: "/",
  // },
  // {
  //   path: "detalles-trabajo/:id",
  //   name: "Detalles de trabajo",
  //   display: false,
  //   component: <TrabajoDetalles />,
  //   layout: "/",
  // }, 
  // {
  //   path: "ventas",
  //   name: "Ventas",
  //   display: true,
  //   icon: MonetizationOnRoundedIcon,
  //   component: <Ventas />,
  //   iconColor: "Primary",
  //   layout: "/",
  // },
  // {
  //   path: "proveedores",
  //   name: "Proveedores",
  //   display: true,
  //   icon: AssignmentRoundedIcon,
  //   iconColor: "Primary",
  //   component: <Proveedores />,
  //   layout: "/",
  // },
  // {
  //   name: "Catalogos",
  //   collapse: true,
  //   display: true,
  //   icon: LibraryBooks,
  //   iconColor: "Primary",
  //   layout: "/",
  //   List: [
  //     {
  //       path: "usuario",
  //       name: "Usuarios",
  //       icon: AccountCircle,
  //       iconColor: "Error",
  //       component: <Usuario />,
  //       layout: "/",
  //     },
  //     {
  //       path: "roles",
  //       name: "Roles",
  //       icon: HowToReg,
  //       iconColor: "Error",
  //       component: <Roles />,
  //       layout: "/",
  //     },
  //     // {
  //     //   path: "pruebas",
  //     //   name: "Pruebas",
  //     //   icon: EvStation,
  //     //   iconColor: "Error",
  //     //   component: <Pruebas />,
  //     //   layout: "/",
  //     // },
  //     {
  //       path: "generadores",
  //       name: "Generadores",
  //       icon: EvStation,
  //       iconColor: "Error",
  //       component: <Generadores />,
  //       layout: "/",
  //     },
  //     {
  //       path: "compresores",
  //       name: "Compresores",
  //       icon: ListRounded,
  //       iconColor: "Error",
  //       component: <Compresores />,
  //       layout: "/",
  //     },
  //     {
  //       path: "ventiladores",
  //       name: "Ventiladores",
  //       icon: Toys,
  //       iconColor: "Error",
  //       component: <Ventiladores />,
  //       layout: "/",
  //     },
  //     {
  //       path: "climas",
  //       name: "Climas",
  //       icon: Cloud,
  //       iconColor: "Error",
  //       component: <Climas />,
  //       layout: "/",
  //     },
  //     {
  //       path: "insumos",
  //       name: "Insumos",
  //       icon: Folder,
  //       iconColor: "Error",
  //       component: <Insumos />,
  //       layout: "/",
  //     },
  //     {
  //       path: "articuloslimpieza",
  //       name: "ArticulosLimpieza",
  //       icon: SportsCricket,
  //       iconColor: "Error",
  //       component: <ArticulosLimpieza />,
  //       layout: "/",
  //     },
  //     {
  //       path: "prestamo",
  //       name: "Prestamo",
  //       icon: EventNote,
  //       iconColor: "Error",
  //       component: <Prestamo />,
  //       layout: "/",
  //     },
  //     {
  //       path: "vehiculo",
  //       name: "Vehiculo",
  //       icon: DirectionsCar,
  //       iconColor: "Error",
  //       component: <Vehiculo />,
  //       layout: "/",
  //     },
      
  //   ]
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   display: true,
  //   icon: Grain,
  //   iconColor: "Primary",
  //   component: Icons,
  //   layout: "/",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   iconColor: "Primary",
  //   component: Maps,
  //   layout: "/",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: Person,
  //   iconColor: "Primary",
  //   component: Profile,
  //   layout: "/",
  // },
];
export default routes;
