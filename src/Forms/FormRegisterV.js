import React, { useState } from "react";
import "./FormRegisterV.css";

const FormRegisterV = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    }

    return (
        <div className="container">
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <br/>
                <input type="text" placeholder="Usuario" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <p>Mínimo 8 caracteres, una mayúscula y un número</p>
                <div className="button-container">
                    <input type="submit" value={"REGISTRARSE"} />
                    <p>¿Ya tienes cuenta? <a href="">Iniciar Sesión</a></p>
                </div>
            </form>
        </div>
    );
}

export default FormRegisterV;