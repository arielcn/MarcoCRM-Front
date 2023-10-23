import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormLogin.css";
import { Form, Button } from "react-bootstrap";
import UsuarioContext from "../context/UsuarioContext";

const FormLogin = () => {
    // React States
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const userContext = useContext(UsuarioContext);

    // User Login info

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let usuario = {
            mail: mail,
            pass: pwd
        };

        userContext.setMailUsuario(mail);

        axios.post('http://localhost:3001/usuario/login', usuario)
        .then(res =>{
            setError('');
            // console.log(res)
            userContext.setUsuario(res.data)
            navigate('/home', {state: {usuario: res.data}});
        })
        .catch(res => {
            setError("Credenciales Incorrectas");
        });
    }

    return (
        <>
        <nav>
        <header className="App-header">
            <img src="logo.png" className="App-logo" alt="logo" />
        </header>
    </nav>
        <div className="app">
            <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <h1 className="fs-1 text-white fw-bold mb-4">¡Hola!👋</h1>
                <Form.Group className="mb-3 text-white" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" required value={mail} onChange={(e => setMail(e.target.value))}/>
                </Form.Group>
                <Form.Group className="mb-4 text-white" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="inputPass">
                        <Form.Control className="inputPassText" type={showPassword ? "text" : "password"} placeholder="Contraseña" required value={pwd} onChange={(e => setPwd(e.target.value))}/>
                        <Form.Check type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <Link to={"/forgot-pwd"}>Olvide mi Contraseña</Link>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">Iniciar Sesion</Button>
                <p className="text-danger mt-2">{error}</p>
                <Link to={"/elegir-user"}>Registrate</Link>
            </Form>
            </div>
        </div>
        </>
    );
}

export default FormLogin;