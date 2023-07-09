import React, { useState } from "react";
import "./FormLogin.css";
import { Form, Button, Container } from "react-bootstrap";

const FormLogin = (props) => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [mail, setMail] = useState("");
    const [contraseña, setContraseña] = useState("");

    // User Login info
    const database = [
        {
            mail: "user1@a",
            contraseña: "pass1"
        }
    ];

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.mail === email.value);

        // Compare user info
        if (userData) {
            if (userData.contraseña !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1 className="fs-1 text-white fw-bold mb-4">¡Hola!👋</h1>
                <Form.Group className="mb-3 text-white" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Ingresar email" required />
                    {renderErrorMessage("email")}
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="inputPass">
                        <Form.Control className="inputPassText" type="password" type={showPassword ? "text" : "password"} name="pass" placeholder="Contraseña" required />
                        <Form.Check type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                        {renderErrorMessage("pass")}
                    </div>
                    <a href="">Olvide mi Contraseña</a>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">Iniciar Sesion</Button>
            </Form>
        </Container>
        /* <div className="form">
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
         </div>*/
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <div color="white">User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default FormLogin;