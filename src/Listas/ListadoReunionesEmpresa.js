import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoReunionesEmpresa.css'
import { Card, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioContext';
import { useContext } from 'react';

const ListadoReunionesEmpresa = () => {
    const navigate = useNavigate();
    const [reunionesPorVendedor, setReunionesPorVendedor] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [reunionSeleccionada, setReunionSeleccionada] = useState(null);
    const userContext = useContext(UsuarioContext);

    useEffect(() => {
        fetchReuniones();
    }, []);

   const fetchReuniones = () => {
    axios.get(`http://localhost:3001/reuniones/empresa/${userContext.usuario.fkEmpresa}`)
        .then(response => {
            console.log("response", response)
            const reunionesResponse = response.data;
            const reunionesAgrupadas = groupReunionesPorVendedor(reunionesResponse);
            setReunionesPorVendedor(reunionesAgrupadas);
        })
        .catch(error => {
            console.error(error);
        });
};


    const groupReunionesPorVendedor = (reuniones) => {
        // Agrupa las reuniones por el campo fkUsuario
        console.log("reuniones de los vendedores", reuniones)
        return reuniones.reduce((reunionesAgrupadas, reunion) => {
            const vendedorId = reunion.fkUsuario;

            if (!reunionesAgrupadas[vendedorId]) {
                reunionesAgrupadas[vendedorId] = [];
            }

            reunionesAgrupadas[vendedorId].push(reunion);
            return reunionesAgrupadas;
        }, {});
    };

    const openModal = (reunion) => {
        setReunionSeleccionada(reunion);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container text-center">
                {Object.keys(reunionesPorVendedor).map((vendedorId) => (
                    <div key={vendedorId}>
                        <h3 className='mt-3 text-white'>Reuniones de Vendedor {vendedorId}</h3>
                        {reunionesPorVendedor[vendedorId].map((reunion) => (
                            <Card key={reunion.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{reunion.Titulo}</Card.Title>
                                    <Card.Text>{reunion.Formato}</Card.Text>
                                    <button className="detail-button" onClick={() => openModal(reunion)}>
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
                    {reunionSeleccionada && (
                        <div>
                            <h4>Título: {reunionSeleccionada.Titulo}</h4>
                            <p>Fecha: {reunionSeleccionada.Fecha}</p>
                            <p>Foto: {reunionSeleccionada.Imagen}</p>
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

export default ListadoReunionesEmpresa;
