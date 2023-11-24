import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const FormRegisterV = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [codigoEmpresa, setCodigoEmpresa] = useState("");
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); //Prevent page reload

        let usuario = {
            Nombre: nombre,
            Apellido: apellido,
            Contraseña: contraseña,
            Mail: mail,
            Telefono: telefono,
            CodigoEmpresa: codigoEmpresa,
            fkRol: 2,
        };

        axios.post("http://localhost:3001/usuario", {usuario})
            .then((response) => {
                console.log(response);
                setError('')
                navigate('/');
            })
            .catch((err) => {
                setError("Mail ya registrado");
                console.log("ERROR!", err);
                console.log(usuario)
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
                    <Form.Control type="email" placeholder="Tu E-Mail" required value={mail} onChange={(e => setMail(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Contraseña</b></Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" required value={contraseña} onChange={(e => setContraseña(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fs-4 text-white"><b>Teléfono</b></Form.Label>
                    <Form.Control type="number" placeholder="Teléfono" required value={telefono} onChange={(e => setTelefono(e.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className="fs-4 text-white"><b>Código de la empresa asociada</b></Form.Label>
                        <Form.Control type="text" placeholder="Código empresa" required value={codigoEmpresa} onChange={(e => setCodigoEmpresa(e.target.value))} />
                    </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                    Registrarse
                </Button>

                <p className="text-danger mt-2">{error}</p>
            </Form>
        </div>
        /*<div className="container">
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" value={datos.nombre} placeholder="Nombre" onChange={(e => setNombre(e.target.value))}/>
                <input type="text" value={datos.apellido} placeholder="Apellido" onChange={(e => setApellido(e.target.value))}/>
                <input type="text" value={datos.mail} placeholder="Email" onChange={(e => setMail(e.target.value))}/>
                <input type="password" value={datos.contraseña} placeholder="Contraseña" onChange={(e => setContraseña(e.target.value))}/>
                <p>Mínimo 8 caracteres, una mayúscula y un número</p>
                <div className="button-container">
                    <input type="submit" value={"REGISTRARSE"} />
                    <p>¿Ya tienes cuenta? <a href="">Iniciar Sesión</a></p>
                </div>
            </form>
        </div>*/
    );
}

export default FormRegisterV;