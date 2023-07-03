import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoCliente.css'

const ListadoCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/clientes')
            .then((response) => {
                console.log(response)
                const clientes = response.data;
                setClientes(clientes);
                console.log(clientes)
            });
    });

    //{clientes.map(cliente => <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{cliente.Nombre} {cliente.Apellido}</a>)}
    return (
        <div className='container'>
            <div class="row mb-3">
                <div class="col-8">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{clientes.Nombre} {clientes.Apellido}</a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="list-name" role="tabpanel" aria-labelledby="list-name-list">
                            <ul class="list-group">
                                <li class="list-group-item">{clientes.Nombre} {clientes.Apellido}</li>
                                <li class="list-group-item">{clientes.Mail}</li>
                                <li class="list-group-item">{clientes.Telefono}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary" type="submit">Cargar Cliente</button>
        </div>
    );
};

export default ListadoCliente;