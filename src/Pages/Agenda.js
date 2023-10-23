import { Navbar, Table } from "react-bootstrap";
import { useState, useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";
import { Link } from "react-router-dom";
import Navbarr from "./Navbar";
import React from 'react';

function Agenda() {
  const [notaSeleccionada, setNotaSeleccionada] = useState("");

  const { datosAgenda, setDatosAgenda } = useContext(UsuarioContext);

  const eliminarNota = (agendaId) => {
    setDatosAgenda(datosAgenda.filter((agenda) => agenda.id !== agendaId));
  };

  const seleccionarNota = (index) => {
    setNotaSeleccionada(index);
  };

  return (
    <>
      <Navbarr></Navbarr>
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
                    <tr>
                      {datosAgenda.map((agenda, index) => (
                        <a
                          key={index}
                          className={`list-group-item list-group-item-primary ${notaSeleccionada === index ? "active" : ""
                            }`}
                          onClick={() => seleccionarNota(index)}
                          data-bs-toggle="list"
                          href={`#list-name-${index}`}
                          role="tab"
                          aria-controls={`list-name-${index}`}
                        >
                          <tr>
                            <th>{agenda.NombreCliente}</th>
                            <th>{agenda.ApellidoCliente}</th>
                            <th>{agenda.TelefonoCliente}</th>
                            <th>{agenda.Descripcion}</th>
                            <button
                              className="btn btn-danger"
                              onClick={() => eliminarNota(agenda.id)}
                            >
                              Eliminar
                            </button>
                          </tr>
                          <td className="text-center">{agenda.Fecha}</td>
                        </a>
                      ))}
                    </tr>
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
