import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarHome from './Navbar';
import { Card, Col, Modal, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();
    const [tareas, setTareas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    useEffect(() => {
        fetchTareas();
    }, []);

    const fetchTareas = () => {
        axios.get('http://localhost:3001/tarea')
            .then(response => {
                const tareasResponse = response.data.tareas;
                console.log("tareas:", tareasResponse);
                setTareas([...tareasResponse]);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchTareaInfo = (id) => {
        axios.get(`http://localhost:3001/tarea${id}`)
            .then(response => {
                console.log(response.data);
                navigate(`/tarea/${id}`);
            })
            .catch(error => {
                console.error(error);
            });

    };
    const openModal = (tarea) => {
        setTareaSeleccionada(tarea);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const cambiarEstadoTarea = (id, nuevoEstado) => {
        // Lógica para actualizar el estado de la tarea en el backend
        // Puedes usar axios.put o axios.patch para enviar la actualización al servidor
        // Recuerda actualizar el estado local (setTareas) una vez que se confirme la actualización en el servidor
    };

    const tareasVerdes = (tareas || []).filter(tarea => tarea.color === 'verde');
    const tareasAmarillas = (tareas || []).filter(tarea => tarea.color === 'amarillo');
    const tareasRojas = (tareas || []).filter(tarea => tarea.color === 'rojo');

    return (
        <>
            <NavbarHome></NavbarHome>
            <div className="container text-center">
                <Row xs={1} md={2} className="g-4">
                    {tareas.map((tarea) => (
                        <Col md={3} key={tarea.Id}>
                            <Card className="card text-center">
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title className="tituloCard">{tarea.Titulo}</Card.Title>
                                    <Card.Text className="descCard">{tarea.Nota}</Card.Text>
                                    <button className="detail-button" onClick={() => openModal(tarea)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Display project details from the selectedProject */}
                    {tareaSeleccionada && (
                        <div>
                            <h4>Nombre: {tareaSeleccionada.Titulo}</h4>
                            <p>Descripción: {tareaSeleccionada.Nota}</p>
                            <p>Fecha: {tareaSeleccionada.Fecha}</p>
                            {/* Display more project details as needed */}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Home;
