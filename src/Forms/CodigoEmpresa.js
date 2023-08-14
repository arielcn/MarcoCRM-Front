import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CodigoEmpresa = () => {
    const navigate = useNavigate();

    return (
        <Form className="container mt-5">
            <Form.Group className="mb-3">
                <div className="text-white">
                    <h1>Introduce</h1>
                    <h1>el código de tu empresa</h1>
                </div>
                <Form.Control type="text" placeholder="Código de acceso"/>
            </Form.Group>
            <Button onClick={() => navigate("/home")} variant="primary" type="submit">
                ACCEDER
            </Button>
            <p className="text-white">Si aún no tienes el código, <a className="a" color="blue" onClick={() => navigate("/home")}>click aquí</a></p>
        </Form>
    );
};

export default CodigoEmpresa;