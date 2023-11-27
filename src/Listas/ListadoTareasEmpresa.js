import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoTareasEmpresa.css'
import { Card, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioContext';
import { useContext } from 'react';

const ListadoTareasEmpresa = () => {
    const navigate = useNavigate();
    const [tareasPorVendedor, setTareasPorVendedor] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
    const userContext = useContext(UsuarioContext);

    useEffect(() => {
        fetchTareas();
    }, []);

   const fetchTareas = () => {
    axios.get(`http://localhost:3001/tareas/empresa/${userContext.usuario.fkEmpresa}`)
        .then(response => {
            console.log("tumama", response)
            const tareasResponse = response.data;
            const tareasAgrupadas = groupTareasPorVendedor(tareasResponse);
            setTareasPorVendedor(tareasAgrupadas);
        })
        .catch(error => {
            console.error(error);
        });
};


    const groupTareasPorVendedor = (tareas) => {
        // Agrupa las tareas por el campo fkUsuario
        console.log("tareas de los vendedores", tareas)
        return tareas.reduce((tareasAgrupadas, tarea) => {
            const vendedorId = tarea.fkUsuario;

            if (!tareasAgrupadas[vendedorId]) {
                tareasAgrupadas[vendedorId] = [];
            }

            tareasAgrupadas[vendedorId].push(tarea);
            return tareasAgrupadas;
        }, {});
    };

    const openModal = (tarea) => {
        setTareaSeleccionada(tarea);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container text-center">
                {Object.keys(tareasPorVendedor).map((vendedorId) => (
                    <div key={vendedorId}>
                        <h3 className='mt-3 text-white'>Tareas de Vendedor {vendedorId}</h3>
                        {tareasPorVendedor[vendedorId].map((tarea) => (
                            <Card key={tarea.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{tarea.Titulo}</Card.Title>
                                    <Card.Text>{tarea.Nota}</Card.Text>
                                    <button className="detail-button" onClick={() => openModal(tarea)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ))}
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
        </>
    );
};

export default ListadoTareasEmpresa;
