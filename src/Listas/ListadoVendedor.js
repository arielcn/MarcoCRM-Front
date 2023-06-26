import './ListadoVendedor.css'

const ListadoVendedor = () => {
    return (
        <div className='container'>
            <div class="row">
                <h1 className='center'>Listado de vendedores</h1>
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
                        <a class="list-group-item list-group-item-primary" id="list-name-list" data-bs-toggle="list" href="#list-name" role="tab" aria-controls="list-name">Martin Perez</a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="list-name" role="tabpanel" aria-labelledby="list-name-list">
                            <div class="card">
                                <img src="https://images.ctfassets.net/u4vv676b8z52/6yvNBy6OqQPZCCylbhGOL8/f85f456516fd783f37c2eff6e53aee4d/eyeglasses_mens_glasses_trends.jpg?fm=jpg&q=80" class="card-img-fluid-top"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Nombre</h5>
                                    <p class="card-text">Cantidad de ventas:</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Email</li>
                                    <li class="list-group-item">CUIT</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-ari" role="tabpanel" aria-labelledby="list-ari-list">
                            <div class="card">
                                <img src="https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg" class="card-img-top"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Nombre</h5>
                                    <p class="card-text">Cantidad de ventas:</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Email</li>
                                    <li class="list-group-item">CUIT</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
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