import { Navbar, Table } from "react-bootstrap";
import { useState, useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";
import { Link } from "react-router-dom";
import NavbarHome from "./Navbar";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Agenda() {
  const [notaSeleccionada, setNotaSeleccionada] = useState("");
  const [datosAgenda, setDatosAgenda] = useState([]);
  const { state } = useLocation();
  const userContext = useContext(UsuarioContext);


  useEffect(() => {
    fetchAgendas(userContext.usuario.Id);
  }, []);

  const fetchAgendas = (usuarioId) => {
    axios.get(`http://localhost:3001/agenda/usuario/${usuarioId}`)
      .then((response) => {
        console.log("agenda", response.data);
        const datosAgenda = response.data;
        setDatosAgenda(datosAgenda);
        console.log("agendas:", datosAgenda);
      })
      .catch((error) => {
        console.error("Error al obtener agendas:", error);
      });
  };

  const eliminarNota = (agendaId) => {
    axios.delete(`http://localhost:3001/agenda/${agendaId}`)
      .then(response => {
        setDatosAgenda(datosAgenda.filter((agenda) => agenda.Id !== agendaId));
      })
      .catch(error => {
        console.error("Error al eliminar", error);
      });
  };

  const seleccionarNota = (index) => {
    setNotaSeleccionada(index);
  };

  return (
    <>
      <NavbarHome></NavbarHome>
      <div className="container mt-5">
        <h1 className="text-white mb-3">Agenda</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Teléfono</th>
              <th>Descripción</th>
              <th>Fecha del contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosAgenda && datosAgenda.map((agenda, index) => (
              <tr key={index}>
                <td>
                  {agenda.NombreCliente} {agenda.ApellidoCliente}
                </td>
                <td>
                  {agenda.Telefono}
                </td>
                <td>
                  {agenda.Descripcion}
                </td>
                <td>
                  {new Date(agenda.Fecha).toLocaleDateString()}
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarNota(agenda.Id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Link className="btn btn-primary" to={"/cargar-datos-agenda"}>
            Crear
          </Link>
        </div>
      </div>
    </>
  );
}
export default Agenda;
