import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card } from 'react-bootstrap';
import React from 'react';
import { Row, Col, Container  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarHome from './Navbar';


function Tarea({ tarea, onDrop }) {
    const navigate = useNavigate();
    const [tareas, setTareas] = useState([]);
    const [{ isDragging }, ref] = useDrag(() => ({
        type: 'Tarea',
        item: { id: tarea.Id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }))

    useEffect(() => {
        axios.get('http://localhost:3001/notas/1')
            .then((response) => {
                console.log("notas:", response)
                const datosTareas = response.data;
                setTareas(datosTareas);
                console.log(datosTareas)
            })
            .catch((error) => {
                console.error("Error al obtener notas:", error);
            });

    }, []);

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Card className="card text-center" style={{ width: '18rem' }}>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Text className="descCard">{tarea.Nota}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

function ListaTareas({ Categoria, tareasAMostrar, tareas, setTareas, setTareasFavoritos }) {
    const handleDrop = (draggedId) => {
        const draggedSchedule = tareas.find(tarea => tarea.Id === draggedId);

        if (typeof draggedSchedule !== "undefined") {
            // Cambiar el valor Favoritos a true
            draggedSchedule.Favorito = true;
            // Mover el tarea a la lista de tareas favoritos
            setTareas((tareas) => {
                const state = tareas.filter(tarea => tarea.Id !== draggedId);
                return state;
            });
            setTareasFavoritos((tareasFavoritos) => {
                const state = [...tareasFavoritos, draggedSchedule];
                return state;
            });
        } else {
            draggedSchedule.Favorito = false;

            setTareasFavoritos((tareasFavoritos) => {
                const state = tareasFavoritos.filter(tarea => tarea.Id !== draggedId);
                return state;
            });
            setTareas((tareas) => {
                const state = [...tareas, draggedSchedule];
                return state;
            });
            // Lógica para otro destino (por ejemplo, la sección original)
        }
    };


    const [, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'Tarea',
        // Props to collect
        drop: (item) => handleDrop(item.id),
    }))

    return (
        <Container ref={drop} role={"Lista"}>
            <h1>{Categoria}</h1>
            <Row>
                {tareasAMostrar.map(tarea => (
                    <Col key={tarea.id} xs={12} sm={6} md={4}>
                        <Tarea tarea={tarea} onDrop={() => handleDrop(tarea.Id)} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

const Home = () => {
    const navigate = useNavigate();
    const [tareas, setTareas] = useState([]);
    const [tareasVerdes, setTareasVerdes] = useState([]);
    const [tareasAmarillas, setTareasAmarillas] = useState([]);
    const [tareasRojas, setTareasRojas] = useState([]);
    const { state } = useLocation();

    console.log("HOME", state && state.usuario);
    return (
        <>
            <NavbarHome></NavbarHome>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Abrir menú
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/agenda")}>Agenda</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/listado-cliente")}>Lista clientes</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/tarea")}>Nueva tarea</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/reuniones")}>Reuniones</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <DndProvider backend={HTML5Backend}>
                <Container style={{ display: "flex", flexDirection: "row" }}>
                    <ListaTareas Categoria={"Hecho"} tareasAMostrar={tareasVerdes} tareas={tareasVerdes} setTareas={setTareasVerdes} setTareasVerdes={setTareasVerdes} ></ListaTareas>
                    <ListaTareas Categoria={"En proceso "} tareasAMostrar={tareasAmarillas} tareas={tareasAmarillas} setTareasAmarillas={setTareasAmarillas} tareasAmarillas={tareasAmarillas}></ListaTareas>
                    <ListaTareas Categoria={"No realizado"} tareasAMostrar={tareasRojas} tareas={tareasRojas} setTareasRojas={setTareasRojas} tareasRojas={tareasRojas}></ListaTareas>
                </Container>
            </DndProvider>

        </>
    );

}

export default Home;
