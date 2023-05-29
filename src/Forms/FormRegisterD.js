import React, { useState } from "react";
import "./FormRegisterD.css";

const FormRegisterD = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <br/>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <p>Mínimo 8 caracteres, una mayúscula y un número</p>
                <input type="text" placeholder="CUIT" />
                <input type="text" placeholder="NOMBRE DE LA EMPRESA U ORGANIZACIÓN" />
                <div className="button-container">
                    <input type="submit" value={"REGISTRARSE"} />
                    <p>¿Ya tienes cuenta? <a href="">Iniciar Sesión</a></p>
                </div>
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

export default FormRegisterD;