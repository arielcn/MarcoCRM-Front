import './ListadoCliente.css'

const ListadoCliente = () => {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-8">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Flecharda Snieg</a>
                        <a class="list-group-item list-group-item-primary" id="list-ari-list" data-bs-toggle="list" href="#list-ari" role="tab" aria-controls="list-ari">Ariel Dan Cohen</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Martin Perez</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Flecharda Snieg</a>
                        <a class="list-group-item list-group-item-primary" id="list-ari-list" data-bs-toggle="list" href="#list-ari" role="tab" aria-controls="list-ari">Ariel Dan Cohen</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Martin Perez</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Flecharda Snieg</a>
                        <a class="list-group-item list-group-item-primary" id="list-ari-list" data-bs-toggle="list" href="#list-ari" role="tab" aria-controls="list-ari">Ariel Dan Cohen</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Martin Perez</a>
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Flecharda Snieg</a>
                        <a class="list-group-item list-group-item-primary" id="list-ari-list" data-bs-toggle="list" href="#list-ari" role="tab" aria-controls="list-ari">Ariel Dan Cohen</a>
                        <a class="list-group-item list-group-item-primary " id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Martin Perez</a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="list-name" role="tabpanel" aria-labelledby="list-name-list">
                            <ul class="list-group">
                                <li class="list-group-item">Nombre Apellido/s</li>
                                <li class="list-group-item">Mail</li>
                                <li class="list-group-item">Numero</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="list-ari" role="tabpanel" aria-labelledby="list-ari-list">
                            <ul class="list-group">
                                <li class="list-group-item">Ariel Dan Cohen</li>
                                <li class="list-group-item">ari@ari.ari.com</li>
                                <li class="list-group-item">1212321</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListadoCliente;