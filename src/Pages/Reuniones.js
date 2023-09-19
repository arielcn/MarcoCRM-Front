import Card from "react-bootstrap/Card";
import './Reuniones.css';

const Reuniones = () => {
  return (
    <>
        <h1 className="tituloreunion">Título de la reunión</h1>
        <h1 className="texto">Formato</h1>
      <div>
        <Card className="cardReunion">
          <Card.Img className="foto" variant="top" src="../../telefono.png" />
          <Card.Body>
            <Card.Title>Llamada</Card.Title>
          </Card.Body>
        </Card>

        <Card className="cardReunion">
          <Card.Img className="foto" variant="top" src="../../whatsapp.png" />
          <Card.Body>
            <Card.Title>Whatsapp</Card.Title>
          </Card.Body>
        </Card>

        <Card className="cardReunion">
          <Card.Img className="foto" variant="top" src="../../videollamada.png" />
          <Card.Body>
            <Card.Title>Videollamada</Card.Title>
          </Card.Body>
        </Card>

        <Card className="cardReunion">
          <Card.Img className="foto" variant="top" src="../../mail.png" />
          <Card.Body>
            <Card.Title>Mail</Card.Title>
          </Card.Body>
        </Card>
        <h3 className="texto">Fecha y hora</h3>
        <Card className="cardReunion">
          <Card.Img className="foto" variant="top" src="../../reloj.png" />
          <Card.Body>
            <Card.Title>Fecha y hora</Card.Title>
          </Card.Body>
        </Card>
      </div>
      
    </>
  );
};

export default Reuniones;
