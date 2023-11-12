import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState, useEffect } from "react";

const EditarPerfil = () => {
    const navigate = useNavigate();

    useEffect = () => {

        axios.post('http://localhost:3001/usuario/getById')
        .then(res =>{
            navigate('/home', {state: {usuario: res.data}});
        })
        .catch(res => {
        });
    }

    return (
        <div className="container text-center">
            <h1>Editar tu perfil</h1>
            <form>
                <label for='nombre'>Nombre</label>
                <input name="nombre" type="text" placeholder="Nombre"></input>
                <label for='apellido'>Apellido</label>
                <input name="apellido" type="text" placeholder="Apellido"></input>
            </form>
        </div>
    );
};

export default EditarPerfil;