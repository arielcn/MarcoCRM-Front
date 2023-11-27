import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import UsuarioContext from "../context/UsuarioContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const CargarDatosTarea = () => {
    const [titulo, setTitulo] = useState("");
    const [nota, setNota] = useState("");
    const [estado, setEstado] = useState("");
    const [fecha, setFecha] = useState("");
    const [error, setError] = useState('')
    const userContext = useContext(UsuarioContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload
        console.log(userContext)
        let tarea = {
            Titulo: titulo,
            Nota: nota,
            Estado: estado,
            Fecha: fecha,
            fkUsuario: userContext.usuario.Id
        };
        console.log("tareaaaaa", tarea);

        axios.post("http://localhost:3001/tareas", tarea)
            .then(res => {  
                userContext.setRecargarTareas(!userContext.recargarTareas)
                setError('')
                navigate("/home")
            })
            .catch(err => {
                setError("tarea ya existente");
                console.log("ERROR!", err);
            });
    }
    const handleEstadoChange = (selectedEstado) => {
        setEstado(selectedEstado);
    };

    return (

        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="fs-4 text-white"><b>Título de la tarea</b></Form.Label>
                        <Form.Control type="text" placeholder="Titulo" required value={titulo} onChange={(e => setTitulo(e.target.value))} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="fs-4 text-white"><b>Descripción</b></Form.Label>
                        <Form.Control type="text" placeholder="Descripción" required value={nota} onChange={(e => setNota(e.target.value))} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <DropdownButton id="dropdown-basic-button" title="Estado de la tarea">
                        <Dropdown.Item onClick={() => handleEstadoChange('Realizado')}>Realizado</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEstadoChange('Por realizar')}>Por realizar</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEstadoChange('Urgente')}>Urgente</Dropdown.Item>

                    </DropdownButton>
                    {estado && (
                        <p style={{ color: 'white' }}>Seleccionado: {estado}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Fecha</b></Form.Label>
                    <Form.Control type="date" placeholder="Descripción" required value={fecha} onChange={(e => setFecha(e.target.value))} />
                </Form.Group>
                <button className="btn btn-primary" type="submit">Guardar</button>
                <button onClick={() => { navigate('/home') }} className="btn btn-danger" type="submit">Cancelar</button>

                <p className="text-danger mt-2">{error}</p>
            </Form>
        </div>

    );
}

export default CargarDatosTarea;