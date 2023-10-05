import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import UsuarioContext from "../context/UsuarioContext";


const CargarDatosAgenda = () => {
    const[nombreCliente, setNombreCliente] = useState("");
    const[apellidoCliente, setApellidoCliente] = useState("");
    const[telefono, setTelefono] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const[fecha, setFecha] = useState("");
    const [error, setError] = useState('')
    const userContext = useContext(UsuarioContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let agenda = {
            NombreCliente: nombreCliente,
            ApellidoCliente: apellidoCliente,
            Telefono: telefono,
            Descripcion: descripcion,
            Fecha: fecha,
            fkUsuario: userContext.mailUsuario
        };
        console.log(agenda);

        axios.post("http://localhost:3001/agenda", agenda)
            .then(res => {
                setError('')
                navigate("/agenda")
            })
            .catch(err => {
                setError("reunion ya existente");
                console.log("ERROR!", err);
            });
    }

    return (
        
            <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="fs-4 text-white"><b>Nombre del cliente</b></Form.Label>
                        <Form.Control type="text" placeholder="Nombre" required value={nombreCliente} onChange={(e => setNombreCliente(e.target.value))} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="fs-4 text-white"><b>Apellido del cliente</b></Form.Label>
                        <Form.Control type="text" placeholder="Apellido" required value={apellidoCliente} onChange={(e => setApellidoCliente(e.target.value))} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Teléfono del cliente</b></Form.Label>
                    <Form.Control type="number" placeholder="Teléfono" required value={telefono} onChange={(e => setTelefono(e.target.value))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Descripción</b></Form.Label>
                    <Form.Control type="text" placeholder="Descripción" required value={descripcion} onChange={(e => setDescripcion(e.target.value))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Fecha agendada</b></Form.Label>
                    <Form.Control type="date" placeholder="Fecha" required value={fecha} onChange={(e => setFecha(e.target.value))} />
                </Form.Group>

                <button className="btn btn-primary" type="submit">Guardar</button>
                <button onClick={() => { navigate('/agenda') }} className="btn btn-danger" type="submit">Cancelar</button>

                <p className="text-danger mt-2">{error}</p>
            </Form>
        </div>

    );






}

export default CargarDatosAgenda;