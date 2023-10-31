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
  const { usuario, datosAgenda, setDatosAgenda } = useContext(UsuarioContext);
  const { state } = useLocation();

  useEffect(() => {
    console.log(usuario);
    const usuarioId = usuario.Id;
    
    axios.get(`http://localhost:3001/agenda/${usuarioId}`)
      .then((response) => {
        console.log(response);
        const datosAgenda = response.data;
        setDatosAgenda(datosAgenda);
        console.log("notas agendadas:", datosAgenda);
      })
      .catch((error) => {
        console.error("Error al obtener notas agendadas:", error);
      });
  }, []);

  const eliminarNota = (agendaId) => {
    setDatosAgenda(datosAgenda.filter((agenda) => agenda.id !== agendaId));
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
              <th>Notas</th>
              <th>Fecha del contacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Table striped variant="dark">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Telefono</th>
                      <th>Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                      {datosAgenda && datosAgenda.map((agenda, index) => (
                    <tr>
                        <div
                          key={index}
                          className={`list-group-item list-group-item-primary ${
                            notaSeleccionada === index ? "active" : ""
                          }`}
                        >
                          <div>
                            <td>
                              {agenda.NombreCliente} {agenda.ApellidoCliente}
                            </td>
                            <td>{agenda.Telefono}</td>
                            <td>{agenda.Descripcion}</td>
                            <button
                              className="btn btn-danger"
                              onClick={() => eliminarNota(agenda.Id)}
                            >
                              Eliminar
                            </button>
                          </div>
                          <div className="text-center">{agenda.Fecha}</div>
                        </div>
                    </tr>
                      ))}
                  </tbody>
                </Table>
              </td>
            </tr>
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
