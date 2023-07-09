import React, { useState, useEffect } from "react";
import axios from 'axios';
//import "./FormRegisterV.css";

const FormRegisterV = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let datos = {
            nombre: nombre,
            apellido: apellido,
            mail: mail,
            contraseña: contraseña,
        };

        axios.post("http://localhost:3001/usuario", datos)
        .then((response) => {
            console.log(response.status, response.data.token);
        });
    }

    return (
        <div className="container">
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
        </div>
    );
}

export default FormRegisterV;