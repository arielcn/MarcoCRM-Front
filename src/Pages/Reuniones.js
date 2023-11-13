import NavbarHome from './Navbar';
import React, { useState } from "react";
import axios from 'axios';
import { Table, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UsuarioContext from "../context/UsuarioContext";
import { useEffect, useContext } from "react";




const Reuniones = () => {

  const { usuario, datosReunion, setDatosReunion } = useContext(UsuarioContext);

  useEffect(() => {
    console.log(usuario);
    const usuarioId = usuario.Id;

    axios.get(`http://localhost:3001/reuniones/${usuarioId}`)
      .then((response) => {
        const r = response.data;
        setDatosReunion([...r]);
        console.log("datos reunion:", r);
      })
      .catch((error) => {
        console.error("Error al obtener reunion:", error);
      });
  }, []);

  const eliminarReunion = (reunionId) => {
    axios.delete(`http://localhost:3001/reuniones/${reunionId}`)
      .then(response => {
        setDatosReunion(datosReunion.filter((Reunion) => Reunion.Id !== reunionId));
      })
      .catch(error => {
        console.error("Error al eliminar", error);
      });
  };


  return (
    <>
      <NavbarHome></NavbarHome>
      <div className="container mt-5">
        <h1 className="text-white mb-3">Reuniones</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Título</th>
              <th>Formato</th>
              <th>Fecha</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosReunion.length > 0 ? 
              (datosReunion.map((reunion, index) => (
              <tr key={index}>
                <td>
                  {reunion.Titulo}
                </td>
                <td>
                  {reunion.Formato}
                </td>
                <td>
                  {new Date(reunion.FechaYHora).toLocaleDateString()}
                </td>
                <td>
                  <img src={reunion.Imagen}></img>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarReunion(reunion.Id)}>
                    Eliminar
                  </button>
                </td>
              </tr>)))
              : <></>
            }
          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Link className="btn btn-primary" to={"/cargar-datos-reunion"}>
            Crear
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reuniones;
