import React, { useState } from "react";
import axios from "axios";

const FormRegisterD = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] = useState("");
    const [codigoEmpresa, setCodigoEmpresa] = ("");
    const [cuit, setCuit] = ("")

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent page reload

        let datos = {
            nombre: nombre,
            apellido: apellido,
            contraseña: contraseña,
            mail: mail,
            codigoEmpresa: codigoEmpresa,
            cuit: cuit,
        };

        axios.post("http://localhost:3001/usuario", datos)
        .then((response) => {
            console.log(response.status, response.data.token);
        });
    }

    return (
        <div className="form">
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
        </div>
    );
}

export default FormRegisterD;