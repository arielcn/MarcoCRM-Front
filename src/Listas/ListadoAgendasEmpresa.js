import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoAgendasEmpresa.css'
import { Card, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioContext';
import { useContext } from 'react';

const ListadoAgendasEmpresa = () => {
    const navigate = useNavigate();
    const [agendasPorVendedor, setAgendasPorVendedor] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [agendaSeleccionada, setAgendaSeleccionada] = useState(null);
    const userContext = useContext(UsuarioContext);

    useEffect(() => {
        fetchagendas();
    }, []);

   const fetchagendas = () => {
    axios.get(`http://localhost:3001/agendas/empresa/${userContext.usuario.fkEmpresa}`)
        .then(response => {
            const agendasResponse = response.data;
            const agendasAgrupadas = groupAgendasPorVendedor(agendasResponse);
            setAgendasPorVendedor(agendasAgrupadas);
        })
        .catch(error => {
            console.error(error);
        });
};


    const groupAgendasPorVendedor = (agendas) => {
        // Agrupa las agendas por el campo fkUsuario
        console.log("agendas de los vendedores", agendas)
        return agendas.reduce((agendasAgrupadas, agenda) => {
            const vendedorId = agenda.fkUsuario;

            if (!agendasAgrupadas[vendedorId]) {
                agendasAgrupadas[vendedorId] = [];
            }

            agendasAgrupadas[vendedorId].push(agenda);
            return agendasAgrupadas;
        }, {});
    };

    const openModal = (agenda) => {
        setAgendaSeleccionada(agenda);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container text-center">
                {Object.keys(agendasPorVendedor).map((vendedorId) => (
                    <div key={vendedorId}>
                        <h3>agendas de Vendedor {vendedorId}</h3>
                        {agendasPorVendedor[vendedorId].map((agenda) => (
                            <Card key={agenda.Id} className="card">
                                <Card.Body>
                                    <Card.Title>{agenda.NombreCliente}</Card.Title>
                                    <Card.Text>{agenda.ApellidoCliente}</Card.Text>
                                    <button className="detail-button" onClick={() => openModal(agenda)}>
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
                    {agendaSeleccionada && (
                        <div>
                            <h4>Descripción: {agendaSeleccionada.Descripcion}</h4>
                            <p>Fecha: {agendaSeleccionada.Fecha}</p>
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

export default ListadoAgendasEmpresa;
