import { Table } from "react-bootstrap";
import axios from "axios";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


function Agenda() {
    const [agenda, setAgenda] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();



    useEffect(() => {
        axios.get('http://localhost:3001/agendas')
            .then((response) => {
                console.log(response)
                const datosAgenda = response.data;
                setAgenda(datosAgenda);
                console.log(datosAgenda)
            })
            .catch((error) => {
                console.error("Error al obtener agenda:", error);
            });

    }, []);


    return (
        <>
            <h1>Agenda</h1>
            <Table striped bordered hover>
                {agenda.map((agenda, index) => (

                    <div>
                        <thead>
                            <tr>
                                <th>Nombre del cliente</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                                <th>Descrición</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr key={agenda.id}>
                                <td>{agenda.nombreCliente}</td>
                                <td>{agenda.apellidoCLiente}</td>
                                <td>{agenda.telefono}</td>
                                <td>{agenda.descripcion}</td>
                            </tr>

                        </tbody>
                    </div>


                ))}


            </Table>
        </>
    );
}

export default Agenda;







/*import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';

const Agenda = () => {

    const [agenda, setAgenda] = useState(null);


    return (


        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
                <title>Agenda</title>
            </head>

            <body>
                <div class="container">
                    <h1>Agenda</h1>
                    <div class="__form_add">
                        <div class="row">
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control name__field"
                                    placeholder="Nombre y Apellido"
                                />
                            </div>
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control street__field"
                                    placeholder="Dirección"
                                />
                            </div>
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control phone__field"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div class="col-3">
                                <button class="btn btn-success" onclick="addPerson()">
                                    Agregar
                                </button>
                                <button class="btn btn-primary" onclick="addRandomPerson()">
                                    Aleatoria
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="__table mt-3">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre y Apellido</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Teléfono</th>
                                </tr>
                            </thead>
                            <tbody class="table__main">
                            </tbody>
                        </table>
                    </div>
                </div>

                
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"
                ></script>
                <script src="./Agenda.js" defer></script>
            </body>
        </html>



    )

}*/










