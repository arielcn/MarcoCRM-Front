import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioContext from "../context/UsuarioContext";
import { useContext } from "react";

const Perfil = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});
    const userContext = useContext(UsuarioContext);

    const usuarioId = userContext.usuario.Id

    useEffect(() => {
        axios.get(`http://localhost:3001/usuario/getById/${usuarioId}`)
        .then((res) => {
            setUsuario(res.data);
            console.log("usuario", res.data);
          });
    }, []) 

    return (
        <div class="container text-white">
                <h1 className="mt-5">Mi Perfil</h1>
                <h2>{usuario.Nombre} {usuario.Apellido}</h2>
                <h3>{usuario.Cuit}</h3>
                <button onClick={() => {navigate('/editar-perfil')}} className="mt-4 btn btn-warning">Editar Perfil</button>
        </div>
    );
};

export default Perfil;