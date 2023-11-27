import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, } from "react";
import './EditarPerfil.css'
import UsuarioContext from "../context/UsuarioContext";
import { useContext } from "react";

const EditarPerfil = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [cuit, setCuit] = useState();
    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const userContext = useContext(UsuarioContext);


    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    const handleCuitChange = (e) => {
        setCuit(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setContraseña(e.target.value);
    };



    const handleSubmit = () => {
        let usuario = {
            Nombre: nombre,
            Apellido: apellido,
            Cuit: cuit,
            Mail: email,
            Contraseña: contraseña,
        }
        const usuarioId = userContext.usuario.Id

        axios.post(`http://localhost:3001/usuario/${usuarioId}`, usuario)
            .then(res => {
                console.log("idUSuario", usuarioId)
                navigate('/home', { state: { usuario: res.data } });
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container text-white">
        <div className="row">
            <h1>Editar tu Perfil</h1>
            <section className="col-md-6">
                <label className="form-label">Nombre</label>
                <input onChange={handleNombreChange} placeholder="Nombre" type="text" className="form-control mb-2" />
                <label className="form-label">Apellido</label>
                <input onChange={handleApellidoChange} placeholder="Apellido" type="text" className="form-control" />
                <label className="form-label">CUIT</label>
                <input onChange={handleCuitChange} placeholder="CUIT" type="text" className="form-control" />
            </section>
            <section className="col-md-6">
                <label className="form-label">E-Mail</label>
                <input onChange={handleEmailChange} className="form-control mb-2" placeholder="E-Mail" />
                <label className="form-label">Contraseña</label>
                <div className="inputPass">
                    <input onChange={handlePasswordChange} type={showPassword ? "text" : "password"} className="form-control inputPassText" placeholder="Contraseña" />
                    Mostrar:<input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                </div>
            </section>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleSubmit}>Guardar cambios</button>
    </div>
    );
};

export default EditarPerfil;