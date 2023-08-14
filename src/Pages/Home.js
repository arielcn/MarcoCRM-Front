import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Abrir menú
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/agenda">Agenda</Dropdown.Item>
                <Dropdown.Item href="/listado-cliente">Lista clientes</Dropdown.Item>
                <Dropdown.Item href="/tarea">Nueva tarea</Dropdown.Item>
                <Dropdown.Item href="/reuniones">Reuniones</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Home;