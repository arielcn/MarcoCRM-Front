import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap'

import axios from "axios";

const FormRegisterD = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [codigoEmpresa, setCodigoEmpresa] = useState("");
    const [cuit, setCuit] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let usuario = {
            Nombre: nombre,
            Apellido: apellido,
            Contraseña: contraseña,
            Mail: mail,
            NombreEmpresa: nombreEmpresa,
            CodigoEmpresa: codigoEmpresa,
            Cuit: cuit,
            fkRol: 1,
        };

        axios.post("http://localhost:3001/usuario", { usuario })
            .then((response) => {
                console.log(response.status, response.data.token);
                setError('');
                navigate("/");
            })
            .catch((err) => {
                setError("Mail ya registrado");
                console.log("ERROR!", err);
            });
    }

    const generateRandomString = () => {
        const num = 8;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1 = '';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        setCodigoEmpresa(result1);
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
                    <Form.Control type="email" placeholder="Tu E-Mail" required value={mail} onChange={(e => setMail(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Contraseña</b></Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" required value={contraseña} onChange={(e => setContraseña(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Nombre de la empresa</b></Form.Label>
                    <Form.Control type="text" placeholder="Nombre empresa" required value={nombreEmpresa} onChange={(e => setNombreEmpresa(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Codigo de Empresa</b></Form.Label>
                    <div className="row mt-0">
                        <p className="text-white col-sm-6 fs-2">{codigoEmpresa}</p>
                        <Button className="col-sm-6" variant="primary" onClick={generateRandomString}>Generar Código Aleatorio</Button>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>CUIT</b></Form.Label>
                    <Form.Control type="text" placeholder="CUIT" required value={cuit} onChange={(e => setCuit(e.target.value))} />
                </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                    Registrarse
                </Button>

                <p className="text-danger mt-2">{error}</p>
            </Form>
        </div>
    );
    /* <div className="form">
     <form onSubmit={handleSubmit}>
         <input type="text" name="nombre" value={datos.nombre} placeholder="Nombre" onChange={(e => setNombre(e.target.value))} />
         <input type="text" name="apellido" value={datos.apellido} placeholder="Apellido" onChange={(e => setApellido(e.target.value))} />
         <input type="email" name="mail" value={datos.mail} placeholder="Email" onChange={(e => setMail(e.target.value))} />
         <input type="password" name="contraseña" value={datos.contraseña} placeholder="Contraseña" onChange={(e => setContraseña(e.target.value))} />
         <p>Mínimo 8 caracteres, una mayúscula y un número</p>
         <input type="text" name="codigoEmpresa" value={datos.codigoEmpresa} placeholder="CODIGO DE LA EMPRESA U ORGANIZACIÓN" onChange={(e => setCodigoEmpresa(e.target.value))} />
         <input type="text" name="cuit" value={datos.cuit} placeholder="CUIT" onChange={(e => setCuit(e.target.value))} />
         <div className="button-container">
             <input type="submit" value={"REGISTRARSE"} />
             <p>¿Ya tienes cuenta? <a href="">Iniciar Sesión</a></p>
         </div>
     </form>
 </div>*/
}

export default FormRegisterD;