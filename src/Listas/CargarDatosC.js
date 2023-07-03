const CargarDatosC = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Cargar datos de clientes</h1>
            <form>
                <div className="row mb-4">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellido" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Empresa" />
                    </div>
                </div>
                <button className="btn btn-outline-primary btn-lg" type="submit">Subir</button>
            </form>
        </div>
    );
}

export default CargarDatosC;