import './Reuniones.css';

const Reuniones = () => {
  return (
    <div class="container px-4">
      <div class="row gx-5">
        <section class="col-4">
          <div class="p-3">
            <div className="row">
              <div class="card mb-3 col-sm-6" id="cardFormato">
                <img src="../../telefono.png" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Llamada</h5>
                  </div>
              </div>              
              <div class="card mb-3 col-sm-6" id="cardFormato">
                <img src="../../gmail.png" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Mail</h5>
                  </div>
              </div>                          
              <div class="card mb-3 col-sm-6" id="cardFormato">
                <img src="../../whatsapp.png" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">WhatsApp</h5>
                  </div>
              </div>                           
              <div class="card mb-3 col-sm-6" id="cardFormato">
                <img src="../../videollamada.png" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Videollamada</h5>
                  </div>
              </div>              

              <div className="row fechaHora">
                <img src='../../reloj.png' alt=''></img>
                <h1>Fecha y hora</h1>
                <label>Fecha: <input type='date'></input></label>
                <label>Hora: <input type='time'></input></label>
              </div>
            </div>
          </div>
        </section>
        
        <section class="col-8">
          <h3>Nombre cliente</h3>
          <div class="p-3">
            <h1>Título de la reunion</h1>
          </div>
        </section>
      </div>
    </div>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-sm-6 flex-container">
    //     <h1 className="texto">Formato</h1>

    //       <Card className="cardReunion">
    //         <Card.Img className="foto" variant="top" src="../../telefono.png" />
    //         <Card.Body>
    //           <Card.Title>Llamada</Card.Title>
    //         </Card.Body>
    //       </Card>

    //       <Card className="cardReunion">
    //         <Card.Img className="foto" variant="top" src="../../whatsapp.png" />
    //         <Card.Body>
    //           <Card.Title>Whatsapp</Card.Title>
    //         </Card.Body>
    //       </Card>

    //       <Card className="cardReunion">
    //         <Card.Img className="foto" variant="top" src="../../videollamada.png" />
    //         <Card.Body>
    //           <Card.Title>Videollamada</Card.Title>
    //         </Card.Body>
    //       </Card>

    //       <Card className="cardReunion">
    //         <Card.Img className="foto" variant="top" src="../../mail.png" />
    //         <Card.Body>
    //           <Card.Title>Mail</Card.Title>
    //         </Card.Body>
    //       </Card>
    //       <h3 className="texto">Fecha y hora</h3>
    //       <Card className="cardReunion">
    //         <Card.Img className="foto" variant="top" src="../../reloj.png" />
    //         <Card.Body>
    //           <Card.Title>Fecha y hora</Card.Title>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="col-sm-6">
    //       <h1 className="tituloreunion">Título de la reunión</h1>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Reuniones;
