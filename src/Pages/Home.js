import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarHome from './Navbar';
import { Card, Col, Modal, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import UsuarioContext from '../context/UsuarioContext';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [tareas, setTareas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
    const [tareasVerdes, setTareasVerdes] = useState([])
    const [tareasAmarillas, setTareasAmarillas] = useState([])
    const [tareasRojas, setTareasRojas] = useState([])

    const userContext = useContext(UsuarioContext);

    useEffect(() => {
        fetchTareas(userContext.usuario.Id);
    }, []);

    useEffect(() => {
        console.log("JOEMAMA", tareas);

        setTareasVerdes([...tareas.filter(tarea => tarea.Estado === 'Realizado')]);
        setTareasAmarillas([...tareas.filter(tarea => tarea.Estado === 'Por realizar')]);
        setTareasRojas([...tareas.filter(tarea => tarea.Estado === 'Urgente')]);
    }, [tareas]);

    const fetchTareas = (idUsuario) => {
        axios.get(`http://localhost:3001/tareas/${idUsuario}`)
            .then(response => {
                const tareasResponse = response.data;
                console.log("sus", response.data)
                setTareas([...tareasResponse]);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchTareaInfo = (id) => {
        axios.get(`http://localhost:3001/tareas/${id}`)
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

    const cambiarEstadoTarea = (tarea, newEstado) => {
        console.log("TAREA, CAMBIARESTADO", tarea);
        axios.put(`http://localhost:3001/tareas/${tarea.Id}`, { ...tarea, "Estado": newEstado })
            .then(response => {
                const tareaActualizada = response.data;
                console.log("TareaActualizada", tareaActualizada);
                const nuevasTareas = tareas.map(tarea => {
                    if (tarea.Id === tareaActualizada.Id) {
                        return tareaActualizada;
                    }
                    console.log("ID de la tarea:", tarea.Id);
                    console.log("Nuevo estado:", newEstado);
                    return tarea;
                    
                });
                setTareas([...nuevasTareas]);
    
                // Clasificar las tarjetas en las columnas adecuadas
                setTareasVerdes(nuevasTareas.filter(tarea => tarea.Estado === 'Realizado'));
                setTareasAmarillas(nuevasTareas.filter(tarea => tarea.Estado === 'Por realizar'));
                setTareasRojas(nuevasTareas.filter(tarea => tarea.Estado === 'Urgente'));
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <>
            <NavbarHome></NavbarHome>
            <div className="container text-center">
                <div className="flex-container">
                    <div className="column">
                        <h3>Tareas Realizadas</h3>
                        {tareasVerdes.map((tarea) => (
                            <Card key={tarea.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{tarea.Titulo}</Card.Title>
                                    <Card.Text>{tarea.Nota}</Card.Text>
                                    <Button variant="success" onClick={() => cambiarEstadoTarea(tarea, 'Realizado')}>
                                        Realizado
                                    </Button>
                                    <Button variant="warning" onClick={() => cambiarEstadoTarea(tarea, 'Por realizar')}>
                                        Por Realizar
                                    </Button>
                                    <Button variant="danger" onClick={() => cambiarEstadoTarea(tarea, 'Urgente')}>
                                        Urgente
                                    </Button>
                                    <button className="detail-button" onClick={() => openModal(tarea)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div className="column">
                        <h3>Tareas Por Realizar</h3>
                        {tareasAmarillas.map((tarea) => (
                            <Card key={tarea.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{tarea.Titulo}</Card.Title>
                                    <Card.Text>{tarea.Nota}</Card.Text>
                                    <Button variant="success" onClick={() => cambiarEstadoTarea(tarea, 'Realizado')}>
                                        Realizado
                                    </Button>
                                    <Button variant="warning" onClick={() => cambiarEstadoTarea(tarea, 'Por realizar')}>
                                        Por Realizar
                                    </Button>
                                    <Button variant="danger" onClick={() => cambiarEstadoTarea(tarea, 'Urgente')}>
                                        Urgente
                                    </Button>
                                    <button className="detail-button" onClick={() => openModal(tarea)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div className="column">
                        <h3>Tareas Urgentes</h3>
                        {tareasRojas.map((tarea) => (
                            <Card key={tarea.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{tarea.Titulo}</Card.Title>
                                    <Card.Text>{tarea.Nota}</Card.Text>
                                    <Button variant="success" onClick={() => cambiarEstadoTarea(tarea, 'Realizado')}>
                                        Realizado
                                    </Button>
                                    <Button variant="warning" onClick={() => cambiarEstadoTarea(tarea, 'Por realizar')}>
                                        Por Realizar
                                    </Button>
                                    <Button variant="danger" onClick={() => cambiarEstadoTarea(tarea, 'Urgente')}>
                                        Urgente
                                    </Button>
                                    <button className="detail-button" onClick={() => openModal(tarea)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {tareaSeleccionada && (
                        <div>
                            <h4>Nombre: {tareaSeleccionada.Titulo}</h4>
                            <p>Descripción: {tareaSeleccionada.Nota}</p>
                            <p>Fecha: {tareaSeleccionada.Fecha}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <button onClick={() => { navigate('/cargar-datos-tarea') }} className="btn btn-secondary" type="submit">Crear tarea</button>
            {userContext.usuario.fkRol === 1 && (
                <button onClick={() => navigate('/listado-tareas-empresa')} className="btn btn-primary" type="submit">
                    Ver tareas de los vendedores
                </button>
            )}


        </>
    )
}

export default Home;
