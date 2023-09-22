import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const {state} = useLocation();

    console.log("HOME", state.usuario);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Abrir menú
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/agenda")}>Agenda</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/listado-cliente")}>Lista clientes</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/tarea")}>Nueva tarea</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/reuniones")}>Reuniones</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Home;