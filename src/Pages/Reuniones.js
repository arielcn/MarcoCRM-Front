import NavbarHome from './Navbar';
import './Reuniones.css';
import React, { useState } from "react";


const Reuniones = () => {
  const [Clickeado, setClickeado] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickeado = (cardId) => {
    setSelectedCard(cardId);
  };

  const isCardSelected = (cardId) => {
    return selectedCard === cardId;
  };


  const textClass = Clickeado ? "text-blue" : "text-original";

  return (
    <div class="container px-4">
      <NavbarHome></NavbarHome>
      <div class="row gx-5">
        <section class="col-4">
          <div class="p-3">
            <div className="row text-center">
              <div className="card mb-3 me-3 col-sm-5" id="cardFormato">
                <img src="../../telefono.png" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5
                    className={`card-title ${isCardSelected(1) ? "text-blue" : "text-original"}`}
                    onClick={() => handleClickeado(1)}
                    style={{ cursor: "pointer" }}
                  >
                    Llamada
                  </h5>
                </div>
              </div>
              <div className="card mb-3 col-sm-5" id="cardFormato">
                <img src="../../gmail.png" height="100%" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5
                    className={`card-title ${isCardSelected(2) ? "text-blue" : "text-original"}`}
                    onClick={() => handleClickeado(2)}
                    style={{ cursor: "pointer" }}
                  >
                    Mail
                  </h5>
                </div>
              </div>
              <div className="card mb-3 me-3 col-sm-5" id="cardFormato">
                <img src="../../whatsapp.png" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5
                    className={`card-title ${isCardSelected(3) ? "text-blue" : "text-original"}`}
                    onClick={() => handleClickeado(3)}
                    style={{ cursor: "pointer" }}
                  >
                    Whatsapp
                  </h5>
                </div>
              </div>
              <div className="card mb-3 col-sm-5" id="cardFormato">
                <img src="../../videollamada.png" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5
                    className={`card-title ${isCardSelected(4) ? "text-blue" : "text-original"}`}
                    onClick={() => handleClickeado(4)}
                    style={{ cursor: "pointer" }}
                  >
                    Videollamada
                  </h5>
                </div>
              </div>

              <div className="row fechaHora">
                <img src='../../reloj.png' alt=''></img>
                <div>
                  <h3>Fecha y hora</h3>
                  <label>Fecha: <input type='date'></input></label>
                  <label>Hora: <input type='time'></input></label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="col-8">
          <div class="p-3 text-white">
            <h1>Título de la reunion</h1>
          </div>
          <div className='row'>
            <div className='col-6 notas text-white'>
              <h3>Notas</h3>
              <input placeholder='nota' />
              <input placeholder='nota' />
              <input placeholder='nota' />
            </div>
            <div className='ms-4 col-5 text-white'>
              <h3>Imagen - Subir Archivo</h3>
              <input type='file' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxNSsYpzYYOMud_qstvFIqdEU2TriY-uVOg&usqp=CAU'>
              </input>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reuniones;
