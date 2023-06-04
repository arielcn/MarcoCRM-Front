const CodigoEmpresa = () => {
    return (
        <div>
            <form>
                <h1>Introduce el código de tu empresa</h1>
                <input type="text" placeholder="Código de acceso"/>
                <br/>
                <button type="submit">ACCEDER</button>
                <p>Si aún no tienes el código, <a href="">click aquí</a></p>
            </form>
        </div>
    );
};

export default CodigoEmpresa;