import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoCliente.css'

const ListadoCliente = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteSeleccionado, setClienteSeleccionado] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/clientes/SmanWatches')
            .then((response) => {
                console.log(response)
                let datosClientes = response.data;
                setClientes(datosClientes);
                console.log(datosClientes)
            });
    }, []);

    const seleccionarCliente = (index) => {
        setClienteSeleccionado(index);
    };


    //<a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{cliente.Nombre} {cliente.Apellido}</a>


    //{clientes.map(cliente => <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{cliente.Nombre} {cliente.Apellido}</a>)}
    //<a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{clientes.Nombre} {clientes.Apellido}</a>
    return (
        <div className='container'>
            <div class="row mb-3">
                <div class="col-8">
                    <div class="list-group" id="list-tab" role="tablist">
                        {clientes.map(cliente, index => (<a
                                key={index}
                                className={`list-group-item list-group-item-primary ${clienteSeleccionado === index ? 'active' : ''}`}
                                onClick={() => seleccionarCliente(index)}
                                data-bs-toggle="list"
                                href={`#list-name-${index}`}
                                role="tab"
                                aria-controls={`list-name-${index}`}
                            >
                                {cliente.Nombre} {cliente.Apellido}
                            </a>
                        
                        ))}
                    </div>

                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="list-name" role="tabpanel" aria-labelledby="list-name-list">

                            <ul class="list-group">
                                <div>{clientes.map(cliente => (<li class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">
                                    <li className="list-group-item">
                                        <strong>Correo electrónico:</strong> {cliente.Mail}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Teléfono</strong> {cliente.Telefono}
                                    </li>
                                </li>))}
                                </div>

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