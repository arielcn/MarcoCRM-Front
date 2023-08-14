import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/Agenda">Agenda</Dropdown.Item>
                <Dropdown.Item href="/ListadoCliente">Lista clientes</Dropdown.Item>
                <Dropdown.Item href="/Tarea">Nueva tarea</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Home;