// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import FormLogin from './Forms/FormLogin';
import Home from "./Pages/Home";
import ElegirUser from './Forms/ElegirUser';
import FormRegisterD from './Forms/FormRegisterD';
import FormRegisterV from './Forms/FormRegisterV';
import ListadoCliente from './Listas/ListadoCliente';
import ListadoVendedor from './Listas/ListadoVendedor';
import ListadoTareasEmpresa from "./Listas/ListadoTareasEmpresa";
import CargarDatosC from './Listas/CargarDatosC';
import CargarDatosTarea from "./Listas/CargarDatosTarea.js";
import Agenda from "./Pages/Agenda";
import CargarDatosReunion from "./Listas/CargarDatosReunion";
import Reuniones from "./Pages/Reuniones";
import CargarDatosAgenda from "./Listas/CargarDatosAgenda";
import ListadoReunionesEmpresa from "./Listas/ListadoReunionesEmpresa.js";
import ListadoAgendasEmpresa from "./Listas/ListadoAgendasEmpresa.js";
import ForgotPwd from "./Forms/ForgotPwd";
import EditarPerfil from "./Forms/EditarPerfil";
import Perfil from "./Pages/Perfil";
import { useEffect, useState } from "react";
import UsuarioContext from "./context/UsuarioContext";

function App() {
  const [mailUsuario, setMailUsuario] = useState("");
  const [usuario, setUsuario] = useState();
  const [datosAgenda, setDatosAgenda] = useState([]);
  const [datosReunion, setDatosReunion] = useState([]);
  const [recargarTareas, setRecargarTareas] = useState(false);
  const [recargarClientes, setRecargarClientes] = useState(false);
  const [fkRol, setFkRol] = useState();

  useEffect(() => {
    console.log("MailUsuarioEnApp", mailUsuario);
  }, [mailUsuario])

  useEffect(() => {
    console.log("UsuarioEnApp", usuario);
  }, [usuario])
  
 
  return (
    <BrowserRouter>
      <UsuarioContext.Provider value ={{mailUsuario, setMailUsuario, usuario, setUsuario, datosAgenda, setDatosAgenda, datosReunion, setDatosReunion, recargarTareas, setRecargarTareas, recargarClientes, setRecargarClientes}}>
      <Routes>
          <Route index element={<FormLogin />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/forgot-pwd" element={<ForgotPwd />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/elegir-user" element={<ElegirUser />}></Route>
          <Route path="/registro-d" element={<FormRegisterD />}></Route>
          <Route path="/registro-v" element={<FormRegisterV />}></Route>
          <Route path="/cargar-datos-c" element={<CargarDatosC />}></Route>
          <Route path="/cargar-datos-tarea" element={<CargarDatosTarea />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/listado-cliente" element={<ListadoCliente />}></Route>
          <Route path="/listado-reuniones-empresa" element={<ListadoReunionesEmpresa />}></Route>
          <Route path="/listado-tareas-empresa" element={<ListadoTareasEmpresa />}></Route>
          <Route path="/listado-vendedor" element={<ListadoVendedor />}></Route>
          <Route path="/listado-agendas-empresa" element={<ListadoAgendasEmpresa />}></Route>
          <Route path="/reuniones" element={<Reuniones />}></Route>
          <Route path="/cargar-datos-agenda" element={<CargarDatosAgenda />}></Route>
          <Route path="/cargar-datos-reunion" element={<CargarDatosReunion />}></Route>
          <Route path="/editar-perfil" element={<EditarPerfil />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="*" element={<h1 className="text-center mt-2 text-white">404: Page not found</h1>}></Route>
        </Route>
      </Routes>
      </UsuarioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
