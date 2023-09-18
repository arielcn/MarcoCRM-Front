// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import FormLogin from './Forms/FormLogin';
import Home from "./Pages/Home";
import ElegirUser from './Forms/ElegirUser';
import FormRegisterD from './Forms/FormRegisterD';
import FormRegisterV from './Forms/FormRegisterV';
import CodigoEmpresa from './Forms/CodigoEmpresa';
import ListadoCliente from './Listas/ListadoCliente';
import ListadoVendedor from './Listas/ListadoVendedor';
import CargarDatosC from './Listas/CargarDatosC';
import Agenda from "./Pages/Agenda";
import Tarea from "./Pages/Tarea";
import Reuniones from "./Pages/Reuniones";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FormLogin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/elegir-user" element={<ElegirUser />}></Route>
          <Route path="/registro-d" element={<FormRegisterD />}></Route>
          <Route path="/registro-v" element={<FormRegisterV />}></Route>
          <Route path="/cargar-datos-c" element={<CargarDatosC />}></Route>
          <Route path="/codigo-empresa" element={<CodigoEmpresa />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/listado-cliente" element={<ListadoCliente />}></Route>
          <Route path="/listado-vendedor" element={<ListadoVendedor />}></Route>
          <Route path="/tarea" element={<Tarea />}></Route>
          <Route path="/reuniones" element={<Reuniones />}></Route>
          <Route path="*" element={<h1 className="text-center mt-2 text-white">404: Page not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
