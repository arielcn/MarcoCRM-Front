import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, } from "react";
import './EditarPerfil.css'

const EditarPerfil = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [cuit, setCuit] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            cuit: cuit,
            email: email,
            pass: password
        }

        axios.post('http://localhost:3001/usuario/', usuario)
            .then(res => {
                navigate('/home', { state: { usuario: res.data } });
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div class="container text-white">
            <div class="row">
                <h1>Editar tu Perfil</h1>
                <section className="col-md-6">
                    <label class="form-label">Nombre</label>
                    <input onChange={setNombre} placeholder="Nombre" type="text" className="form-control mb-2"></input>
                    <label class="form-label">Apellido</label>
                    <input onChange={setApellido} placeholder="Apellido" type="text" className="form-control"></input>
                    <label class="form-label">CUIT</label>
                    <input onChange={setCuit} placeholder="CUIT" type="text" className="form-control"></input>
                </section>
                <section className="col-md-6">
                    <label className="form-label">E-Mail</label>
                    <input onChange={setEmail} className="form-control mb-2" placeholder="E-Mail"></input>
                    <label className="form-label">Contraseña</label>
                    <input onChange={setPassword} type="password" className="form-control mb-2" placeholder="Contraseña"></input>
                </section>
            </div>
            <button className="btn btn-primary mt-4" onClick={handleSubmit}>Guardar cambios</button>
        </div>
    );
};

export default EditarPerfil;