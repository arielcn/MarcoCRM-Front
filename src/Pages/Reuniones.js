import NavbarHome from './Navbar';
import React from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import UsuarioContext from "../context/UsuarioContext";
import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';



const Reuniones = () => {

  const { usuario, datosReunion, setDatosReunion } = useContext(UsuarioContext);
  const userContext = useContext(UsuarioContext);
  const navigate = useNavigate();


  useEffect(() => {
    console.log(usuario);
    const usuarioId = userContext.usuario.Id;

    axios.get(`http://localhost:3001/reuniones/${usuarioId}`)
      .then((response) => {
        console.log("reuniones", response.data);
        const datosReunion = response.data || [];
        setDatosReunion(datosReunion);
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
                    {new Date(reunion.Fecha).toLocaleDateString()}
                  </td>
                  <td>
                    <img src={reunion.Imagen} alt='a'></img>
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
        {userContext.usuario.fkRol === 1 && (
          <button onClick={() => navigate('/listado-reuniones-empresa')} className="btn btn-primary" type="submit">
            Ver reuniones de los vendedores
          </button>
        )}
      </div>
    </>
  );
};

export default Reuniones;
