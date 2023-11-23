import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3001/usuario/getById/:pId')
        .then((res) => {
            setUsuario(res.data);
            console.log(usuario);
          });
    })

    return (
        <div class="container text-white">
                <h1 className="mt-5">Mi Perfil</h1>
                <h2>{usuario.nombre} {usuario.apellido}</h2>
                <h3>{usuario.cuit}</h3>
                <button onClick={() => {navigate('/editar-perfil')}} className="mt-4 btn btn-warning">Editar Perfil</button>
        </div>
    );
};

export default Perfil;