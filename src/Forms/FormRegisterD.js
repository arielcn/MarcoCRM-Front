import React, { useState,useEffect } from "react";
import axios from "axios";

const FormRegisterD = (props) => {
    const [datos, setDatos] = useState([]);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    }

    useEffect(() => {
        axios.get('http://localhost:3001/')
          .then((response) => {    
            setDatos(response.data); //no se si está bien asi
          });
      });

    return (
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
}

export default FormRegisterD;