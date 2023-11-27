import './CargarDatosReunion.css'
import React, { useState } from "react";
import axios from 'axios';
import { useContext } from 'react';
import UsuarioContext from "../context/UsuarioContext";
import { useNavigate } from 'react-router-dom';


const CargarDatosReunion = () => {
  const [Clickeado, setClickeado] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [formato, setFormato] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState('')
  const userContext = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent page reload

    let reunion = {
        Titulo: titulo,
        Formato: formato,
        Fecha: fecha,
        Imagen: imagen,
        fkUsuario: userContext.usuario.Id
    };
    console.log(reunion);

    axios.post("http://localhost:3001/reuniones",  reunion )
      .then((response) => {
        setError('')
        navigate("/reuniones");
      })
      .catch((error) => {
        console.log("ERROR!", error);
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
                    <h3>Fecha</h3>
                    <label>Fecha: <input type='date' onChange={(e) => setFecha(e.target.value)}></input></label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="col-8">
            <div class="p-3 text-white">
              <h1>Título de la reunion</h1>
              <input type='text' placeholder='Titulo' onChange={(e) => setTitulo(e.target.value)}></input>
            </div>
            <div className='row'>
              <div className='col-6 notas text-white'>
                <h3>Notas</h3>
                <input placeholder='nota' />
              </div>
              <div className='ms-4 col-5 text-white'>
                <h3>Imagen - Subir Archivo</h3>
                <input onChange={setImagen} type='file' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxNSsYpzYYOMud_qstvFIqdEU2TriY-uVOg&usqp=CAU'>
                </input>
              </div>
            </div>
            <button className='btn btn-primary mt-5' type='submit' onClick={handleSubmit}>Crear</button>
            <button onClick={() => { navigate('/home') }} className="btn btn-danger" style={{ marginLeft: '20px', marginTop: '50px'}} type="submit">Cancelar</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default CargarDatosReunion;
