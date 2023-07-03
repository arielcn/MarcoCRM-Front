import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListadoVendedor.css'

const ListadoVendedor = () => {

    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/usuario/getById/1')
            .then((response) => {
                console.log(response)
                const usuarios = response.data;
                setUsuarios(usuarios);
                console.log(usuarios)
            });
    });

    return (
        <div className='container'>
            <div class="row">
                <h1 className='center'>Listado de vendedores</h1>
                <div class="col-8">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">{usuarios.Nombre} {usuarios.Apellido}   </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="list-name" role="tabpanel" aria-labelledby="list-name-list">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{usuarios.Nombre} {usuarios.Apellido}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{usuarios.Email}</li>
                                    <li class="list-group-item">{usuarios.Cuit}</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Gráficos</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListadoVendedor;