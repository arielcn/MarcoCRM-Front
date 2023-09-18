import { Table } from "react-bootstrap";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Agenda() {
    const [agenda, setAgenda] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/agenda')
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
        <div className="container mt-5">
            <h1 className="text-white mb-3">Agenda</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Reunion</th>
                        <th>Fecha</th>
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
                                    <td>Mark Otto</td>
                                    <td>11332112</td>
                                    <td>Problema con stock</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>15232112</td>
                                    <td>Concretar</td>
                                </tr>
                                <tr>
                                    <td>Flecha</td>
                                    <td>11342172</td>
                                    <td>Concretar</td>
                                </tr>
                            </tbody>
                        </Table>
                        </td>
                        <td className="text-center">20/9/2023</td>
                    </tr>
                </tbody>
            </Table>

        </div>
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










