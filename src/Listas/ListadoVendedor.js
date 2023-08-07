import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoVendedor.css'

const ListadoVendedor = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [vendedorSeleccionado, setVendedorSeleccionado] = useState("");


    useEffect(() => {
        axios.get('http://localhost:3001/usuario/Microsoft')
            .then((response) => {
                console.log(response)
                const datosUsuarios = response.data;
                setUsuarios(datosUsuarios);
                console.log(datosUsuarios)
            });
    }, []);
    //<a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{usuario.Nombre} {usuario.Apellido}   </a>

    const seleccionarVendedor = (index) => {
        setVendedorSeleccionado(index);
    };

    return (
        <div className='container'>
            <div className="row mb-3">
                <div className="col-8">
                    <div className="list-group" id="list-tab" role="tablist">
                        {usuarios.map((usuario, index) => (<a
                            key={index}
                            className={`list-group-item list-group-item-primary ${vendedorSeleccionado === index ? 'active' : ''}`}
                            onClick={() => seleccionarVendedor(index)}
                            data-bs-toggle="list"
                            href={`#list-name-${index}`}
                            role="tab"
                            aria-controls={`list-name-${index}`}
                        >
                            {usuario.Nombre} {usuario.Apellido}
                        </a>

                        ))}
                    </div>

                </div>
                <div className="col-4">
                <div className="tab-content" id="nav-tabContent">
                        {usuarios.map((usuario, index) => (
                            <div
                                key={index}
                                className={`tab-pane fade ${vendedorSeleccionado === index ? 'show active' : ''}`}
                                id={`list-name-${index}`}
                                role="tabpanel"
                                aria-labelledby={`list-name-${index}-list`}
                            >
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Nombre:</strong> {usuario.Nombre}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Apellido:</strong> {usuario.Apellido}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Correo electrónico:</strong> {usuario.Mail}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Teléfono:</strong> {usuario.Telefono}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary" type="submit">Cargar vendedor</button>
        </div>
    );
};

export default ListadoVendedor;