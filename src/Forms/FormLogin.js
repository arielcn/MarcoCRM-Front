import React, { useState } from "react";
import "./FormLogin.css";

const FormLogin = (props) => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <h1 className="h1-login">¡Hola!👋</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input className="usuarioLogin" type="text" name="uname" placeholder="Usuario o Email" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input className="usuarioLogin" type={showPassword ? "text" : "password"} name="pass" placeholder="Contraseña" required />
                    <input className="usuarioLogin"type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                    {renderErrorMessage("pass")}
                </div>
                <a href="">Olvide mi Contraseña</a>
                <div className="button-container">
                    <input type="submit" value={"Iniciar Sesion"} />
                </div>
                <p className="subtitle">No tienes cuenta? <a href="">Registrate</a></p>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default FormLogin;