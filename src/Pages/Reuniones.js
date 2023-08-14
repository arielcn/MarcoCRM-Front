import Card from 'react-bootstrap/Card';

const Reuniones = () => {

    return (
        <div>
            <Card className='cardReunion'>
                <Card.Img variant="top" src="telefono.png" />
                <Card.Body>
                    <Card.Title>Llamada</Card.Title>
                </Card.Body>
            </Card>

            <Card className='cardReunion'>
                <Card.Img variant="top" src="telefono.png" />
                <Card.Body>
                    <Card.Title>Whatsapp</Card.Title>
                </Card.Body>
            </Card>

            <Card className='cardReunion'>
                <Card.Img variant="top" src="telefono.png" />
                <Card.Body>
                    <Card.Title>Videollamada</Card.Title>
                </Card.Body>
            </Card>

            <Card className='cardReunion'>
                <Card.Img variant="top" src="telefono.png" />
                <Card.Body>
                    <Card.Title>Mail</Card.Title>
                </Card.Body>
            </Card>
        </div>




    )

}

export default Reuniones;