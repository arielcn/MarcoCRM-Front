import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormLogin.css";
import { Form, Button, Container } from "react-bootstrap";

const FormLogin = () => {
    // React States
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    // User Login info


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let usuario = {
            mail: mail,
            pass: pwd
        };

        axios.post('http://localhost:3001/usuario/login', usuario)
        .then(res =>{
            console.log(res);
            setError('');
            navigate('/home');
        })
        .catch(res => {
            setError("Credenciales Incorrectas");
        });
    }

    // JSX code for login form
    /*const renderForm = (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1 className="fs-1 text-white fw-bold mb-4">¡Hola!👋</h1>
                <Form.Group className="mb-3 text-white" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" required value={mail} onChange={(e => setMail(e.target.value))}/>
                </Form.Group>
                <Form.Group className="mb-5 text-white" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="inputPass">
                        <Form.Control className="inputPassText" type={showPassword ? "text" : "password"} placeholder="Contraseña" required value={pwd} onChange={(e => setPwd(e.target.value))}/>
                        <Form.Check type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <a href="">Olvide mi Contraseña</a>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">Iniciar Sesion</Button>
            </Form>
        </Container>
         <div className="form">
             <h1 className="h1-login">¡Hola!👋</h1>
             <form onSubmit={handleSubmit}>
                 <div className="input-container">
                     <input className="usuarioLogin" type="email" name="email" placeholder="Email" required />
                     {renderErrorMessage("email")}
                 </div>
                 <div className="input-container">
                     <input className="usuarioLogin" type={showPassword ? "text" : "password"} name="pass" placeholder="Contraseña" required />
                     <input className="usuarioLogin" type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                     {renderErrorMessage("pass")}
                 </div>
                 <a href="">Olvide mi Contraseña</a>
                 <div>
                     <button type="submit" className="btn btn-primary btn-lg mt-5">Iniciar Sesion</button>
                 </div>
                 <p className="subtitle mt-5">No tienes cuenta? <a href="">Registrate</a></p>
             </form>
         </div>
    );*/

    return (
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
                    <a href="">Olvide mi Contraseña</a>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">Iniciar Sesion</Button>
                <p className="text-danger mt-2">{error}</p>
                <Link to={"/elegir-user"}>Registrate</Link>
            </Form>
            </div>
        </div>
    );
}

export default FormLogin;