import NavbarHome from './Navbar';
import './Reuniones.css';
import React, { useState } from "react";
import axios from 'axios';


const Reuniones = () => {
  const [Clickeado, setClickeado] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [formato, setFormato] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent page reload

    let datos = {
      Hora: hora,
      Fecha: fecha,
      Formato: formato,
      Titulo: titulo,
      Imagen: imagen,
    };

    axios.post("http://localhost:3001/reuniones", { datos })
      .then((response) => {
        console.log(response.status, response.data.token);
        //navigate("/");
      })
      .catch((err) => {
        console.log("ERROR!", err);
      });
  }

  const handleClickeado = (cardId) => {
    setSelectedCard(cardId);
    switch (cardId) {
      case 1:
        setFormato("Llamada");
        break;
      case 2:
        setFormato("Presencial");
        break;
      case 3:
        setFormato("Whatsapp");
        break;
      case 4:
        setFormato("Videocall");
        break;
    }
  };

  const isCardSelected = (cardId) => {
    return selectedCard === cardId;
  };


  const textClass = Clickeado ? "text-blue" : "text-original";

  return (
    <>
      <NavbarHome></NavbarHome>
      <div class="container">
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
                    <img src="../../presencial.jpg" height="100%" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5
                        className={`card-title ${isCardSelected(2) ? "text-blue" : "text-original"}`}
                        onClick={() => handleClickeado(2)}
                        style={{ cursor: "pointer" }}
                      >
                        Presencial
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
                        Videocall
                      </h5>
                    </div>
                  </div>

                  <div className="row fechaHora">
                    <img src='../../reloj.png' alt=''></img>
                    <div>
                      <h3>Fecha y hora</h3>
                      <label>Fecha: <input type='date' onChange={setFecha}></input></label>
                      <label>Hora: <input type='time' onChange={setHora}></input></label>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section class="col-8">
            <div class="p-3 text-white">
              <h1>Título de la reunion</h1>
              <input type='text' placeholder='titulo' onChange={setTitulo}></input>
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
            <button className='btn btn-primary mt-5' type='submit'>Crear</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reuniones;
