import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navbarr = () => {
    return (
        <Navbar className='container w-50 mt-5 rounded-pill' bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className='me-5' as={Link} to="/home">Tareas</Nav.Link>
                    <Nav.Link className='me-5' as={Link} to="/agenda">Agenda</Nav.Link>
                    <Nav.Link className='me-5' as={Link} to="/reuniones">Reuniones</Nav.Link>
                    <Nav.Link className='me-5' as={Link} to="/listado-cliente">Clientes</Nav.Link>
                    <Nav.Link className='me-5' as={Link} to="/agenda">Analitica</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );

}

export default Navbarr;