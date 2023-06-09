import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";

const FormRegisterD = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] = useState("");
    const [codigoEmpresa, setCodigoEmpresa] = useState("");
    const [cuit, setCuit] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let usuario = {
            Nombre: nombre,
            Apellido: apellido,
            Contraseña: contraseña,
            Mail: mail,
            CodigoEmpresa: codigoEmpresa,
            Cuit: cuit,
        };

        axios.post("http://localhost:3001/usuario", {usuario})
            .then((response) => {
                console.log(response.status, response.data.token);
            })
            .catch((err) => {
                console.log("ERROR!", err);
            });
    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="fs-4 text-white"><b>Nombre</b></Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e => setNombre(e.target.value))} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="fs-4 text-white"><b>Apellido</b></Form.Label>
                        <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e => setApellido(e.target.value))} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fs-4 text-white"><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Tu E-Mail" value={mail} onChange={(e => setMail(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Contraseña</b></Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={contraseña} onChange={(e => setContraseña(e.target.value))} />
                    <p className="text-white">Mínimo 8 caracteres</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>CUIT</b></Form.Label>
                    <Form.Control type="password" placeholder="CUIT" value={cuit} onChange={(e => setCuit(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>CODIGO de la EMPRESA u ORGANIZACIÓN</b></Form.Label>
                    <Form.Control type="password" placeholder="Codigo" value={codigoEmpresa} onChange={(e => setCodigoEmpresa(e.target.value))} />
                </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                    Registrarse
                </Button>
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