import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import UsuarioContext from "../context/UsuarioContext";

const CargarDatosC = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [error, setError] = useState('')
    const userContext = useContext(UsuarioContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let cliente = {
            Nombre: nombre,
            Apellido: apellido,
            Mail: mail,
            Telefono: telefono,
            MailUsuario: userContext.mailUsuario
        };

        axios.post("http://localhost:3001/clientes", {cliente})
            .then(res => {
                setError('')
                navigate("/listado-cliente")
            })
            .catch(err => {
                setError("Cliente ya existente");
                console.log("ERROR!", err);
            });
    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="fs-4 text-white"><b>Nombre</b></Form.Label>
                        <Form.Control type="text" placeholder="Nombre" required value={nombre} onChange={(e => setNombre(e.target.value))} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="fs-4 text-white"><b>Apellido</b></Form.Label>
                        <Form.Control type="text" placeholder="Apellido" required value={apellido} onChange={(e => setApellido(e.target.value))} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="E-Mail del cliente" required value={mail} onChange={(e => setMail(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Teléfono</b></Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" required value={telefono} onChange={(e => setTelefono(e.target.value))} />
                </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                    Registrar cliente
                </Button>

                <p className="text-danger mt-2">{error}</p>
            </Form>
        </div>
    );


}

/*const CargarDatosC = () => {
    return (
        <div className="container">
            <h1 className="text-white text-center mt-5">Cargar datos de clientes</h1>
            <form>
                <div className="row mb-4">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellido" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Mail" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Teléfono" />
                    </div>
                </div>
                <button className="btn btn-outline-primary btn-lg" type="submit">Subir</button>
            </form>
        </div>
    );
}*/


export default CargarDatosC;